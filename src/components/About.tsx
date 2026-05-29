"use client";

import { personalData, skills } from "@/data";
import { FiMapPin, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const categoryLabels: Record<string, string> = {
  backend: "Backend",
  frontend: "Frontend",
  mobile: "Mobile",
  devops: "DevOps",
  ai: "AI & Automação",
};

const categoryColors: Record<string, string> = {
  backend: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  frontend: "bg-primary/10 text-primary border-primary/20",
  mobile: "bg-green-500/10 text-green-400 border-green-500/20",
  devops: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  ai: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function About() {
  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Sobre <span className="text-primary">Mim</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-5 gap-12">
          {/* Texto */}
          <div className="md:col-span-3 space-y-4 text-muted leading-relaxed">
            <p>
              Desenvolvedor Fullstack com experiência em engenharia de software
              e otimização de processos. Construí uma base sólida desde o ensino
              médio técnico e consolidei minha experiência de mercado atuando
              como Desenvolvedor Trainee na Colmeia Soluções em Tecnologia, com
              foco na implantação de sistemas em produção e no desenvolvimento de
              aplicações com Spring Boot, Nest.js, React, Angular e ecossistema
              DevOps (Docker, CI/CD, Linux). Graduando em Ciência da Computação
              pela Universidade Federal do Ceará, trago vivência na criação de
              projetos de impacto educacional e no desenvolvimento de plataformas
              SaaS multi-tenant a partir do meu ambiente local. Atualmente
              desenvolvo agentes de IA integrados à API do WhatsApp/Meta e
              Evolution API para automação de vendas, como a assistente Luna AI
              em operação na Cerâmica Acert na Telha e Auto Agent na Colmeia.
              Busco oportunidades onde eu possa continuar evoluindo tecnicamente
              e entregando valor através de código eficiente e bem estruturado.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FiMapPin size={14} />
                {personalData.location}
              </div>
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FiMail size={14} />
                Email
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FiGithub size={14} />
                GitHub
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FiLinkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Tecnologias
            </h3>
            <div className="space-y-6">
              {Object.entries(grouped).map(([category, catskills]) => (
                <div key={category}>
                  <h4 className="text-xs font-medium text-muted-foreground mb-2">
                    {categoryLabels[category]}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {catskills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${categoryColors[category]}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
