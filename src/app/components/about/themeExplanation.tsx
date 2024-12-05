"use client"

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ThemeExplanation = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="max-w-4xl mx-auto p-6 space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">
          AMIBA: AmibaAI - Building a Borderless Future with AI
        </Badge>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Revolutionizing AI Engagement</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <motion.p variants={itemVariants} className="mb-4">
            AMIBA is a multinational initiative based in London that aims to transform how individuals and businesses interact with artificial intelligence. Drawing inspiration from the adaptability and resilience of the amoeba, AMIBA embodies flexibility, continuous growth, and innovation.
          </motion.p>
        </CardContent>
      </Card>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Our Focus</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <motion.ul className="list-disc pl-5 space-y-2">
              <motion.li variants={itemVariants}>Creating a borderless AI-driven society</motion.li>
              <motion.li variants={itemVariants}>Leveraging cutting-edge technology</motion.li>
              <motion.li variants={itemVariants}>Empowering individuals and organizations</motion.li>
            </motion.ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Amiba Bot</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <motion.p variants={itemVariants}>
              Our flagship offering, the Amiba Bot, is a powerful AI tool designed to facilitate:
            </motion.p>
            <motion.ul className="list-disc pl-5 space-y-2 mt-2">
              <motion.li variants={itemVariants}>Project management</motion.li>
              <motion.li variants={itemVariants}>Skill-building</motion.li>
              <motion.li variants={itemVariants}>Global collaboration</motion.li>
            </motion.ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <motion.p variants={itemVariants}>
              By fostering a non-materialistic approach to economic growth, AMIBA envisions a future where knowledge, skills, and innovation drive societal progress.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default ThemeExplanation

