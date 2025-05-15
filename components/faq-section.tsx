"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

export default function FaqSection() {
  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "Our free trial gives you full access to all features for 14 days. No credit card required. At the end of the trial, you can choose the plan that works best for you.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new rate will be prorated for the remainder of your billing cycle.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No, there are no setup fees for any of our plans. You only pay the advertised monthly or annual subscription fee.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and for annual plans, we can also accommodate bank transfers or checks.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "If you're not satisfied with our service, you can request a full refund within 30 days of your initial purchase.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
              Address some major questions to help people make the final call
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-sm text-gray-600">E.g. Cancellation/Refunds related questions</p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-3xl space-y-4 py-12">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={0.1 * index} direction="up">
              <motion.div
                className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  className="flex w-full items-center justify-between p-4 text-left"
                  onClick={() => toggleFaq(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="font-medium">{faq.question}</h3>
                  {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 overflow-hidden"
                    >
                      <div className="p-4 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
