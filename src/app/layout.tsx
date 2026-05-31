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
  metadataBase: new URL("https://marcuslinhares.com"),
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
    images: ["/icon-512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
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
