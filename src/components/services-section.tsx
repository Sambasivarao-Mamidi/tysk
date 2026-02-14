"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Database, 
  Cloud, 
  LineChart,
  ArrowRight
} from "lucide-react";
import { BackgroundGradient } from "./ui/background-gradient";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications using React, Next.js, Node.js. From landing pages to complex SaaS platforms.",
    gradient: "from-cyan-500 to-blue-600",
    features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development"]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications using React Native and Flutter. iOS and Android deployment.",
    gradient: "from-purple-500 to-pink-600",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions using Python, TensorFlow, and OpenAI. Chatbots, predictive models, and automation.",
    gradient: "from-amber-500 to-orange-600",
    features: ["Python & TensorFlow", "OpenAI Integration", "Computer Vision", "NLP Solutions"]
  },
  {
    icon: Database,
    title: "Data & Backend",
    description: "Robust backend systems, database architecture, and data pipelines. Scalable from day one.",
    gradient: "from-emerald-500 to-green-600",
    features: ["PostgreSQL & MongoDB", "Redis & Caching", "Data Pipelines", "Microservices"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, GCP, and Azure deployment. CI/CD pipelines, containerization, and infrastructure as code.",
    gradient: "from-rose-500 to-red-600",
    features: ["AWS & GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Serverless"]
  },
  {
    icon: LineChart,
    title: "Business Automation",
    description: "Workflow automation, CRM integrations, and business intelligence dashboards that drive growth.",
    gradient: "from-violet-500 to-indigo-600",
    features: ["Zapier & Make", "CRM Integrations", "BI Dashboards", "Workflow Automation"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">
            Our Services
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl mb-4">
            End-to-End{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Development
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-400 text-base sm:text-lg px-2">
            From concept to deployment, we handle everything. Whether you need a student project, 
            startup MVP, or enterprise solution - we deliver production-ready code.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <BackgroundGradient className="rounded-3xl p-6 bg-neutral-900 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold text-white flex items-center gap-2 group">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-xs rounded-full bg-white/5 text-neutral-300 border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400 mb-6">
            Not sure what you need? Let us help you figure it out.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
