"use client";

import { experiences, education, certifications } from "@/data";
import { FiBriefcase, FiBookOpen, FiAward } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Trajetória <span className="text-primary">Profissional</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-5 gap-12">
          {/* Experiência */}
          <div className="md:col-span-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              <FiBriefcase size={14} />
              Experiência
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={`${exp.company}-${exp.role}`} className="relative pl-6 border-l border-border">
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-primary/30 border-2 border-primary" />

                  <div className="mb-1">
                    <h4 className="font-semibold text-sm">{exp.role}</h4>
                    <p className="text-xs text-primary font-medium">{exp.company}</p>
                  </div>

                  <p className="text-xs text-muted-foreground mb-2">
                    {exp.period} · {exp.location}
                  </p>

                  <p className="text-sm text-muted leading-relaxed mb-2">
                    {exp.description}
                  </p>

                  <ul className="space-y-1">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Educação + Certificações */}
          <div className="md:col-span-2 space-y-10">
            {/* Educação */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                <FiBookOpen size={14} />
                Formação
              </h3>

              <div className="space-y-5">
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="bg-card border border-border rounded-xl p-4"
                  >
                    <p className="font-medium text-sm">{edu.course}</p>
                    <p className="text-xs text-primary">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {edu.period} · {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificações */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                <FiAward size={14} />
                Certificações
              </h3>

              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="text-accent-green mt-1 shrink-0">✓</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}