'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Award, GraduationCap } from 'lucide-react'
import { BackgroundLines } from "@/components/ui/background-lines"
import { Card, CardContent } from "@/components/ui/card"
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Image from 'next/image'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

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



  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
        <AnimatedTestimonials testimonials={testimonials} />
    </div>
    </div>
  )
}

export default Prizes

