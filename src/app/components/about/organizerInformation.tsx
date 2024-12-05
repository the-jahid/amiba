"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const OrganizerInformation = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const sections = [
    {
      title: "Overview",
      content: "BritSync, a sister concern of NobleRoot, is a forward-thinking company dedicated to empowering individuals and businesses to thrive in the digital age. Our mission extends beyond providing AI-driven solutions; we aim to create and nurture entrepreneurs by offering the tools, knowledge, and support they need to take control of their destinies and build something of their own."
    },
    {
      title: "Mission",
      content: "To foster innovation, enhance collaboration, and drive technological solutions for a better future. We are not just about building businesses; we are about creating entrepreneurs. Our mission is to inspire and support individuals in taking control of their destinies, transforming their ideas into successful ventures."
    },
    {
      title: "Previous Initiatives",
      content: [
        "Led AI-driven marketing campaigns for underperforming and left-behind companies, helping them regain competitive standing.",
        "Organized international apprenticeship programs and seminars focused on AI tools for businesses and students.",
        "Supported community development initiatives by leveraging AI-based analytics and innovative solutions."
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">BritSync</CardTitle>
          <CardDescription>Empowering the Digital Age</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Whether you're starting fresh or reviving a business left behind in the digital race, we are here to help you lay the foundation for sustainable success and long-term growth. At BritSync, we believe in turning aspirations into realities and bringing overlooked ideas and individuals into the spotlight.
          </p>
        </CardContent>
      </Card>

      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={false}
          animate={{ height: expandedSection === section.title ? "auto" : "60px" }}
          transition={{ duration: 0.3 }}
          className="mb-4 overflow-hidden"
        >
          <Card>
            <CardHeader 
              className="cursor-pointer flex flex-row items-center justify-between"
              onClick={() => toggleSection(section.title)}
            >
              <CardTitle className="text-xl font-semibold">{section.title}</CardTitle>
              <Button variant="ghost" size="icon">
                {expandedSection === section.title ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </CardHeader>
            <CardContent>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-5 space-y-2">
                  {section.content.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <Badge variant="secondary" className="text-lg px-4 py-2">
          Turning Aspirations into Realities
        </Badge>
      </motion.div>
    </motion.div>
  )
}

export default OrganizerInformation

