"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Server, Globe, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["C++", "Java", "C", "Python"],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Server className="h-6 w-6" />,
    skills: ["AWS", "Docker", "Kubernetes", "Apache CloudStack", "Terraform"],
  },
  {
    title: "Tools & IDEs",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Visual Studio Code", "Git", "GitHub"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    skills: ["Teamwork", "Project Management", "Adaptability", "Problem Solving"],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of technical and soft skills throughout my education and professional
            experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
