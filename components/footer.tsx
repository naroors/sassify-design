"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = 64 // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer id="footer" className="border-t border-gray-200 bg-white py-12">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <FadeIn>
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold">S</span>
              </motion.div>
              <span className="text-xl font-bold">SaaSify</span>
            </Link>
            <p className="text-sm text-gray-600">Streamlining workflows for teams around the world since 2023.</p>
            <div className="mt-4 flex gap-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { icon: <Github className="h-5 w-5" />, label: "GitHub" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Menu</h3>
              <ul className="flex flex-col gap-2">
                {[
                  { name: "Home", id: "hero" },
                  { name: "Benefits", id: "benefits" },
                  { name: "Pricing", id: "pricing" },
                  { name: "Testimonials", id: "testimonials" },
                  { name: "Contact", id: "cta" },
                ].map((link, index) => (
                  <motion.li
                    key={link.id}
                    whileHover={{ x: 2 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      href={`#${link.id}`}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      onClick={(e) => scrollToSection(e, link.id)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="flex flex-col gap-2">
                {["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR"].map((item, index) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 2 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Newsletter</h3>
              <p className="text-sm text-gray-600">Subscribe to our newsletter for the latest updates.</p>
              <div className="mt-2 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-white border-gray-300" />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 transition-colors">Subscribe</Button>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.5}>
        <div className="container mt-8 border-t border-gray-200 pt-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-600">
              2025 ~ made with <span className="text-red-500">❤</span>{" "}
              <a
                href="https://oliwernoga.pl/"
                className="text-gray-900 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                naroors
              </a>
            </p>
            <div className="flex gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
