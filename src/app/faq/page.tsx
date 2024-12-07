'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'
import { Card, CardHeader, CardContent } from "@/components/ui/card"

const faqData = [
  {
    question: "Who can participate in the Global AI Olympiad?",
    answer: "The event is open to students, professionals, and AI enthusiasts from all backgrounds. Teams are encouraged to include members with diverse skill sets."
  },
  {
    question: "How do I register?",
    answer: "Registration is available online through the official website. You'll need to form a team and complete the registration form before the deadline."
  },
  {
    question: "What is the competition format?",
    answer: "The competition includes team formation, workshops, project development, and final submissions. Teams will also have access to mentorship throughout the event."
  },
  {
    question: "What are the prizes?",
    answer: "Prizes include: • £5,000 for the winning team • £3,000 for the runner-up • Certificates and mentorship opportunities for all participants"
  },
  {
    question: "Are there any fees to participate?",
    answer: "No, participation in the Global AI Olympiad is free of charge."
  },
  {
    question: "What tools and resources will be provided?",
    answer: "Teams will have access to AI tools, datasets, and regular mentorship sessions to guide their project development."
  },
  {
    question: "What is the timeline of the event?",
    answer: "• Registration: [Specify date] • Workshops: [Specify date] • Hackathon Phase: [Specify date] • Final Submission: [Specify date]"
  },
  {
    question: "What is the main focus of the projects in this competition?",
    answer: "The competition focuses on using AI to address real-world problems with a specific emphasis on local community development, such as healthcare, education, environmental sustainability, or public safety."
  },
  {
    question: "Do participants need prior experience in AI?",
    answer: "While prior experience in AI can be beneficial, it's not mandatory. Participants will have access to workshops, resources, and mentorship to help them learn and contribute effectively."
  },
  {
    question: "Can individual participants join, or is it mandatory to have a team?",
    answer: "Individual participants can register and will be matched with a team during the team formation phase. However, forming your own team before registration is encouraged."
  },
  {
    question: "What is the format of project submission?",
    answer: "Teams will need to submit their project as a detailed document, along with a short video pitch that highlights the project idea, implementation process, and expected impact."
  },
  {
    question: "How will projects be evaluated?",
    answer: "Projects will be evaluated based on: • Innovation: How unique and creative is the idea? • Impact: What is the potential benefit to the community or problem addressed? • Feasibility: How practical and implementable is the solution? • Presentation: How well is the project communicated in the submission?"
  },
  {
    question: "Are there networking opportunities for participants?",
    answer: "Yes, participants will have opportunities to network with industry experts, mentors, and other teams during workshops and mentorship sessions."
  },
  {
    question: "What kind of support is provided during the event?",
    answer: "Teams will receive: • Access to AI tools and datasets. • Regular mentorship sessions with industry professionals. • Guidance on project management and presentation techniques."
  },
  {
    question: "Will there be recognition for participants other than winners?",
    answer: "Yes, all participants will receive certificates of participation, and standout projects will be highlighted on our website and social media channels."
  },
  {
    question: "Can projects from this event be implemented in the real world?",
    answer: "The Olympiad aims to create real-world solutions. Promising projects may even receive additional support for implementation through partnerships with sponsors and mentors."
  },
  {
    question: "What are the roles expected within a team?",
    answer: "Each team is encouraged to have members with diverse skill sets, including: • AI/Technical Expert for developing the solution. • Marketing/Branding Specialist for pitching the project. • Finance/Management Expert for handling logistics and budget planning."
  },
  {
    question: "How will participants communicate with mentors and organizers?",
    answer: "A dedicated platform (Discord) will be provided for seamless communication with mentors, organizers, and fellow participants."
  },
  {
    question: "Are there specific AI tools or platforms participants must use?",
    answer: "Participants are free to use any AI tools or platforms they prefer, though recommended tools and resources will be shared during the workshops."
  }
]

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-4">
        <CardHeader 
          className="cursor-pointer flex justify-between items-center"
          onClick={toggleOpen}
        >
          <h3 className="text-lg font-semibold">{question}</h3>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </CardHeader>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent>
                <p className="text-muted-foreground">{answer}</p>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

const Faq = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    )
  }

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-7xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.includes(index)}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq

