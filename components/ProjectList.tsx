"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProjectLink {
  type: "demo" | "github" | "live" | "self";
  url: string;
  label: string;
  internal?: boolean;
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
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "Vercel",
    ],
    links: [
      {
        type: "demo" as const,
        url: "/dashboard",
        label: "Lihat Dashboard Siakad",
        internal: true,
      },
      {
        type: "github" as const,
        url: "https://github.com/riezaeka/portfolio-website",
        label: "Source Code",
      },
    ],
    status: "completed" as const,
    year: "2025",
  },
];

export default function ProjectList() {
  const router = useRouter();

  const handleLinkClick = (link: ProjectLink) => {
    console.log("Clicking link:", link);

    try {
      if (link.internal) {
        console.log("Attempting internal navigation to:", link.url);

        // Tambahkan delay kecil untuk debugging
        setTimeout(() => {
          router.push(link.url);
        }, 100);

        // Alternative: gunakan window.location jika router tidak bekerja
        // window.location.href = link.url;
      } else {
        if (!link.url || link.url === "#" || link.url === "") {
          alert("Link belum tersedia. Silakan cek kembali nanti.");
          return;
        }
        window.open(link.url, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Error handling link:", error);
      // Fallback to window.location
      if (link.internal) {
        window.location.href = link.url;
      } else {
        alert("Terjadi kesalahan saat membuka link.");
      }
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
              {/* Content Section */}
              <div className="p-4 md:py-6 md:px-0.5 flex flex-col justify-between max-w-4xl mx-auto">
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>Live & Active • {project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features/Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Fitur Utama:
                    </h4>
                    <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                      <li>• Responsive design untuk semua device</li>
                      <li>• Smooth animations dengan Framer Motion</li>
                      <li>• Modern UI/UX dengan Tailwind CSS</li>
                      <li>• SEO optimized dengan Next.js</li>
                      <li>• Dashboard Siakad terintegrasi</li>
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.links.map((link) => (
                    <motion.button
                      key={`${link.type}-${link.label}`}
                      onClick={() => handleLinkClick(link)}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all duration-300 ${
                        link.type === "demo"
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-medium hover:shadow-heavy"
                          : "bg-white/80 text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.type === "demo" && <Eye size={14} />}
                      {link.type === "github" && <Github size={14} />}
                      {link.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
