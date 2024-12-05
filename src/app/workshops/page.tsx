"use client"

import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Video } from 'lucide-react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

const Workshops = () => {
  const [activeTab, setActiveTab] = useState("schedule")

  const images = [
    "/lukas-hND1OG3q67k-unsplash.jpg",
    "/maxim-tolchinskiy-ectRUZRYrYk-unsplash.jpg",
    "/maximalfocus-0n4jhVGS4zs-unsplash.jpg",
  ]

  const workshops = [
    {
      id: 1,
      title: "Introduction to AI Technologies",
      date: "2024-08-01",
      time: "10:00 AM - 12:00 PM",
      topic: "AI Technologies",
      description: "Learn the basics of AI and its applications in modern technology.",
      registrationLink: "#",
      recordingLink: "#"
    },
    {
      id: 2,
      title: "Project Management for AI Projects",
      date: "2024-08-02",
      time: "2:00 PM - 4:00 PM",
      topic: "Project Management",
      description: "Discover best practices for managing AI-driven projects effectively.",
      registrationLink: "#",
      recordingLink: "#"
    },
    {
      id: 3,
      title: "Branding and Marketing for AI Startups",
      date: "2024-08-03",
      time: "11:00 AM - 1:00 PM",
      topic: "Branding/Marketing",
      description: "Learn how to create a compelling brand and market your AI startup.",
      registrationLink: "#",
      recordingLink: "#"
    },
  ]

  const testimonials = [
    {
      quote:
        "Learn the basics of AI and its applications in modern technology.",
      name: "Introduction to AI Technologies",
      designation: "AI Technologies",
      src: "/lukas-hND1OG3q67k-unsplash.jpg",
      date: "2024-08-03",
      time: "11:00 AM - 1:00 PM",
      registrationLink: "#",
    },
    {
      quote:
        "Discover best practices for managing AI-driven projects effectively.",
      name: "Project Management for AI Projects",
      designation: "Project Management",
      src: "/maxim-tolchinskiy-ectRUZRYrYk-unsplash.jpg",
      date: "2024-08-03",
      time: "11:00 AM - 1:00 PM",
      registrationLink: "#",
    },
    {
      quote:
        "Learn how to create a compelling brand and market your AI startup.",
      name: "Branding and Marketing for AI Startups",
      designation: "Branding/Marketing",
      src:  "/maximalfocus-0n4jhVGS4zs-unsplash.jpg",
      date: "2024-08-03",
      time: "11:00 AM - 1:00 PM",
      registrationLink: "#",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b  dark:from-gray-900 dark:to-gray-800 ">
      
      <div className="relative z-10 container mx-auto px-4 py-16 h-[100vh]">
        
             <AnimatedTestimonials testimonials={testimonials} />
    
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {workshops.map((workshop) => (
                <Card key={workshop.id}>
                  <CardHeader>
                    <CardTitle>{workshop.title}</CardTitle>
                    <CardDescription>{workshop.date} | {workshop.time}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <a href={workshop.registrationLink}>Register Now</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
      
    
            {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {workshops.map((workshop) => (
                <Card key={workshop.id}>
                  <CardHeader>
                    <CardTitle>{workshop.title}</CardTitle>
                    <CardDescription>{workshop.topic}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Video className="mr-2 h-4 w-4" />
                      <span className="text-sm">Recorded Session</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <a href={workshop.recordingLink}>Watch Recording</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div> */}
       

       
      </div>
    </div>
  )
}

export default Workshops

