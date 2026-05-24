"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Code,
  Server,
} from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">

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
            About Me
          </h2>

          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-semibold mb-4">
              Who I Am
            </h3>

            <p className="text-muted-foreground mb-6">
              I am Uday Manikanta Pennada, a Cloud Architect,
              DevOps Engineer, and Computer Science student
              passionate about building scalable cloud-native
              and AI-powered solutions.
            </p>

            <p className="text-muted-foreground mb-6">
              I specialize in AWS cloud services, Docker,
              Kubernetes, CI/CD pipelines, full-stack
              development, and backend engineering.
              I have hands-on experience developing
              real-time data pipelines, containerized
              applications, and intelligent platforms
              using Next.js, FastAPI, PostgreSQL,
              MongoDB, Jenkins, and cloud-native technologies.
            </p>

            <p className="text-muted-foreground mb-6">
              During my internship at Rinex Technologies,
              I optimized APIs and built dynamic web
              applications. I am certified in Azure
              Administration and IBM DevOps and continuously
              strive to enhance my skills in cloud
              architecture and software development.
            </p>

            <p className="text-muted-foreground">
              Currently, I am working on an
              AI-Driven Unified Data Platform for
              Oceanographic, Fisheries, and Molecular
              Biodiversity Insights under the Ministry
              of Earth Sciences (MoES).
            </p>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-semibold mb-4">
              Personal Information
            </h3>

            <Card>
              <CardContent className="p-6">

                <ul className="space-y-4">

                  {/* Name */}
                  <li className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />

                    <span className="text-muted-foreground">
                      Uday Manikanta Pennada
                    </span>
                  </li>

                  {/* Email */}
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />

                    <a
                      href="mailto:udaymanikanta90@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      udaymanikanta90@gmail.com
                    </a>
                  </li>

                  {/* Phone */}
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />

                    <a
                      href="tel:+918688144292"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8688144292
                    </a>
                  </li>

                  {/* Location */}
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />

                    <span className="text-muted-foreground">
                      Andhra Pradesh, India
                    </span>
                  </li>

                  {/* GitHub */}
                  <li className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-primary" />

                    <a
                      href="https://github.com/udaymanikanta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/udaymanikanta
                    </a>
                  </li>

                  {/* LeetCode */}
                  <li className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-primary" />

                    <a
                      href="https://leetcode.com/6HrgfsTxrr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      leetcode.com/6HrgfsTxrr
                    </a>
                  </li>

                </ul>

              </CardContent>
            </Card>

          </motion.div>

        </div>
      </div>
    </section>
  )
}