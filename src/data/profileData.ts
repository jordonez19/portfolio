export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  deliverables: string[];
  badge?: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  impact: string;
  tech: string[];
  architectureSnippet: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
  highlightBadge?: string;
}

export const PROFILE_DATA = {
  name: "Javier Ordoñez",
  headlineTitle: "Backend & Cloud Software Engineer",
  subTitle: "Especialista en Automatización con Inteligencia Artificial & Arquitecturas Cloud-Native",
  yearsExperience: "5+",
  location: "Bogotá, Colombia (Disponible Remoto / Híbrido)",
  email: "xavidev19@gmail.com",
  phone: "+57 350 783 4094",
  whatsappUrl: "https://wa.me/573507834094?text=Hola%20Javier,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.",
  github: "https://github.com/jordonez19",
  linkedin: "https://linkedin.com/in/javier-ordonez-a017b5a0",
  englishLevel: "C1 Advanced",

  about: `Desarrollador Full Stack con más de 5 años de experiencia y más de 4 años especializado en backend con Node.js, TypeScript, Golang y Java, sobre arquitecturas cloud-native en AWS y GCP. En los últimos dos años he enfocado mi trabajo en la automatización impulsada por inteligencia artificial: integro modelos de lenguaje (OpenAI, Claude, Amazon Bedrock) para construir agentes, bots y flujos de procesamiento inteligente de documentos, aplicando prompt engineering y tool calling directamente en producción.`,

  heroStats: [
    { value: "5+ Años", label: "Experiencia en Producción", accent: "heading" },
    { value: "IA Generativa", label: "Bedrock, OpenAI & Claude en Producción", accent: "cyan" },
    { value: "Cloud Native", label: "AWS / GCP & Terraform (IaC)", accent: "primary" },
    { value: "C1", label: "Inglés Certificado (Dublín)", accent: "emerald" }
  ],

  cvFiles: {
    es: "/CV_Javier_es.pdf",
    en: "/CV_Javier_en.pdf"
  },

  skills: {
    ai: [
      { name: "Amazon Bedrock", level: 95 },
      { name: "OpenAI API / GPT-4o", level: 95 },
      { name: "Claude API / Anthropic", level: 90 },
      { name: "Agentes de IA & Tool Calling", level: 92 },
      { name: "Prompt Engineering & RAG", level: 95 },
      { name: "Cursor / AI-Driven Coding", level: 98 }
    ],
    backend: [
      { name: "Golang (Go)", level: 88 },
      { name: "Node.js & Express", level: 96 },
      { name: "TypeScript", level: 95 },
      { name: "Java & Spring Boot", level: 85 },
      { name: "Python / Django / FastAPI", level: 85 },
      { name: "APIs REST & GraphQL", level: 95 }
    ],
    cloud: [
      { name: "AWS (ECS, Lambda, S3, IAM, CloudWatch)", level: 92 },
      { name: "Terraform (IaC)", level: 88 },
      { name: "Docker & Containerization", level: 92 },
      { name: "GCP (Cloud Run, Functions)", level: 82 },
      { name: "CI/CD & Github Actions", level: 88 }
    ],
    databases: [
      { name: "PostgreSQL", level: 92 },
      { name: "MongoDB", level: 90 },
      { name: "DynamoDB", level: 88 },
      { name: "MySQL / MariaDB", level: 90 }
    ],
    frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript Frontend", level: 92 }
    ]
  },

  services: [
    {
      id: "ai_automation",
      title: "Agentes de IA & Automatización de Procesos",
      iconName: "Bot",
      tagline: "Convierte tareas manuales en pipelines automatizados con LLMs y Amazon Bedrock.",
      description: "Desarrollo de asistentes de IA autónomos, integraciones con Slack/WhatsApp, extracción inteligente de datos de documentos PDF/imágenes mediante Tool Calling y structured outputs.",
      deliverables: [
        "Pipeline de IA en Amazon Bedrock / Claude / OpenAI",
        "Tool Calling & Integración con bases de datos internas",
        "Bots conversacionales para Slack/Teams/WhatsApp",
        "Procesamiento inteligente de documentos en tiempo real"
      ],
      badge: "Más Demandado"
    },
    {
      id: "cloud_backend",
      title: "Arquitectura Cloud & Microservicios Scalables",
      iconName: "Cloud",
      tagline: "APIs backend ultrarrápidas y seguras sobre AWS / GCP con Terraform.",
      description: "Diseño e implementación de microservicios con Golang o Node.js/TypeScript, arquitecturas serverless en AWS Lambda/ECS, bases de datos optimizadas e Infraestructura como Código (IaC).",
      deliverables: [
        "APIs RESTful / GraphQL ultrarrápidas en Go o Node.js",
        "Infraestructura aprovisionada con Terraform (IaC)",
        "Contenedores Docker listos para producción en ECS/Cloud Run",
        "Modelado de DBs de alta concurrencia (PostgreSQL/DynamoDB)"
      ],
    },
    {
      id: "fullstack_app",
      title: "Desarrollo Web: Estáticas, Dinámicas & E-commerce",
      iconName: "Layout",
      tagline: "Del sitio estático más simple a la plataforma transaccional más compleja.",
      description: "Construcción de sitios web estáticos, aplicaciones dinámicas full stack (Next.js / React) y tiendas online con pasarelas de pago, arquitectura limpia y sistemas de autenticación seguros (KYC, JWT, Roles).",
      deliverables: [
        "Sitios estáticos de alto rendimiento (landing pages, portafolios, blogs)",
        "Aplicaciones web dinámicas con backend a medida (React/Next.js)",
        "Tiendas online / E-commerce con pasarelas de pago integradas",
        "Autenticación segura, roles y cumplimiento KYC",
        "Despliegue automatizado CI/CD"
      ],
      badge: "Llave en Mano"
    },
    {
      id: "consulting_audit",
      title: "Consultoría, Refactorización & LLMOps",
      iconName: "Zap",
      tagline: "Auditoría de código, optimización de costos AWS y adopción de IA en tu equipo.",
      description: "Análisis y modernización de arquitecturas existentes, reducción de costos en la nube, integración de herramientas IA (Cursor, GitHub Copilot) en tu flujo de desarrollo y optimización de latencia en modelos.",
      deliverables: [
        "Informe detallado de arquitectura & cuello de botella",
        "Estrategia de reducción de costos AWS/Cloud",
        "Capacitación de equipo en Prompt Engineering & Tool Calling",
        "Plan de migración a microservicios"
      ],
    }
  ] as ServiceItem[],

  experiences: [
    {
      company: "Ecapture",
      role: "Software Developer & Cloud Infrastructure",
      period: "2026 – Presente",
      location: "Bogotá, Colombia (Remoto)",
      type: "Jornada Completa",
      highlights: [
        "Integración de Amazon Bedrock y modelos LLM en pipelines de automatización y procesamiento inteligente de documentos, aplicando IA generativa en producción.",
        "Desarrollo de microservicios backend con Golang, Node.js y TypeScript, y construcción de APIs REST escalables para gestión documental.",
        "Administración de infraestructura AWS (ECS, EC2, ECR, S3, IAM, CloudWatch, Route 53, SES, KMS), automatizando despliegues mediante Terraform y Docker.",
        "Optimización avanzada de PostgreSQL para aplicaciones de alto rendimiento y consulta de grandes volúmenes de datos."
      ],
      tags: ["Golang", "Amazon Bedrock", "Node.js", "TypeScript", "AWS ECS", "Terraform", "Docker", "PostgreSQL"]
    },
    {
      company: "Plurall",
      role: "Software Developer Full Stack",
      period: "2025 – 2026",
      location: "Colombia (Remoto)",
      type: "Jornada Completa",
      highlights: [
        "Integración de APIs de LLM (OpenAI y Claude) para automatización de asistentes inteligentes aplicados al negocio de fintech y crédito.",
        "Desarrollo de bots para Slack y agentes de IA basados en prompt engineering y tool calling en producción.",
        "Construcción y mantenimiento de microservicios serverless en AWS (Lambda, DynamoDB, SQS, SES, API Gateway, Cognito).",
        "Diseño de arquitecturas backend con DDD y Clean Architecture; personalización de Apache Fineract (Java, Spring Boot, Gradle) para motores de crédito.",
        "Gestión de Infraestructura como Código (IaC) con Terraform."
      ],
      tags: ["OpenAI API", "Claude API", "Tool Calling", "AWS Lambda", "DynamoDB", "Java", "Spring Boot", "Terraform", "React"]
    },
    {
      company: "OneCredential",
      role: "Software Developer Full Stack",
      period: "2025",
      location: "Remoto",
      type: "Freelance",
      highlights: [
        "Diseño de arquitectura frontend modular con Next.js 13 bajo principios de Arquitectura Hexagonal y componentes reutilizables.",
        "Implementación de autenticación segura, protección por roles e integración de verificación KYC con Sumsub en tiempo real."
      ],
      tags: ["Next.js", "React", "TypeScript", "Arquitectura Hexagonal", "Sumsub KYC", "Tailwind/CSS"]
    },
    {
      company: "Nexos SAS",
      role: "Software Developer Full Stack",
      period: "2022 – 2024",
      location: "Bogotá, Colombia (Híbrido)",
      type: "Jornada Completa",
      highlights: [
        "Desarrollé APIs y servicios backend con Node.js y TypeScript, integrando aplicaciones frontend con servicios backend.",
        "Diseñé y optimicé bases de datos MySQL y consultas SQL; construí módulos reutilizables y APIs consumidas por múltiples aplicaciones.",
        "Desarrollé funcionalidades frontend con React y JavaScript moderno, colaborando en equipos ágiles bajo metodología Scrum.",
        "Participé en despliegues y mantenimiento de aplicaciones en AWS y DigitalOcean."
      ],
      tags: ["Node.js", "TypeScript", "MySQL", "React", "AWS", "DigitalOcean", "Scrum"]
    },
    {
      company: "Junosy Systems / SOSLOGIC SAS",
      role: "Software Backend Developer",
      period: "2021 – 2022",
      location: "Colombia (Remoto)",
      type: "Jornada Completa",
      highlights: [
        "Desarrollo de servicios backend con Node.js, Express y TypeScript siguiendo Clean Architecture.",
        "Diseño y mantenimiento de esquemas de bases de datos PostgreSQL y MongoDB.",
        "Implementación de autenticación JWT, validación estricta de datos, logging y buenas prácticas de seguridad."
      ],
      tags: ["Node.js", "Express", "TypeScript", "Clean Architecture", "PostgreSQL", "MongoDB"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      title: "Pipeline Documental con Amazon Bedrock & Tool Calling",
      category: "IA Generativa & Cloud",
      description: "Sistema inteligente capaz de ingerir miles de archivos PDF empresariales, clasificarlos de forma autónoma con Amazon Bedrock y extraer estructuradamente la información clave mediante Tool Calling directamente a PostgreSQL.",
      impact: "Reducción del 85% en tiempo manual de procesamiento y cero margen de error en extracción.",
      tech: ["Amazon Bedrock", "Golang", "AWS ECS", "Terraform", "PostgreSQL"],
      architectureSnippet: "S3 Event -> ECS Worker (Go) -> Bedrock Tool Calling -> Postgres DB"
    },
    {
      title: "Agente FinTech en Slack con LLMOps",
      category: "Agentes de IA",
      description: "Asistente inteligente integrado en Slack para equipos financieros que consulta el estado de créditos y genera cronogramas de amortización ejecutando llamadas a funciones en Apache Fineract de forma segura.",
      impact: "Más de 500 consultas automatizadas por día para el equipo de operaciones.",
      tech: ["Node.js", "OpenAI API", "Claude API", "AWS Lambda", "Slack Bolt API"],
      architectureSnippet: "Slack Event -> AWS Lambda (Node) -> OpenAI Function Call -> Fineract API"
    },
    {
      title: "Core de Crédito Serverless Event-Driven",
      category: "Cloud Backend",
      description: "Arquitectura serverless de alta disponibilidad para originación de préstamos, autenticación de usuarios con AWS Cognito y procesamiento síncrono/asíncrono de eventos.",
      impact: "Soporta picos de 1,000 req/sec con latencias promedio de respuesta <150ms.",
      tech: ["AWS Lambda", "DynamoDB", "SQS", "Cognito", "TypeScript"],
      architectureSnippet: "API Gateway -> Cognito -> Lambda (TS) -> DynamoDB + SQS Event Bus"
    },
    {
      title: "Plataforma KYC Hexagonal con Next.js 13",
      category: "Frontend Architecture",
      description: "Aplicación web modular de verificación de identidad con Next.js 13, custom hooks y flujos en tiempo real integrando Sumsub API.",
      impact: "Verificación de usuarios en menos de 60 segundos con interfaz fluida.",
      tech: ["Next.js 13", "TypeScript", "Sumsub SDK", "Arquitectura Hexagonal"],
      architectureSnippet: "Next.js UI -> Custom Domain Hooks -> Hexagonal Adapters -> Sumsub API"
    }
  ] as ProjectItem[],

  education: [
    {
      degree: "Ingeniería de Software",
      institution: "Institución Universitaria de Colombia",
      period: "2019 – 2024",
      details: [
        "Título Obtenido / Tarjeta Profesional 2025",
        "Promedio de graduación: 4.4",
        "Énfasis en Arquitectura de Software, Desarrollo Web Escalable y Sistemas Distribuidos."
      ],
      highlightBadge: "Título Profesional"
    },
    {
      degree: "Diplomado en Ciberseguridad",
      institution: "Institución Universitaria de Colombia",
      period: "Dic. 2024",
      details: [
        "Fundamentos de ciberseguridad aplicados a arquitecturas backend y cloud."
      ]
    },
    {
      degree: "Diplomado en Desarrollo Web (800 Horas)",
      institution: "Universidad Industrial de Santander, Beca Misión TIC, MinTIC",
      period: "2021",
      details: [
        "Programa intensivo de 800 horas del Ministerio de Tecnologías de la Información.",
        "Formación en Java, JavaScript, Python, MySQL, Oracle y desarrollo web fullstack."
      ]
    },
    {
      degree: "Curso Intensivo de Inglés (Nivel C1)",
      institution: "EF International Language Centers, Dublín, Irlanda",
      period: "Dublín, Irlanda",
      details: [
        "Nivel C1 Avanzado certificado en entorno de inmersión total en Dublín.",
        "Capacidad comprobada para liderar reuniones técnicas y colaborar con equipos globales en inglés."
      ],
      highlightBadge: "Inglés C1"
    }
  ] as EducationItem[],

  certifications: [
    { name: "Docker - Fundamentos y Práctica", provider: "Platzi", year: "2024" },
    { name: "Django & REST Framework", provider: "Platzi", year: "2024" },
    { name: "PostgreSQL Database Admin", provider: "Platzi", year: "2024" },
    { name: "SQL & MySQL Advanced", provider: "Platzi", year: "2024" },
    { name: "Certificación Linux Professional", provider: "Udemy", year: "2024" },
    { name: "Node.js: API REST con Express.js", provider: "Platzi", year: "2024" },
    { name: "Responsive Web Design Certification", provider: "freeCodeCamp", year: "2021" }
  ]
};
