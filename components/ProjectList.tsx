"use client";

import { ExternalLink, Github, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Siakad Dashboard",
    description:
      "Sistem dashboard administrasi kampus berbasis web untuk manajemen data mahasiswa, mata kuliah, dan nilai akademik dengan interface yang modern dan intuitif.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    demoUrl: "/dashboard",
    githubUrl: "https://github.com/riezaekatomara/personal-portfolio",
  },
];

export default function ProjectList() {
  const router = useRouter();

  const handleProjectClick = (demoUrl: string) => {
    router.push(demoUrl);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Wrench className="text-blue-600" size={32} />
          </motion.div>
          <h2 className="text-3xl font-bold gradient-text">Project Showcase</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Berikut adalah showcase project unggulan yang telah saya kembangkan
          dengan teknologi modern
        </p>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          onClick={() => handleProjectClick(project.demoUrl)}
          className="w-full max-w-3xl glass rounded-2xl p-8 border border-white/30 shadow-heavy cursor-pointer group relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0 30px 100px rgba(0, 0, 0, 0.15)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Shimmer Effect */}
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10">
            <motion.h3
              className="text-2xl font-bold text-blue-700 mb-4 group-hover:text-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {project.title}
            </motion.h3>

            <p className="text-gray-600 text-base leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
              {project.description}
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + techIndex * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href={project.githubUrl}
                target="_blank"
                onClick={handleLinkClick}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl no-underline group/link"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github
                  size={18}
                  className="group-hover/link:rotate-12 transition-transform duration-300"
                />
                <span className="font-medium">GitHub</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/demo"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink
                  size={18}
                  className="group-hover/demo:rotate-12 transition-transform duration-300"
                />
                <span className="font-medium">Lihat Demo</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
