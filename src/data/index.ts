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
  title: "Full Stack Developer",
  headline:
    "Spring Boot · Nest.js · React · Angular · Flutter · AI Agents",
  email: "marcusviniciuslinhares543@gmail.com",
  phone: "(88) 99284-7861",
  location: "Russas, Ceará, Brasil",
  github: "https://github.com/marcuslinhares",
  linkedin: "https://linkedin.com/in/marcus-linhares",
  resumeUrl: "#",
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
    title: "Mercadinho Connect",
    description:
      "Plataforma de ofertas para mercados com integração via WhatsApp. Catálogo de produtos, busca e notificações de promoções.",
    techs: ["Next.js", "TypeScript", "Supabase", "Python", "WhatsApp API"],
    githubUrl: "https://github.com/marcuslinhares/mercadinho-connect",
    highlights: [
      "Plataforma full stack com Next.js + Supabase",
      "Catálogo de produtos com busca e filtros",
      "Notificações de ofertas via WhatsApp",
    ],
  },
  {
    title: "BIA — Assistente Virtual Financeiro",
    description:
      "Assistente virtual com IA generativa para aconselhamento financeiro. Projeto final do Bootcamp Bradesco GenAI, Dados & Cyber (52h).",
    techs: ["Python", "Jupyter", "LLM", "IA Generativa"],
    githubUrl:
      "https://github.com/marcuslinhares/assistente-financeiro-bradesco",
    highlights: [
      "Agente de IA para análise e aconselhamento financeiro",
      "Integração com LLM para linguagem natural",
      "Projeto vencedor do bootcamp Bradesco (52h)",
    ],
  },
  {
    title: "Antigravity Kit",
    description:
      "Toolkit para criação autônoma de agentes de IA. Pipeline completo de desenvolvimento que gera micro-SaaS e ferramentas inteligentes de forma automatizada.",
    techs: ["Python", "TypeScript", "LLM", "AI Agents", "Automação"],
    githubUrl: "https://github.com/marcuslinhares/antigravity-kit",
    highlights: [
      "Pipeline autônomo de desenvolvimento de agentes",
      "Geração automatizada de micro-SaaS funcionais",
      "Arquitetura modular extensível",
    ],
  },
  {
    title: "AutoLegal MicroSaaS",
    description:
      "Gerador automatizado de documentos legais para micro-SaaS, analisando stack tecnológica e gerando contratos personalizados com IA.",
    techs: ["TypeScript", "Next.js", "LLM", "AI Agents"],
    githubUrl: "https://github.com/marcuslinhares/autolegal-microsaas",
    highlights: [
      "Geração de documentos legais com IA",
      "Análise automática de stack tecnológica",
      "Interface moderna com Next.js",
    ],
  },
  {
    title: "IA Mentor de Carreira",
    description:
      "Agente de IA para mentoria de carreira em tecnologia. Durante live, demonstrou a criação de um mentor virtual capaz de analisar perfis e sugerir planos de evolução.",
    techs: ["Python", "Jupyter", "LLM", "AI Agents"],
    githubUrl: "https://github.com/marcuslinhares/ia-mentor-carreira",
    highlights: [
      "Mentor virtual com análise de perfil tech",
      "Geração de planos de carreira personalizados",
      "Projeto demonstrado em live pública",
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
