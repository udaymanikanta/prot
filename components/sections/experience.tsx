"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="mb-8 overflow-hidden border-l-4 border-l-primary">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div className="flex items-center gap-2 mb-2 sm:mb-0">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Web Development Intern</h3>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Jan 2024 - Mar 2024</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Badge variant="outline" className="text-sm">
                      Rinex Technologies
                    </Badge>
                  </div>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Built two dynamic web applications: Hospital Management System and Electricity Website using
                        HTML, CSS, and JavaScript.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Automated web data collection through custom scripts, effectively streamlining repetitive tasks.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Assisted in the development of scalable APIs using Node.js, improving API response times by 15%
                        through optimized coding practices.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground italic">
              Currently seeking new opportunities to apply and expand my skills in cloud architecture and software
              development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
