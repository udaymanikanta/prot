"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Aug 2022 - Present",
    details: "CGPA: 6.47",
  },
  {
    institution: "Resonance Eduventures Limited",
    location: "Vijayawada, Andhra Pradesh",
    degree: "Intermediate",
    period: "Apr 2020 - Mar 2022",
    details: "Percentage: 68%",
  },
  {
    institution: "Sikhara School",
    location: "Vijayawada, Andhra Pradesh",
    degree: "10th",
    period: "Apr 2016 - Mar 2020",
    details: "Percentage: 96%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute top-6 left-0 md:left-auto md:right-0 md:translate-x-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>

                <Card className={`relative ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{item.institution}</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">{item.location}</p>
                    <p className="font-medium mb-2">{item.degree}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
