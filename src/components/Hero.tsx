"use client";

import { personalData } from "@/data";
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient"
    >
      <div className="max-w-3xl mx-auto px-6 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          Disponível para oportunidades
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {personalData.name.split(" ")[0]}{" "}
          <span className="text-primary">{personalData.name.split(" ")[1]}</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted mb-2">
          {personalData.title}
        </p>

        <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          {personalData.headline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-all hover:scale-105"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-muted hover:text-foreground hover:border-muted-foreground transition-all"
          >
            Entrar em Contato
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
          <span className="w-px h-5 bg-border" />
          <span className="text-xs text-muted-foreground">{personalData.location}</span>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <FiArrowDown className="text-muted-foreground" size={20} />
        </div>
      </div>
    </section>
  );
}
