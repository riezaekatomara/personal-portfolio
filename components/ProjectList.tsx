// ProjectList.tsx - Updated untuk self-referencing portfolio

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Home, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProjectLink {
  type: "demo" | "github" | "live" | "self";
  url: string;
  label: string;
  internal?: boolean; // untuk internal navigation
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  links: ProjectLink[];
  status: "completed" | "in-progress" | "planned";
  year: string;
}

const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website & Siakad Dashboard",
    description:
      "Website portfolio pribadi yang sekaligus menampilkan kemampuan dalam pengembangan web modern",
    longDescription:
      "Website portfolio pribadi yang dibangun dengan Next.js dan TypeScript. Menampilkan project showcase, skills, dan pengalaman. Website ini sendiri merupakan demonstrasi kemampuan dalam mengembangkan aplikasi web modern dengan design yang responsif dan user experience yang optimal.",
    image: "/portfolio-preview.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    links: [
      {
        type: "self" as const,
        url: "/", // Homepage
        label: "Lihat Website",
        internal: true,
      },
      {
        type: "demo" as const,
        url: "#hero", // Scroll ke hero section
        label: "Ke Beranda",
        internal: true,
      },
      {
        type: "github" as const,
        url: "https://github.com/riezaeka/portfolio-website", // Ganti dengan GitHub URL yang benar
        label: "Source Code",
      },
    ],
    status: "completed" as const,
    year: "2024",
  },
];

export default function ProjectList() {
  const router = useRouter();

  const handleLinkClick = (link: ProjectLink) => {
    console.log("Clicking link:", link);

    try {
      if (link.internal) {
        // Handle internal navigation
        if (link.url === "/") {
          // Navigate to homepage
          router.push("/");
        } else if (link.url.startsWith("#")) {
          // Scroll to section
          const element = document.querySelector(link.url);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            // Fallback - scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          // Other internal routes
          router.push(link.url);
        }
      } else {
        // Handle external links
        if (!link.url || link.url === "#" || link.url === "") {
          alert("Link belum tersedia. Silakan cek kembali nanti.");
          return;
        }
        window.open(link.url, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Error handling link:", error);
      alert("Terjadi kesalahan saat membuka link.");
    }
  };

  return (
    <section className="py-12">
      <div className="grid gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-medium hover:shadow-heavy transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image/Preview Section */}
                <div className="relative h-64 lg:h-80 overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <Eye size={32} className="opacity-80" />
                      </div>
                      <p className="text-lg font-medium mb-2">Live Website</p>
                      <p className="text-sm opacity-80">
                        Anda sedang melihatnya sekarang!
                      </p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 text-xs text-white/60">
                    ✨ Portfolio & Showcase
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          <span>Live & Active • {project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features/Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Fitur Utama:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Responsive design untuk semua device</li>
                        <li>• Smooth animations dengan Framer Motion</li>
                        <li>• Modern UI/UX dengan Tailwind CSS</li>
                        <li>• SEO optimized dengan Next.js</li>
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <motion.button
                        key={`${link.type}-${link.label}`}
                        onClick={() => handleLinkClick(link)}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                          link.type === "self" || link.type === "demo"
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-medium hover:shadow-heavy"
                            : "bg-white/80 text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                        }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.type === "self" && <Home size={16} />}
                        {link.type === "demo" && <Eye size={16} />}
                        {link.type === "github" && <Github size={16} />}
                        {link.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h3 className="text-lg font-bold text-blue-800 mb-2">
            🎯 Meta Project
          </h3>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Website ini adalah contoh nyata dari kemampuan saya dalam
            mengembangkan aplikasi web modern. Anda sedang melihat langsung
            hasil kerja dan kualitas kode yang saya produksi.
          </p>
        </div>
      </motion.div>

      {/* Coming Soon Projects */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-700 mb-4">
          🚀 Next Projects
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200/50">
            <span className="text-sm font-medium text-emerald-700">
              Muslim Hire Platform
            </span>
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200/50">
            <span className="text-sm font-medium text-purple-700">
              AI Resume Builder
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Project-project ini akan ditambahkan sebagai showcase terpisah
        </p>
      </motion.div>
    </section>
  );
}
