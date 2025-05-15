"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This platform has completely transformed how our team works. We've seen a 40% increase in productivity since implementing it.",
      author: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      rating: 5,
    },
    {
      quote:
        "The ease of use and powerful features make this a no-brainer for any business looking to scale their operations efficiently.",
      author: "Michael Chen",
      role: "CTO, GrowthStartup",
      rating: 5,
    },
    {
      quote:
        "Customer support is exceptional. Any time we've had an issue, the team has responded quickly and effectively.",
      author: "Jessica Williams",
      role: "Operations Director, Enterprise Inc",
      rating: 5,
    },
    {
      quote:
        "We've tried many solutions, but this is the only one that actually delivered on all its promises. Worth every penny.",
      author: "David Rodriguez",
      role: "CEO, SmallBusiness",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Loved by people worldwide</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
              Place a focus on proving to help with conversions
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-sm text-gray-600">People feel relieved to see other people happy with their purchase</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-sm text-gray-600">The more testimonials, the better</p>
          </FadeIn>
        </div>

        <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                  </motion.div>
                ))}
              </div>
              <p className="flex-1 text-sm text-gray-600">"{testimonial.quote}"</p>
              <div>
                <p className="text-sm font-medium">{testimonial.author}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
