"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
const certifications = [
  {
    image: "/1.png?height=400&width=600",
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "Apr 2025",
    url: "https://learn.microsoft.com/en-us/users/pennadaudaymanikanta-6199/credentials/dad32d300d15c80c?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    
  },
  {
    title: "Deploy Infra in the Cloud using Terraform",
    issuer: "Udemy",
    date: "Mar 2025",
    url: "https://www.udemy.com/certificate/UC-58b6b5c0-607a-42df-ba57-48a473aa0e93/",
  },
  {
    title: "IBM DevOps and Software Engineering",
    issuer: "Coursera",
    date: "Nov 2024",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/5HDSF4VGL49Z",
  },
  {
    title: "Algorithms on Strings",
    issuer: "Coursera",
    date: "Apr 2024",
    url: "#",
  },
  {
    title: "Dynamic Programming, Greedy Algorithms",
    issuer: "Coursera",
    date: "Mar 2024",
    url: "#",
  },
]

export default function Certifications() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I continuously enhance my skills through professional certifications and courses.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{cert.title}</h3>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="outline">{cert.issuer}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
