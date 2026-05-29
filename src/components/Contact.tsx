"use client";

import { personalData } from "@/data";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          Vamos <span className="text-primary">conversar</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-6 mx-auto" />

        <p className="text-muted mb-10 max-w-lg mx-auto leading-relaxed">
          Estou aberto a oportunidades como Desenvolvedor Full Stack Júnior
          (home office). Se tiver um projeto interessante ou quiser trocar uma
          ideia, me chama!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-all hover:scale-105"
          >
            <FiMail size={16} />
            Enviar Email
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted hover:text-foreground hover:border-muted-foreground transition-all"
          >
            <FiLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted hover:text-foreground hover:border-muted-foreground transition-all"
          >
            <FiGithub size={16} />
            GitHub
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <FiMapPin size={12} />
          {personalData.location}
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          {personalData.phone}
        </div>
      </div>
    </section>
  );
}