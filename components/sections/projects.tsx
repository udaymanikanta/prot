"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, ChevronDown, ChevronUp, Server, Database, FileText } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AWS DataStream Pipeline Kinesis",
    description:
      "Designed a scalable AWS Lambda architecture leveraging S3 events and Kinesis Streams for real-time file metadata processing.",
    details: [
      "Developed Producer Lambda to stream metadata and Consumer Lambda to process .txt/.docx files with content logged to CloudWatch.",
      "Implemented robust error handling, multi-file support, and reliable processing with Kinesis Streams integration.",
    ],
    image: "/1.png?height=400&width=600",
    icon: <Server className="h-5 w-5" />,
    technologies: ["AWS (Lambda, S3, IAM, CloudWatch)", "Amazon Kinesis Data Streams", "Python"],
    date: "Nov 2024",
    github: "https://github.com/udaymanikanta/Dockerized_web_server",
  },
  {
    id: 2,
    title: "Student Voting System",
    description:
      "Spearheaded the development of a student voting platform with a user-friendly interface, resulting in a 40% increase in student participation in campus elections.",
    details: [
      "Managed end-to-end project execution, from planning and design to implementation, while adhering to tight deadlines.",
      "Led the creation of an interactive voting platform for students, improving campus election engagement by 40%.",
    ],
    image: "/2.png?height=400&width=600",
    icon: <FileText className="h-5 w-5" />,
    technologies: ["C++ (OOPs, DSA)", "File Handling"],
    date: "Sep 2024",
    github: "https://github.com/udaymanikanta/Student-Voting-System",
  },
  {
    id: 3,
    title: "mediSTAR – Hospital Management System",
    description:
      "Collaborated with a team of 2 developers to build a hospital platform; doctors reported 30% faster access to patient records, enhancing the speed of patient care.",
    details: [
      "Used JavaScript for real-time updating, form validation, and content generation for dynamic resume sections like personal details, education.",
      "Gained proficiency in front-end development and UI/UX principles.",
    ],
    image: "/3.png?height=400&width=600",
    icon: <Database className="h-5 w-5" />,
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "Aug 2023",
    github: "https://github.com/udaymanikanta/hospitalManagementSystem",
  },
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience in software development
            and cloud architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-primary">{project.icon}</div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>{project.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 text-muted-foreground mb-4">
                          {project.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" onClick={() => toggleExpand(project.id)}>
                    {expandedId === project.id ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-1" /> Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-1" /> More
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Code className="h-4 w-4 mr-1" /> Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
