"use client";

import { projects } from "@/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Projetos em <span className="text-primary">Destaque</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FiGithub size={14} />
                    Código
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}