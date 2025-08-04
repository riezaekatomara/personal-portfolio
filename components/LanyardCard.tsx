"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Code, Rocket, Sparkles, Star } from "lucide-react";

export default function LanyardCard() {
  return (
    <div className="relative">
      {/* Floating particles/sparkles */}
      <motion.div
        className="absolute -top-8 -left-8 text-yellow-400 opacity-60"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={20} />
      </motion.div>

      <motion.div
        className="absolute -top-4 -right-6 text-blue-400 opacity-50"
        animate={{
          y: [0, -8, 0],
          rotate: [360, 180, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Star size={16} />
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-4 text-purple-400 opacity-40"
        animate={{
          y: [0, -6, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Star size={14} />
      </motion.div>

      <motion.div
        className="w-72 h-[420px] relative group cursor-pointer overflow-hidden"
        initial={{ y: 0 }}
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.08,
          rotate: 2,
          y: -8,
        }}
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Glassmorphism card with enhanced styling */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 rounded-xl shadow-2xl border border-white/30" />

        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, #667eea, #764ba2, #4facfe, #00f2fe)",
            padding: "2px",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-white/90 rounded-xl" />
        </motion.div>

        {/* Card content */}
        <div className="relative z-10 p-5 flex flex-col items-center justify-center h-full">
          {/* Enhanced hanging attachment */}
          <motion.div
            className="absolute -top-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full" />
          </motion.div>

          {/* Profile photo with enhanced styling */}
          <motion.div
            className="relative mt-2"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated ring around photo */}
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="absolute -inset-1 bg-white rounded-full" />
            <Image
              src="/foto.jpg"
              width={90}
              height={90}
              alt="Foto Profil"
              className="relative rounded-full border-2 border-white shadow-lg"
              priority
            />

            {/* Status indicator */}
            <motion.div
              className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </motion.div>
          </motion.div>

          {/* Name with enhanced typography */}
          <motion.h2
            className="text-base font-bold mt-3 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Rieza Eka Tomara
          </motion.h2>

          {/* Position with enhanced styling */}
          <motion.p
            className="text-xs text-gray-600 text-center font-medium mt-1 leading-tight px-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            IT Administrator | Fullstack Web Developer
          </motion.p>

          {/* Enhanced skills section */}
          <motion.div
            className="mt-3 text-xs text-gray-500 text-center space-y-2 w-full px-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Education */}
            <motion.div
              className="flex items-center justify-center gap-2 p-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-md border border-blue-100"
              whileHover={{ scale: 1.02 }}
            >
              <GraduationCap
                size={12}
                className="text-blue-600 flex-shrink-0"
              />
              <span className="font-medium text-xs">
                Sarjana Sistem Informasi
              </span>
            </motion.div>

            {/* Skills with enhanced design */}
            <motion.div
              className="p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-md border border-green-100"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Code size={12} className="text-green-600 flex-shrink-0" />
                <span className="font-medium text-green-700 text-xs">
                  Tech Stack
                </span>
              </div>
              <div className="text-center leading-tight space-y-1">
                <div className="flex flex-wrap gap-1 justify-center">
                  {["TypeScript", "React", "Next.js"].map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 bg-white/60 text-green-700 rounded text-xs font-medium border border-green-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {["Tailwind", "Supabase"].map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 bg-white/60 text-green-700 rounded text-xs font-medium border border-green-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <span className="px-1.5 py-0.5 bg-white/60 text-green-700 rounded text-xs font-medium border border-green-200">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project highlight */}
            <motion.div
              className="flex items-center justify-center gap-2 p-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-md border border-purple-100"
              whileHover={{ scale: 1.02 }}
            >
              <Rocket size={12} className="text-purple-600 flex-shrink-0" />
              <span className="font-medium text-xs">Siakad Dashboard</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Hover overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
          }}
        />

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["200% 200%", "-200% -200%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}
