"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
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
            Get In Touch
          </h2>

          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for internships,
            DevOps opportunities, freelance projects,
            or collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <Card className="mb-8">
              <CardContent className="p-6">

                <ul className="space-y-6">

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">
                        Email
                      </h4>

                      <a
                        href="mailto:udaymanikanta90@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        udaymanikanta90@gmail.com
                      </a>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">
                        Phone
                      </h4>

                      <a
                        href="tel:+918688144292"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 8688144292
                      </a>
                    </div>
                  </li>

                  {/* Location */}
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">
                        Location
                      </h4>

                      <p className="text-muted-foreground">
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </li>

                </ul>
              </CardContent>
            </Card>

            {/* Availability */}
            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                Availability
              </h4>

              <p className="text-muted-foreground">
                Currently open to internships,
                DevOps roles, cloud engineering opportunities,
                and freelance work.
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Send Me a Message
            </h3>

            <Card>
              <CardContent className="p-6">

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="space-y-6"
                >

                  <input
                    type="hidden"
                    name="access_key"
                    value="d1797f7f-f484-4196-922a-61a888530432"
                  />

                  <input
                    type="hidden"
                    name="subject"
                    value="New Portfolio Contact Message"
                  />

                  <input
                    type="hidden"
                    name="redirect"
                    value="https://prot-coral.vercel.app/"
                  />

                  {/* Name */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Name
                    </label>

                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Email
                    </label>

                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Subject
                    </label>

                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Message
                    </label>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>

                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}