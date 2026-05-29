import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcus Linhares | Full Stack Developer",
  description:
    "Portfólio de Marcus Linhares — Desenvolvedor Full Stack especializado em Spring Boot, Nest.js, React, Angular e agentes de IA integrados à API do WhatsApp.",
  keywords: [
    "Marcus Linhares",
    "Full Stack Developer",
    "Spring Boot",
    "React",
    "Nest.js",
    "Angular",
    "Flutter",
    "AI Agents",
    "WhatsApp API",
    "Desenvolvedor",
    "UFC",
    "Russas",
    "Ceará",
  ],
  openGraph: {
    title: "Marcus Linhares | Full Stack Developer",
    description:
      "Desenvolvedor Full Stack especializado em Spring Boot, React e agentes de IA.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
