export interface Project {
  title: string;
  description: string;
  techs: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "ai" | "mobile";
}

export const personalData = {
  name: "Marcus Linhares",
  title: "Full Stack Engineer | Applied AI Engineer",
  headline:
    "Spring Boot · Nest.js · React · Angular · Flutter · AI Agents · LangChain",
  email: "marcusviniciuslinhares543@gmail.com",
  phone: "(88) 99284-7861",
  location: "Russas, Ceará, Brasil",
  github: "https://github.com/marcuslinhares",
  linkedin: "https://linkedin.com/in/marcus-linhares",
  resumeUrl: "https://github.com/marcuslinhares/portfolio/raw/main/out/curriculo.pdf",
};

export const skills: Skill[] = [
  { name: "Java / Spring Boot", category: "backend" },
  { name: "TypeScript / Nest.js", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "Go", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML / CSS", category: "frontend" },
  { name: "Flutter", category: "mobile" },
  { name: "Docker", category: "devops" },
  { name: "CI/CD (GitHub Actions)", category: "devops" },
  { name: "Linux", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "Supabase", category: "backend" },
  { name: "AI Agents / LLM", category: "ai" },
  { name: "WhatsApp API", category: "ai" },
  { name: "n8n", category: "ai" },
  { name: "Dify", category: "ai" },
];

export const projects: Project[] = [
  {
    title: "Game Key SaaS",
    description:
      "Marketplace completo para compra e venda de chaves de jogos. Pagamentos reais com Stripe/Mercado Pago, criptografia AES-256 para chaves, sistema de escrow e CI/CD automatizado.",
    techs: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Mercado Pago",
      "Docker",
    ],
    githubUrl: "https://github.com/marcuslinhares/game-key-saas",
    highlights: [
      "Pagamentos reais Stripe + Mercado Pago integrados",
      "Criptografia AES-256-GCM para armazenamento seguro de chaves",
      "Sistema de escrow com disputas e webhooks",
      "CI/CD com Docker + GitHub Actions deploy automático",
    ],
  },
  {
    title: "Task Manager",
    description:
      "Aplicação full stack de gerenciamento de tarefas com autenticação JWT, CRUD completo, filtros por status/prioridade, e deploy containerizado.",
    techs: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "JWT",
    ],
    githubUrl: "https://github.com/marcuslinhares/task-manager",
    highlights: [
      "API RESTful com Spring Boot e Spring Security + JWT",
      "Frontend React com gerenciamento de estado",
      "Containerizado com Docker",
      "Documentação Swagger/OpenAPI",
    ],
  },
  {
    title: "Gama Project — B2B Marketplace",
    description:
      "Marketplace B2B para distribuidores em Russas/CE. Catálogo de produtos, gestão de pedidos, promoções, dashboard admin e autenticação via WhatsApp OTP.",
    techs: ["Express", "TypeScript", "React", "PostgreSQL", "WhatsApp API"],
    githubUrl: "https://github.com/marcuslinhares/gama_project",
    highlights: [
      "Autenticação por OTP via WhatsApp (Evolution API)",
      "Painel admin completo com CRUD de produtos e pedidos",
      "Sistema de promoções e descontos dinâmicos",
      "Testes E2E com Playwright",
    ],
  },
  {
    title: "Mercadinho Connect",
    description:
      "Plataforma de ofertas para mercados com catálogo de produtos, busca, sistema de destaque pago (boost) e integração com WhatsApp. Stripe + Mercado Pago.",
    techs: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Mercado Pago",
    ],
    githubUrl: "https://github.com/marcuslinhares/mercadinho-connect",
    highlights: [
      "Sistema de boost pago com Stripe e Mercado Pago",
      "Catálogo de produtos com busca e filtros",
      "Testes E2E com Playwright",
      "CI/CD com Docker multi-stage",
    ],
  },
  {
    title: "AutoLegal MicroSaaS",
    description:
      "Gerador automatizado de documentos legais para micro-SaaS, analisando stack tecnológica e gerando contratos personalizados com IA via API Groq.",
    techs: ["TypeScript", "Next.js", "Groq LLM", "AI Agents"],
    githubUrl: "https://github.com/marcuslinhares/autolegal-microsaas",
    highlights: [
      "Geração de documentos legais com LLM real (Groq API)",
      "Análise automática de stack tecnológica",
      "Fallback offline quando sem API key",
      "CI/CD com Docker + GitHub Actions",
    ],
  },
  {
    title: "Flyer API",
    description:
      "API REST em Go para panfletos/flyers digitais. CRUD de flyers, estabelecimentos e categorias com upload de imagens e autenticação por API Key.",
    techs: ["Go", "Chi", "SQLite", "Docker"],
    githubUrl: "https://github.com/marcuslinhares/flyer",
    highlights: [
      "API REST em Go com Chi Router",
      "SQLite com auto-migrations e WAL mode",
      "Upload de imagens e serve estático",
      "Docker multi-stage com PocketBase incluso",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Cerâmica Acert na Telha",
    role: "Desenvolvedor AI Trainer & FullStack",
    period: "maio de 2026 — Presente",
    location: "Russas, CE",
    description:
      "Desenvolvimento do sistema CRM Monitoro e da assistente de vendas online Luna AI, agente inteligente integrado à API do WhatsApp/Meta para automação de vendas e atendimento.",
    achievements: [
      "Arquitetura e implementação do CRM Monitoro para gestão empresarial",
      "Desenvolvimento da Luna AI — assistente de vendas via WhatsApp com IA",
      "Automação de fluxos de vendas e follow-ups inteligentes",
    ],
  },
  {
    company: "Colmeia Soluções em Tecnologia",
    role: "Desenvolvedor Trainee",
    period: "julho de 2025 — março de 2026",
    location: "Remoto",
    description:
      "Atuação direta em sistemas de alto impacto para o setor público: AutoAgent com LLM Integration, backend do Tércia (Ematerce), aplicativo Matrícula Online (Seduc/Etice) e plataforma Resolva Já (Jaguaribara).",
    achievements: [
      "FullStack e LLM Integration do AutoAgent — agente automatizado empresarial",
      "Backend do Tércia (Ematerce) com Spring Boot + Docker",
      "Aplicativo Matrícula Online (Seduc/Etice) em Flutter",
      "Fullstack do Resolva Já (Jaguaribara) com Nest.js + React",
    ],
  },
  {
    company: "Colmeia Soluções em Tecnologia",
    role: "Estagiário Fullstack",
    period: "abril de 2025 — julho de 2025",
    location: "Remoto",
    description:
      "Desenvolvimento e manutenção de sistemas web com Spring Boot, Nest.js e React. Participação em todo o ciclo: levantamento de requisitos, modelagem de banco, implementação e deploy.",
    achievements: [
      "Implementação de APIs REST com Spring Boot",
      "Desenvolvimento de interfaces com React e TypeScript",
      "Participação em deploys e manutenção de sistemas em produção",
    ],
  },
  {
    company: "Nerds UFC",
    role: "Bolsista de Desenvolvimento FullStack",
    period: "abril de 2024 — dezembro de 2024",
    location: "Russas, CE",
    description:
      "Desenvolvimento de soluções educacionais para melhorar o desempenho acadêmico de universidades e escolas de ensino fundamental.",
    achievements: [
      "Desenvolvimento de plataforma web para gestão acadêmica",
      "Criação de sistema de apoio ao desempenho educacional",
      "Trabalho em equipe com metodologias ágeis",
    ],
  },
  {
    company: "Sauto Tecnologia",
    role: "Estagiário",
    period: "fevereiro de 2021 — outubro de 2021",
    location: "Russas, CE",
    description:
      "Suporte a projetos de programação e soluções tecnológicas, com foco em desenvolvimento de software e manutenção de sistemas internos.",
    achievements: [
      "Desenvolvimento de soluções de software",
      "Manutenção e suporte a sistemas internos",
    ],
  },
];

export const education = [
  {
    institution: "Universidade Federal do Ceará (UFC)",
    course: "Ciência da Computação",
    period: "2021 — 2026",
    location: "Campus Russas",
  },
  {
    institution: "EEEP Walquer Cavalcante Maia",
    course: "Ensino Médio Técnico em Informática",
    period: "2018 — 2021",
    location: "Russas, CE",
  },
];

export const certifications = [
  "Bootcamp Bradesco GenAI, Dados & Cyber (52h) — DIO, 2026",
  "Bootcamp GitHub Copilot (35h) — DIO, 2026",
  "Versionamento de Código com Git e GitHub",
  "Introdução ao MongoDB — Nerds UFC",
  "Modelagem de Dados no Power BI",
];
