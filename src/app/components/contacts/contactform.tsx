'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    newsletter: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, topic: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="space-y-2 mb-8">
        <h2 className="text-4xl font-medium tracking-tight text-black">Contact us</h2>
        <p className="text-gray-500">Get in touch and let us know how we can help</p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Input
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
            />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              placeholder="E-mail"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="border-b border-t-0 border-x-0 rounded-none px-0 focus:ring-0">
              <SelectValue placeholder="Topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="support">Support</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleInputChange}
            className="min-h-[100px] border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black resize-none"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="newsletter" 
            checked={formData.newsletter}
            onCheckedChange={handleCheckboxChange}
          />
          <label
            htmlFor="newsletter"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Please sign me up for the amiba newsletter
          </label>
        </div>
        <div className="flex justify-between items-center">
          <motion.div
            whileTap={{ scale: 0.95 }}
          >
            <Button type="submit" className="bg-black text-white hover:bg-black/90">
              Send Message
            </Button>
          </motion.div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Follow amiba</span>
            <a href="#" className="text-black hover:text-black/80">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-black hover:text-black/80">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

