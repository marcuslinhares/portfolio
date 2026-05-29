"use client";

import { useState } from "react";
import { personalData } from "@/data";
import Link from "next/link";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-semibold text-primary hover:text-primary-hover transition-colors"
        >
          ML<span className="text-foreground">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-muted hover:text-foreground"
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-card border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-center"
            >
              GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
