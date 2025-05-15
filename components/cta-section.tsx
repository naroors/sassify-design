"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

export default function CtaSection() {
  return (
    <section id="cta" className="py-20">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <motion.div
            className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 text-center shadow-md md:p-12"
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to transform your workflow?
            </motion.h2>
            <motion.p
              className="mb-8 text-gray-600 md:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Join thousands of satisfied users who have improved their productivity with our platform.
            </motion.p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                  Start Your Free Trial
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-100 transition-colors">
                  Schedule a Demo
                </Button>
              </motion.div>
            </div>
            <motion.p
              className="mt-4 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              No credit card required. 14-day free trial.
            </motion.p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
