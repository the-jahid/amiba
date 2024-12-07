'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, Mail, User } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { subscribeToNewsletter } from './newsletter'


const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
})

type FormData = z.infer<typeof schema>

export function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)
  const [timeLeft, setTimeLeft] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    const targetDate = new Date('2025-12-31T23:59:59').getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      setTimeLeft(Math.max(0, Math.floor(difference / 1000)))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (time: number) => {
    const days = Math.floor(time / (24 * 60 * 60))
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60))
    const minutes = Math.floor((time % (60 * 60)) / 60)
    const seconds = time % 60
    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    const result = await subscribeToNewsletter(formData)
    setSubmitResult(result)
    setIsSubmitting(false)
    if (result.success) {
      reset()
    }
  }

  return (
    <div className="flex flex-col lg:flex-row my-10 w-full max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className="lg:w-1/2 relative">
        <Image
          src="/lukas-hND1OG3q67k-unsplash.jpg"
          alt="Event image"
          width={600}
          height={600}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Event Countdown</h2>
            <p className="text-2xl font-semibold">{formatTime(timeLeft)}</p>
          </div>
        </div>
      </div>
      <Card className="lg:w-1/2 border-none rounded-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">Stay Updated</CardTitle>
          <CardDescription>
            Subscribe to our newsletter for exclusive event updates and offers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <div className="relative">
                <Input
                  {...register('name')}
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <Input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                'Subscribe Now'
              )}
            </Button>
          </form>
          <AnimatePresence>
            {submitResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 p-3 rounded-md ${
                  submitResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                <div className="flex items-center">
                  {submitResult.success ? (
                    <CheckCircle className="mr-2 h-5 w-5" />
                  ) : (
                    <Mail className="mr-2 h-5 w-5" />
                  )}
                  <p className="text-sm">{submitResult.message}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}

