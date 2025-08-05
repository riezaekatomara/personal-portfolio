"use client";

import { motion } from "framer-motion";
import { Github, Eye } from "lucide-react";
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

const statusColors = {
  completed: "bg-green-500",
  "in-progress": "bg-yellow-500",
  planned: "bg-gray-400",
};

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
        type: "demo",
        url: "/dashboard",
        label: "Lihat Dashboard Siakad",
        internal: true,
      },
      {
        type: "github",
        url: "https://github.com/riezaeka/portfolio-website",
        label: "Source Code",
      },
    ],
    status: "completed",
    year: "2025",
  },
];

export default function ProjectList() {
  const router = useRouter();

  const handleLinkClick = (link: ProjectLink) => {
    if (link.internal) {
      router.push(link.url);
    } else {
      if (!link.url || link.url === "#" || link.url === "") {
        alert("Link belum tersedia.");
        return;
      }
      window.open(link.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-12">
      <div className="grid gap-12 md:grid-cols-1">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl bg-white/60 backdrop-blur-md border border-white/30 shadow-heavy hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
              <div className="p-6 md:p-8 text-center md:text-left">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 md:mt-0 text-sm text-gray-500 justify-center md:justify-start">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        statusColors[project.status]
                      } animate-pulse`}
                    ></span>
                    <span className="capitalize">
                      {project.status.replace("-", " ")} • {project.year}
                    </span>
                  </div>
                </div>

                {/* Deskripsi */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                  {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-xs font-medium border border-blue-200 text-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-white hover:from-blue-100 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {project.links.map((link) => (
                    <motion.button
                      key={link.label}
                      onClick={() => handleLinkClick(link)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        link.type === "demo"
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-md"
                          : "bg-white/80 text-gray-700 border border-gray-200 hover:bg-gray-50"
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.type === "demo" && <Eye size={16} />}
                      {link.type === "github" && <Github size={16} />}
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
