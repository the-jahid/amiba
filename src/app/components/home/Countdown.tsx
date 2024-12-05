'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Progress from '@radix-ui/react-progress'

interface CountdownProps {
  targetDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date()
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const totalSeconds = Math.floor((+targetDate - +new Date()) / 1000)
  const progress = 100 - (totalSeconds / (24 * 60 * 60)) * 100

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Event Countdown
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(timeLeft).map(([interval, value]) => (
            <motion.div 
              key={interval}
              className="m-4 w-40 h-40 relative"
              variants={itemVariants}
            >
              <Progress.Root 
                className="w-full h-full rounded-full overflow-hidden bg-black "
                value={interval === 'days' ? progress : (value / (interval === 'hours' ? 24 : 60)) * 100}
              >
                <Progress.Indicator 
                  className="bg-gradient-to-r from-gray-900 to-gray-500 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                  style={{ transform: `translateX(-${100 - (interval === 'days' ? progress : (value / (interval === 'hours' ? 24 : 60)) * 100)}%)` }}
                />
              </Progress.Root>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={value}
                    className="text-4xl font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value}
                  </motion.span>
                </AnimatePresence>
                <span className="text-sm uppercase tracking-wide">{interval}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          className="text-center mt-12 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {Object.values(timeLeft).every(value => value === 0) 
            ? "The event has started!" 
            : "Join us for an extraordinary AI experience!"}
        </motion.p>
      </div>
    </section>
  )
}

