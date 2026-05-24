"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Code,
  ChevronDown,
  ChevronUp,
  Server,
  Database,
  FileText,
} from "lucide-react"

import Image from "next/image"

const projects = [

  /* =========================
     AI Capstone Project
  ========================== */
  {
    id: 1,

    title: "AI-Driven Unified Data Platform",

    description:
      "Developing an AI-powered ocean intelligence platform integrating oceanographic, fisheries, and biodiversity insights using cloud and machine learning technologies.",

    details: [
      "Built a unified data platform under the Ministry of Earth Sciences (MoES) for real-time marine and biodiversity analysis.",

      "Integrated FastAPI, PostgreSQL, Docker, and machine learning models for scalable analytics and intelligent insights.",

      "Designed cloud-native architecture for handling large-scale oceanographic and fisheries datasets efficiently.",
    ],

    image: "/capstone.png",

    icon: <Database className="h-5 w-5" />,

    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Machine Learning",
    ],

    date: "2025 - Present",

    github: "https://github.com/udaymanikanta",
  },

  /* =========================
     AWS Kinesis Project
  ========================== */
  {
    id: 2,

    title: "AWS DataStream Pipeline Kinesis",

    description:
      "Designed a scalable AWS Lambda architecture leveraging S3 events and Kinesis Streams for real-time file metadata processing.",

    details: [
      "Developed Producer Lambda to stream metadata and Consumer Lambda to process .txt/.docx files with content logged to CloudWatch.",

      "Implemented robust error handling, multi-file support, and reliable processing with Kinesis Streams integration.",
    ],

    image: "/1.png",

    icon: <Server className="h-5 w-5" />,

    technologies: [
      "AWS",
      "Lambda",
      "Amazon S3",
      "IAM",
      "CloudWatch",
      "Kinesis Data Streams",
      "Python",
    ],

    date: "Nov 2024",

    github:
      "https://github.com/udaymanikanta/Dockerized_web_server",
  },

  /* =========================
     Voting System
  ========================== */
  {
    id: 3,

    title: "Student Voting System",

    description:
      "Developed a student voting platform with an interactive interface that improved participation in campus elections.",

    details: [
      "Implemented secure voting logic and efficient file handling using C++.",

      "Built a simple and responsive console-based user interface for election management.",
    ],

    image: "/2.png",

    icon: <FileText className="h-5 w-5" />,

    technologies: [
      "C++",
      "OOPs",
      "DSA",
      "File Handling",
    ],

    date: "Sep 2024",

    github:
      "https://github.com/udaymanikanta/Student-Voting-System",
  },

  /* =========================
     Hospital Management
  ========================== */
  {
    id: 4,

    title: "mediSTAR – Hospital Management System",

    description:
      "Built a hospital management platform that improved access to patient records and streamlined operations.",

    details: [
      "Developed responsive frontend pages using HTML, CSS, and JavaScript.",

      "Implemented dynamic UI updates and patient management functionalities.",
    ],

    image: "/3.png",

    icon: <Database className="h-5 w-5" />,

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    date: "Aug 2023",

    github:
      "https://github.com/udaymanikanta/hospitalManagementSystem",
  },
]

export default function Projects() {

  const [expandedId, setExpandedId] =
    useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(
      expandedId === id ? null : id
    )
  }

  return (
    <section id="projects" className="py-20">

      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <h2 className="text-3xl font-bold mb-4">
            My Projects
          </h2>

          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I have worked on,
            showcasing my experience in cloud computing,
            DevOps, AI platforms, and full-stack development.
          </p>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >

              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">

                {/* Image */}
                <div className="relative h-48 overflow-hidden">

                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />

                </div>

                {/* Content */}
                <CardContent className="flex-grow p-6">

                  {/* Title */}
                  <div className="flex items-center gap-2 mb-3">

                    <div className="text-primary">
                      {project.icon}
                    </div>

                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>

                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>{project.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Expand Section */}
                  <AnimatePresence>

                    {expandedId === project.id && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}

                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}

                        exit={{
                          opacity: 0,
                          height: 0,
                        }}

                        transition={{
                          duration: 0.3,
                        }}

                        className="overflow-hidden"
                      >

                        <ul className="space-y-2 text-muted-foreground mb-4">

                          {project.details.map((detail, i) => (

                            <li
                              key={i}
                              className="flex items-start gap-2"
                            >

                              <span className="text-primary mt-1">
                                •
                              </span>

                              <span>{detail}</span>

                            </li>

                          ))}

                        </ul>

                      </motion.div>

                    )}

                  </AnimatePresence>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">

                    {project.technologies.map(
                      (tech, techIndex) => (

                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>

                      )
                    )}

                  </div>

                </CardContent>

                {/* Footer */}
                <CardFooter className="p-6 pt-0 flex justify-between">

                  {/* Expand Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      toggleExpand(project.id)
                    }
                  >

                    {expandedId === project.id ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-1" />
                        Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-1" />
                        More
                      </>
                    )}

                  </Button>

                  {/* GitHub Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <Code className="h-4 w-4 mr-1" />
                      Code

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