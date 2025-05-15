"use client"

import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Sign up for an account",
      description: "Create your account in less than 2 minutes. No credit card required to get started.",
    },
    {
      number: "02",
      title: "Configure your workspace",
      description: "Set up your preferences and invite your team members to collaborate.",
    },
    {
      number: "03",
      title: "Start optimizing your workflow",
      description: "Use our intuitive tools to streamline your processes and boost productivity.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works?</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
              Explain how to get started with the product in 3 simple steps
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-sm font-medium text-gray-500"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {step.number}
              </motion.div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
