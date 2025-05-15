"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <FadeIn>
                <motion.div
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                  <span>1,000+ active users</span>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Streamline Your Workflow with Our SaaS Solution
                </h1>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                  Mention key problem: Our platform helps teams collaborate more efficiently, saving you hours of manual
                  work every week. Make it clearly understandable.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.6}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300">
                    Start Free Trial
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-100 transition-all duration-300"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.3}>
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-xl lg:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=550"
                  alt="Product screenshot"
                  width={550}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
