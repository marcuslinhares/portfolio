import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcus Linhares | Full Stack Engineer & Applied AI Engineer",
  description:
    "Portfólio de Marcus Linhares — Full Stack Engineer especializado em Spring Boot, Nest.js, React, Angular, Flutter e agentes de IA integrados à API do WhatsApp. Graduando em Ciência da Computação pela UFC.",
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
    title: "Marcus Linhares | Full Stack Engineer & Applied AI Engineer",
    description:
      "Full Stack Engineer especializado em Spring Boot, React, Angular e agentes de IA. Graduando em Ciência da Computação pela UFC.",
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
      <body className="min-h-full flex flex-col">{children}
        <ChatWidget />
      </body>
    </html>
  );
}
