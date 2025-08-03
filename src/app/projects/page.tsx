"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Users,
  BookOpen,
  BarChart3,
  Database,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Code2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Users,
    title: "Manajemen Data Mahasiswa",
    description:
      "Sistem lengkap untuk mengelola profil dan data akademik mahasiswa",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Manajemen Mata Kuliah",
    description: "Organisasi kurikulum dan jadwal perkuliahan yang efisien",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Sistem Penilaian & Analytics",
    description: "Dashboard analitik untuk monitoring performa akademik",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Real-time Database",
    description: "Sinkronisasi data real-time dengan Supabase PostgreSQL",
    color: "from-violet-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Form Validation",
    description: "Validasi data yang robust dengan TypeScript dan Zod",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Export Data",
    description: "Ekspor laporan dalam format Excel dan PDF",
    color: "from-yellow-500 to-orange-500",
  },
];

const techStack = [
  { name: "Next.js 14", color: "bg-black text-white" },
  { name: "TypeScript", color: "bg-blue-600 text-white" },
  { name: "Tailwind CSS", color: "bg-cyan-500 text-white" },
  { name: "Supabase", color: "bg-emerald-600 text-white" },
  { name: "PostgreSQL", color: "bg-blue-800 text-white" },
  { name: "Framer Motion", color: "bg-pink-600 text-white" },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="text-blue-600" size={40} />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Project Showcase
            </h1>
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="text-cyan-500" size={32} />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Eksplorasi project unggulan yang dikembangkan dengan teknologi
            modern dan best practices dalam pengembangan web aplikasi
          </motion.p>
        </motion.div>

        {/* Main Project Card */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 40px 120px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Project Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Star size={16} className="animate-spin" />
                Featured Project
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Campus Administrative Dashboard
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                Sistem informasi administrasi kampus berbasis web yang dibangun
                dengan arsitektur modern untuk mengelola data akademik secara
                efisien, aman, dan user-friendly.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className={`px-4 py-2 ${tech.color} rounded-full text-sm font-medium shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 no-underline group"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                  <span>Coba Demo Live</span>
                  <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://github.com/riezaekatomara/personal-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 no-underline group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github size={20} />
                  </motion.div>
                  <span>Lihat Source Code</span>
                  <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight size={18} />
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap size={20} />
            </motion.div>
            <span className="font-medium">
              More exciting projects coming soon...
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
