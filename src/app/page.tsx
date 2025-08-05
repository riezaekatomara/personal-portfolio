"use client";

import LanyardCard from "@/../../components/LanyardCard";
import ProjectList from "@/../../components/ProjectList";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with spacing fix for navbar */}
      <section className="min-h-screen pt-24 md:pt-32 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-400/15 rounded-full blur-3xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative bottom-5 md:bottom-10 z-10 max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              className="relative top-5 text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Greeting Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles size={16} className="text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">
                  Selamat Datang!
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="gradient-text">Hi, Saya </span>
                <br />
                <span className="text-gray-800">Rieza Eka Tomara</span>
              </motion.h1>

              {/* Description */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Lulusan{" "}
                  <span className="text-blue-600 font-semibold">
                    Sistem Informasi
                  </span>{" "}
                  yang berdedikasi dalam mengembangkan solusi web inovatif dan
                  memberikan dukungan IT profesional.
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Supabase",
                    "PostgreSQL",
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full border border-blue-200/50 font-medium whitespace-nowrap"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-heavy transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Lihat Projects
                </motion.button>
                <motion.button
                  className="px-8 py-3 bg-white/70 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-white/50 hover:bg-white/90 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Lanyard Card */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <LanyardCard />
            </motion.div>
          </div>
        </div>

        {/* Improved Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
          >
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center">
              <motion.div
                className="w-1 h-3 bg-current rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="text-sm font-medium">
              Scroll untuk melihat projects
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-teal-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              My Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kumpulan karya dan project unggulan yang menunjukkan keahlian saya
              dalam pengembangan web modern dan sistem informasi.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">
                  Full-Stack Developer
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">
                  Modern Tech Stack
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">
                  System Information Graduate
                </span>
              </div>
            </div>
          </motion.div>

          <ProjectList />
        </div>
      </section>
    </div>
  );
}
