"use client"

import { CheckCircle, Zap, Shield, Clock, BarChart, Users } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Increased Productivity",
      description: "Focus on how it helps users save time and accomplish more with less effort.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enhanced Security",
      description: "Keep your data safe with enterprise-grade security features built into every plan.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Savings",
      description: "Automate repetitive tasks and free up hours in your workweek.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Improved Accuracy",
      description: "Reduce human error and ensure consistent quality in your work.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Actionable Insights",
      description: "Make better decisions with data-driven analytics and reporting.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Seamless Collaboration",
      description: "Work together effectively regardless of location or time zone.",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefits</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
              Focus on how it helps users instead of what features it has
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
