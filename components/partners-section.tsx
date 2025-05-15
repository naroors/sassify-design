"use client"

import { motion } from "framer-motion"
import StaggerChildren from "@/components/animations/stagger-children"

export default function PartnersSection() {
  return (
    <section id="partners" className="border-t border-gray-200 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.p
            className="text-center text-sm text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by employees at
          </motion.p>

          <StaggerChildren className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-9">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <motion.div
                  className="h-10 w-10 rounded-full bg-gray-200"
                  whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
