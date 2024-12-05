"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp, Calendar, Users, Lightbulb, Award } from 'lucide-react'
import * as Accordion from '@radix-ui/react-accordion'

export function Overview() {
  const [isExpanded, setIsExpanded] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const objectives = [
    { icon: Calendar, text: "Foster innovation in AI for social good" },
    { icon: Users, text: "Promote collaboration between global participants" },
    { icon: Lightbulb, text: "Develop practical AI solutions for local communities" },
    { icon: Award, text: "Enhance AI skills and knowledge sharing" },
  ]

  return (
    <section className="py-16  ">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 dark:from-blue-400 dark:to-purple-400"
          variants={itemVariants}
        >
          Innovate Today, Transform Tomorrow with AI
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                Global AI Olympiad 2025
              </h3>
              <p className="text-xl mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                The Global AI Olympiad is a groundbreaking international competition designed to bring together innovators,
                developers, and AI enthusiasts from around the world to tackle local community challenges using artificial
                intelligence.
              </p>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      This virtual competition invites professionals, students, and AI enthusiasts to showcase their
                      creativity and problem-solving skills. The event includes workshops, mentorship sessions, and a
                      final presentation, culminating in prizes for the most innovative and impactful solutions.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button
                className="flex items-center justify-center w-full py-2 px-4 bg-black transition-all duration-300 text-white"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? (
                  <>
                    Read less <ChevronUp className="ml-2" />
                  </>
                ) : (
                  <>
                    Read more <ChevronDown className="ml-2" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            variants={itemVariants}
          >
            <Accordion.Root type="single" collapsible className="w-full">
              <Accordion.Item value="objectives">
                <Accordion.Trigger className="w-full p-6 flex items-center justify-between text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <span>Our Objectives</span>
                  <ChevronDown className="transform transition-transform duration-200" />
                </Accordion.Trigger>
                <Accordion.Content className="p-6 pt-0">
                  <ul className="space-y-6">
                    {objectives.map((objective, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <objective.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="ml-4 text-lg text-gray-600 dark:text-gray-300">{objective.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </motion.div>
        </div>
        {/* <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <a
            href="#join-now"
            className="inline-block py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
          >
            Join the AI Revolution
          </a>
        </motion.div> */}
        <motion.p
          className="text-center mt-8 text-xl text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          Leverage the power of AI for positive change in communities worldwide.
        </motion.p>
      </motion.div>
    </section>
  )
}

