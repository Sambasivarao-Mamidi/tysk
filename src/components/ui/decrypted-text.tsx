import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * DecryptedText
 *
 * A text animation component that reveals the original text by decrypting
 * a scrambled initial state. Can be triggered on hover or when in view.
 */

interface DecryptedTextProps {
    text: string
    speed?: number
    maxIterations?: number
    sequential?: boolean
    revealDirection?: 'start' | 'end' | 'center'
    useOriginalCharsOnly?: boolean
    characters?: string
    className?: string          // Applied to the revealed/original letters
    parentClassName?: string    // Applied to the container
    encryptedClassName?: string // Applied to the scrambled (encrypted) letters
    animateOn?: 'view' | 'hover' // Trigger mode
    [key: string]: any
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'hover',
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState<string>(text)
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [isScrambling, setIsScrambling] = useState<boolean>(false)
    const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set())
    const [iteration, setIteration] = useState<number>(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const containerRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (animateOn === 'view') {
            const observerCallback = (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isScrambling) {
                        setIsHovering(true)
                    }
                })
            }

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }

            const observer = new IntersectionObserver(observerCallback, observerOptions)
            const currentRef = containerRef.current
            if (currentRef) {
                observer.observe(currentRef)
            }

            return () => {
                if (currentRef) observer.unobserve(currentRef)
            }
        }

    }, [animateOn, isScrambling])

    useEffect(() => {
        if (isHovering) {
            setIsScrambling(true)
            setRevealedIndices(new Set())
            setIteration(0)
        } else {
            setIsScrambling(false)
            setDisplayText(text)
        }
    }, [isHovering, text])

    useEffect(() => {
        if (isScrambling) {
            intervalRef.current = setInterval(() => {
                setIteration((prev) => {
                    const nextIteration = prev + 1

                    if (nextIteration > maxIterations && !sequential) {
                        setIsScrambling(false)
                        setRevealedIndices(new Set(text.split('').map((_, i) => i)))
                        return maxIterations // Stop incrementing
                    }

                    return nextIteration
                })
            }, speed)
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [isScrambling, maxIterations, sequential, speed, text])

    useEffect(() => {

        if (isScrambling) {
            setDisplayText((prevText) => {
                return text
                    .split('')
                    .map((char, i) => {
                        if (char === ' ') return ' '

                        // Logic for revealing characters
                        let shouldReveal = false

                        if (sequential) {
                            if (revealDirection === 'start') {
                                shouldReveal = i < (iteration / maxIterations) * text.length
                            } else if (revealDirection === 'end') {
                                shouldReveal = i > text.length - (iteration / maxIterations) * text.length
                            } else if (revealDirection === 'center') {
                                const center = text.length / 2;
                                const spread = (iteration / maxIterations) * (text.length / 2);
                                shouldReveal = i >= center - spread && i <= center + spread
                            }
                        } else {
                            shouldReveal = iteration >= maxIterations;
                        }

                        if (shouldReveal) {
                            setRevealedIndices((prev) => new Set(prev).add(i))
                            return text[i]
                        }

                        // Scramble logic
                        if (useOriginalCharsOnly) {
                            const originalChars = Array.from(new Set(text.split(''))).filter(c => c !== ' ')
                            return originalChars[Math.floor(Math.random() * originalChars.length)]
                        }
                        return characters[Math.floor(Math.random() * characters.length)]
                    })
                    .join('')
            })
        }
    }, [isScrambling, iteration, maxIterations, sequential, revealDirection, text, useOriginalCharsOnly, characters])

    return (
        <span
            ref={containerRef}
            className={cn("inline-block whitespace-pre-wrap", parentClassName)}
            onMouseEnter={() => animateOn === 'hover' && setIsHovering(true)}
            onMouseLeave={() => animateOn === 'hover' && setIsHovering(false)}
            {...props}
        >
            {displayText.split('').map((char, index) => {
                const isRevealed = revealedIndices.has(index) || char === ' ' || !isScrambling;

                return (
                    <span
                        key={index}
                        className={cn(isRevealed ? className : encryptedClassName)}
                    >
                        {char}
                    </span>
                )
            })}
        </span>
    )
}
