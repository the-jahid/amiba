'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Award, GraduationCap } from 'lucide-react'
import { BackgroundLines } from "@/components/ui/background-lines"
import { Card, CardContent } from "@/components/ui/card"
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Image from 'next/image'

const prizes = [
  { 
    icon: Trophy, 
    title: '1st Place', 
    description: '£5,000 for the winning team', 
    color: 'text-yellow-500 dark:text-yellow-400'
  },
  { 
    icon: Award, 
    title: 'Runner-up', 
    description: '£3,000 for the second place', 
    color: 'text-blue-500 dark:text-blue-400'
  },
  { 
    icon: GraduationCap, 
    title: 'All Participants', 
    description: 'Certificates and mentorship opportunities', 
    color: 'text-green-500 dark:text-green-400'
  },
]

const content = [
    {
      title: "Dr. Jane Smith",
      description:
        "Dr. Jane Smith is a renowned AI researcher with over 20 years of experience in machine learning and data science. She is a professor at XYZ University and has published numerous papers on AI ethics and fairness.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/alex-suprun-mynsNaNwVDc-unsplash.jpg" // Replace with the actual image path
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Dr. Jane Smith"
          />
        </div>
      ),
    },
    {
      title: "Mr. John Doe",
      description:
        "Mr. John Doe is the CTO of ABC Tech and has led the development of cutting-edge AI solutions in the healthcare sector. With a background in computer science, he brings valuable industry insights.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/alex-suprun-ZHvM3XIOHoE-unsplash.jpg" // Replace with the actual image path
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Mr. John Doe"
          />
        </div>
      ),
    },
    {
      title: "Prof. Emily Johnson",
      description:
        "Prof. Emily Johnson specializes in AI ethics and has been actively involved in policy-making for responsible AI use. She serves on several international AI committees.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/alexander-hipp-iEEBWgY_6lA-unsplash.jpg" // Replace with the actual image path
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Prof. Emily Johnson"
          />
        </div>
      ),
    },
    {
      title: "ProfJohnson",
      description:
        "Prof. Johnson specializes in AI ethics and has been actively involved in policy-making for responsible AI use. She serves on several international AI committees.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/charlesdeluvio-kVg2DQTAK7c-unsplash.jpg" // Replace with the actual image path
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Prof. Emily Johnson"
          />
        </div>
      ),
    },
    // Add more judges as needed
  ];

const Prizes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <div >
    <div className=' relative '>
      <BackgroundLines>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="relative z-10 container mx-auto px-4 "
            >
                <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center lg:mt-20"
        >
          Prizes For Winners
        </motion.h2>
                <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto lg:mt-40"
                >
                {prizes.map((prize, index) => (
                    <motion.div key={index} variants={itemVariants}>
                    <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-6">
                        <prize.icon className={`w-16 h-16 mx-auto mb-4 ${prize.color}`} />
                        <h3 className="text-xl font-bold text-center mb-2">{prize.title}</h3>
                        <p className="text-muted-foreground text-center">{prize.description}</p>
                        </CardContent>
                    </Card>
                    </motion.div>
                ))}
                </motion.div>
            </motion.div>
      </BackgroundLines>
    </div>
    <div  >
        <h2 className='text-3xl md:text-4xl font-bold text-center'>Judging Panel</h2>
        <StickyScroll content={content} />
    </div>
    </div>
  )
}

export default Prizes

