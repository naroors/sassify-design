"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$100",
      period: "/month",
      description: "Perfect for individuals and small teams getting started.",
      features: ["5 projects", "Up to 10 users", "Basic analytics", "24-hour support", "1GB storage"],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$200",
      period: "/month",
      description: "Ideal for growing teams with more advanced needs.",
      features: [
        "15 projects",
        "Up to 50 users",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom integrations",
        "Team collaboration tools",
      ],
      highlighted: true,
    },
    {
      name: "Advanced",
      price: "$300",
      period: "/month",
      description: "For enterprises requiring maximum performance and support.",
      features: [
        "Unlimited projects",
        "Unlimited users",
        "Enterprise analytics",
        "24/7 dedicated support",
        "100GB storage",
        "Custom integrations",
        "Advanced security features",
        "Dedicated account manager",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
              Why to buy/how it helps - Transparent pricing with no hidden fees
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={0.1 * index} direction="up">
              <motion.div
                className={`flex flex-col rounded-lg border ${
                  plan.highlighted ? "border-gray-400 bg-white shadow-md" : "border-gray-200 bg-white"
                } p-6 h-full`}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-medium">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-sm text-gray-500">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * featureIndex, duration: 0.3 }}
                    >
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className={
                      plan.highlighted
                        ? "bg-gray-900 text-white hover:bg-gray-800 w-full transition-colors"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900 w-full transition-colors"
                    }
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Add CTAs to all plans. Don't hide anything.</p>
          <p className="mt-2">Highlight the middle plan, guide users to choose it.</p>
        </div>
      </div>
    </section>
  )
}
