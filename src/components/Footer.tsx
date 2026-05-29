"use client";

import { personalData } from "@/data";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} {personalData.name}. Feito com
          <FiHeart size={10} className="text-red-500" />
          e Next.js
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}