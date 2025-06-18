"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, GraduationCap, Database, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const skills = [
    { name: "Python", category: "Programming" },
    { name: "MySQL", category: "Database" },
    { name: "Power BI", category: "Analytics" },
    { name: "Excel", category: "Tools" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "VS Code", category: "IDE" },
    { name: "Data Structures", category: "Concepts" },
    { name: "Algorithms", category: "Concepts" },
  ]

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Mohan Babu University, Tirupati, AP",
      year: "2024 - 2026",
      grade: "Pursuing",
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Chaitanya Bharathi Degree College, Chirala, AP",
      year: "2021 - 2024",
      grade: "CGPA: 9.02",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Medhavi Junior College, Chirala, AP",
      year: "2019 - 2021",
      grade: "Percentage: 70.6%",
    },
    {
      degree: "SSC (10th Grade)",
      institution: "Teja High School, Ipurupalem, Chirala, AP",
      year: "2018 - 2019",
      grade: "CGPA: 8.3",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <motion.div className="fixed inset-0 opacity-30" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              RAMANADAM VENKATA
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              SIVA SAI
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Data Analyst & Computer Science Graduate
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <ContactItem icon={<Mail />} text="sairamandam.mca@gmail.com" />
            <ContactItem icon={<Phone />} text="9908881764" />
            <ContactItem icon={<MapPin />} text="Ipurupalem, Chirala, AP" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/venkata-siva-sai-ramanadam-6915692aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://github.com/RAMANADAM-VENKATA-SIVA-SAI" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information Card */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Ipurupalem, Chirala, Andhra Pradesh</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">sairamandam.mca@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">+91 9908881764</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <a
                        href="https://www.linkedin.com/in/venkata-siva-sai-ramanadam-6915692aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  A self-driven Computer Science graduate skilled in Python, SQL, Excel, and Power BI, with a strong
                  passion for data analysis and visualization.
                </p>
                <p className="text-lg leading-relaxed">
                  I am seeking an opportunity to apply analytical skills to real-world problems and support data-driven
                  decision-making in a dynamic organization. My expertise lies in transforming raw data into meaningful
                  insights that drive business growth and innovation.
                </p>
                <p className="text-lg leading-relaxed">
                  With a solid foundation in programming and database management, I specialize in creating interactive
                  dashboards and comprehensive reports that help organizations make informed decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Education
          </motion.h2>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                        <p className="text-purple-300 mb-1">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.year}
                          </span>
                          <span className="text-green-400 font-medium">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent"
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Programming Languages */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">&lt;/&gt;</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Programming Languages</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700">Python</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Databases */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Databases</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700">MySQL</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools & Platforms */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🛠</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Tools & Platforms</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700">Git & GitHub</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700">VS Code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700">Microsoft Excel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700">Power BI</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Core Competencies */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🧠</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Core Competencies</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700">Problem-solving</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700 text-sm">Data Structures & Algorithms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700">Data Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="text-gray-700">Data Visualization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Featured Project
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Pizza Sales Report | Power BI Dashboard</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-400/30">SQL</Badge>
                      <Badge className="bg-purple-600/20 text-purple-300 border-purple-400/30">Power BI</Badge>
                      <Badge className="bg-green-600/20 text-green-300 border-green-400/30">Excel</Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Built an interactive dashboard to analyze pizza sales and provide actionable business insights.
                </p>

                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Extracted and cleaned data using Excel and structured queries in SQL
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Modeled relationships between orders, pizza types, and sales data in Power BI
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Developed DAX measures to track total revenue, order trends, and average order value
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Created visualizations for top-selling items, size/category performance, and time-based trends
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Improved decision-making with clear KPIs and dynamic visual storytelling
                  </li>
                </ul>

                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a
                    href="https://github.com/RAMANADAM-VENKATA-SIVA-SAI/Power-Bi-Dash-board-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-16 px-4 bg-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/venkata-siva-sai-ramanadam-6915692aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="https://github.com/RAMANADAM-VENKATA-SIVA-SAI"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="mailto:sairamandam.mca@gmail.com"
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-300 text-sm">© 2024 Ramanadam Venkata Siva Sai. All rights reserved.</p>
        </motion.div>
      </motion.footer>
    </div>
  )
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-slate-800/50 to-purple-900/30 px-4 py-2 rounded-full border border-purple-500/20 backdrop-blur-sm">
      <span className="text-purple-400">{icon}</span>
      <span className="text-gray-300 text-sm">{text}</span>
    </div>
  )
}
