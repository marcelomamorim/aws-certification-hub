import type { Language } from "./site";

export type CertLevel = "foundational" | "associate" | "professional" | "specialty";

interface LocalizedText {
  pt: string;
  en: string;
}

interface Resource {
  title: string;
  url: string;
}

interface CertDomain {
  name: LocalizedText;
  weightPct: number;
  summary?: LocalizedText;
  keyTopics?: LocalizedText[];
  // Nomes de serviços relacionados (texto informativo, não linkado).
  services?: string[];
}

// Serviço em destaque; `slug` presente apenas quando existe no aws-services-catalog.
interface HighlightedService {
  name: string;
  slug?: string;
}

interface CertDefinition {
  slug: string;
  code: string;
  name: LocalizedText;
  level: CertLevel;
  durationMin: number;
  questions: number;
  passingScore: number;
  costUsd: number;
  overview: LocalizedText;
  whoFor: LocalizedText;
  domains: CertDomain[];
  highlightedServices: HighlightedService[];
  studyOrder?: LocalizedText[];
  resources: Resource[];
}

export const levelLabels: Record<Language, Record<CertLevel, string>> = {
  pt: {
    foundational: "Foundational",
    associate: "Associate",
    professional: "Professional",
    specialty: "Specialty"
  },
  en: {
    foundational: "Foundational",
    associate: "Associate",
    professional: "Professional",
    specialty: "Specialty"
  }
};

export const levelOrder: CertLevel[] = ["foundational", "associate", "professional", "specialty"];

const certifications: CertDefinition[] = [
  {
    slug: "cloud-practitioner",
    code: "CLF-C02",
    name: {
      pt: "AWS Certified Cloud Practitioner",
      en: "AWS Certified Cloud Practitioner"
    },
    level: "foundational",
    durationMin: 90,
    questions: 65,
    passingScore: 700,
    costUsd: 100,
    overview: {
      pt: "Valida conhecimento geral da AWS Cloud, independente de função técnica: valor da nuvem, responsabilidade compartilhada, segurança, custos e serviços centrais.",
      en: "Validates general AWS Cloud knowledge, independent of a technical role: cloud value, shared responsibility, security, costs, and core services."
    },
    whoFor: {
      pt: "Quem está começando na nuvem, profissionais de negócio próximos de times técnicos e primeira certificação para trilhas mais avançadas.",
      en: "People starting in the cloud, business roles close to technical teams, and a first step toward more advanced tracks."
    },
    domains: [
      {
        name: { pt: "Conceitos de nuvem", en: "Cloud Concepts" },
        weightPct: 24,
        summary: {
          pt: "Valor da AWS Cloud, economia da nuvem e o AWS Well-Architected Framework.",
          en: "AWS Cloud value, cloud economics, and the AWS Well-Architected Framework."
        },
        keyTopics: [
          { pt: "Benefícios da nuvem: elasticidade, agilidade e economia de escala.", en: "Cloud benefits: elasticity, agility, and economies of scale." },
          { pt: "Modelos de nuvem e os 6 pilares do Well-Architected.", en: "Cloud models and the 6 Well-Architected pillars." },
          { pt: "CapEx vs OpEx e o valor do modelo pay-as-you-go.", en: "CapEx vs OpEx and the value of pay-as-you-go." }
        ],
        services: ["AWS Well-Architected Tool"]
      },
      {
        name: { pt: "Segurança e conformidade", en: "Security and Compliance" },
        weightPct: 30,
        summary: {
          pt: "Modelo de responsabilidade compartilhada, IAM e recursos de segurança e conformidade.",
          en: "Shared responsibility model, IAM, and security and compliance capabilities."
        },
        keyTopics: [
          { pt: "Responsabilidade compartilhada: o que é do cliente vs da AWS.", en: "Shared responsibility: what is the customer's vs AWS's." },
          { pt: "IAM: usuários, grupos, roles, políticas e MFA.", en: "IAM: users, groups, roles, policies, and MFA." },
          { pt: "AWS Artifact, Shield, WAF, KMS e GuardDuty.", en: "AWS Artifact, Shield, WAF, KMS, and GuardDuty." }
        ],
        services: ["IAM", "AWS KMS", "AWS Shield", "AWS WAF", "Amazon GuardDuty", "AWS Artifact"]
      },
      {
        name: { pt: "Tecnologia e serviços de nuvem", en: "Cloud Technology and Services" },
        weightPct: 34,
        summary: {
          pt: "Métodos de acesso, serviços globais e serviços centrais de compute, storage, banco de dados e rede.",
          en: "Access methods, global infrastructure, and core compute, storage, database, and networking services."
        },
        keyTopics: [
          { pt: "Regiões, Zonas de Disponibilidade e edge locations.", en: "Regions, Availability Zones, and edge locations." },
          { pt: "Compute (EC2, Lambda, ECS), storage (S3, EBS) e bancos (RDS, DynamoDB).", en: "Compute (EC2, Lambda, ECS), storage (S3, EBS), and databases (RDS, DynamoDB)." },
          { pt: "Rede: VPC, Route 53, CloudFront e formas de acesso (Console, CLI, SDK).", en: "Networking: VPC, Route 53, CloudFront and access methods (Console, CLI, SDK)." }
        ],
        services: ["Amazon EC2", "AWS Lambda", "Amazon S3", "Amazon RDS", "Amazon DynamoDB", "Amazon VPC", "Amazon CloudFront"]
      },
      {
        name: { pt: "Cobrança, preços e suporte", en: "Billing, Pricing, and Support" },
        weightPct: 12,
        summary: {
          pt: "Modelos de preço, ferramentas de custo e planos de suporte da AWS.",
          en: "Pricing models, cost tools, and AWS support plans."
        },
        keyTopics: [
          { pt: "Modelos de preço: On-Demand, Reserved, Spot e Savings Plans.", en: "Pricing models: On-Demand, Reserved, Spot, and Savings Plans." },
          { pt: "Cost Explorer, Budgets, Billing e a AWS Pricing Calculator.", en: "Cost Explorer, Budgets, Billing, and the AWS Pricing Calculator." },
          { pt: "Planos de suporte e o AWS Trusted Advisor.", en: "Support plans and AWS Trusted Advisor." }
        ],
        services: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Trusted Advisor"]
      }
    ],
    highlightedServices: [
      { name: "AWS Lambda", slug: "aws-lambda" },
      { name: "Amazon RDS", slug: "amazon-rds" },
      { name: "Amazon DynamoDB", slug: "amazon-dynamodb" },
      { name: "Amazon CloudFront", slug: "amazon-cloudfront" },
      { name: "Amazon CloudWatch", slug: "amazon-cloudwatch" },
      { name: "Amazon SQS", slug: "amazon-sqs" },
      { name: "Amazon SNS", slug: "amazon-sns" }
    ],
    studyOrder: [
      { pt: "Comece por Conceitos de nuvem para fixar vocabulário e o Well-Architected.", en: "Start with Cloud Concepts to lock in vocabulary and Well-Architected." },
      { pt: "Avance para Tecnologia e serviços (maior peso, 34%).", en: "Move to Cloud Technology and Services (largest weight, 34%)." },
      { pt: "Estude Segurança e conformidade (30%) com foco em IAM e responsabilidade compartilhada.", en: "Study Security and Compliance (30%) focusing on IAM and shared responsibility." },
      { pt: "Feche com Cobrança e suporte (12%).", en: "Finish with Billing and Support (12%)." }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
      { title: "Guia oficial do exame (CLF-C02)", url: "https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html" }
    ]
  },
  {
    slug: "ai-practitioner",
    code: "AIF-C01",
    name: {
      pt: "AWS Certified AI Practitioner",
      en: "AWS Certified AI Practitioner"
    },
    level: "foundational",
    durationMin: 90,
    questions: 65,
    passingScore: 700,
    costUsd: 100,
    overview: {
      pt: "Valida entendimento fundamental de IA, machine learning e IA generativa na AWS, incluindo casos de uso, IA responsável e serviços como Amazon Bedrock e SageMaker.",
      en: "Validates a foundational understanding of AI, machine learning, and generative AI on AWS, including use cases, responsible AI, and services like Amazon Bedrock and SageMaker."
    },
    whoFor: {
      pt: "Perfis técnicos e de negócio que usam soluções de IA/ML sem necessariamente construí-las.",
      en: "Technical and business roles who use AI/ML solutions without necessarily building them."
    },
    domains: [
      { name: { pt: "Fundamentos de IA e ML", en: "Fundamentals of AI and ML" }, weightPct: 20 },
      { name: { pt: "Fundamentos de IA generativa", en: "Fundamentals of Generative AI" }, weightPct: 24 },
      { name: { pt: "Aplicações de foundation models", en: "Applications of Foundation Models" }, weightPct: 28 },
      { name: { pt: "Diretrizes de IA responsável", en: "Guidelines for Responsible AI" }, weightPct: 14 },
      { name: { pt: "Segurança, conformidade e governança de IA", en: "Security, Compliance, and Governance for AI" }, weightPct: 14 }
    ],
    highlightedServices: [{ name: "Amazon Bedrock" }, { name: "Amazon SageMaker" }, { name: "Amazon Q" }],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" }
    ]
  },
  {
    slug: "solutions-architect-associate",
    code: "SAA-C03",
    name: { pt: "AWS Certified Solutions Architect – Associate", en: "AWS Certified Solutions Architect – Associate" },
    level: "associate",
    durationMin: 130,
    questions: 65,
    passingScore: 720,
    costUsd: 150,
    overview: {
      pt: "Valida a capacidade de projetar arquiteturas seguras, resilientes, de alto desempenho e com custo otimizado na AWS.",
      en: "Validates the ability to design secure, resilient, high-performing, and cost-optimized architectures on AWS."
    },
    whoFor: {
      pt: "Pessoas que projetam soluções na AWS e querem a certificação associate mais popular.",
      en: "People who design AWS solutions and want the most popular associate certification."
    },
    domains: [
      { name: { pt: "Projetar arquiteturas seguras", en: "Design Secure Architectures" }, weightPct: 30 },
      { name: { pt: "Projetar arquiteturas resilientes", en: "Design Resilient Architectures" }, weightPct: 26 },
      { name: { pt: "Projetar arquiteturas de alto desempenho", en: "Design High-Performing Architectures" }, weightPct: 24 },
      { name: { pt: "Projetar arquiteturas com custo otimizado", en: "Design Cost-Optimized Architectures" }, weightPct: 20 }
    ],
    highlightedServices: [
      { name: "Amazon RDS", slug: "amazon-rds" },
      { name: "Amazon DynamoDB", slug: "amazon-dynamodb" },
      { name: "Amazon SQS", slug: "amazon-sqs" },
      { name: "Amazon CloudFront", slug: "amazon-cloudfront" },
      { name: "Amazon ElastiCache", slug: "amazon-elasticache" }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" }
    ]
  },
  {
    slug: "developer-associate",
    code: "DVA-C02",
    name: { pt: "AWS Certified Developer – Associate", en: "AWS Certified Developer – Associate" },
    level: "associate",
    durationMin: 130,
    questions: 65,
    passingScore: 720,
    costUsd: 150,
    overview: {
      pt: "Valida habilidades de desenvolver, implantar e depurar aplicações cloud-native na AWS, com foco em SDKs, serverless e CI/CD.",
      en: "Validates skills to develop, deploy, and debug cloud-native applications on AWS, focusing on SDKs, serverless, and CI/CD."
    },
    whoFor: {
      pt: "Desenvolvedores que constroem e mantêm aplicações na AWS.",
      en: "Developers who build and maintain applications on AWS."
    },
    domains: [
      { name: { pt: "Desenvolvimento com serviços AWS", en: "Development with AWS Services" }, weightPct: 32 },
      { name: { pt: "Segurança", en: "Security" }, weightPct: 26 },
      { name: { pt: "Implantação", en: "Deployment" }, weightPct: 24 },
      { name: { pt: "Troubleshooting e otimização", en: "Troubleshooting and Optimization" }, weightPct: 18 }
    ],
    highlightedServices: [
      { name: "AWS Lambda", slug: "aws-lambda" },
      { name: "Amazon DynamoDB", slug: "amazon-dynamodb" },
      { name: "Amazon API Gateway", slug: "amazon-api-gateway" },
      { name: "Amazon Cognito", slug: "amazon-cognito" },
      { name: "AWS Step Functions", slug: "aws-step-functions" }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-developer-associate/" }
    ]
  },
  {
    slug: "sysops-administrator-associate",
    code: "SOA-C02",
    name: { pt: "AWS Certified SysOps Administrator – Associate", en: "AWS Certified SysOps Administrator – Associate" },
    level: "associate",
    durationMin: 130,
    questions: 65,
    passingScore: 720,
    costUsd: 150,
    overview: {
      pt: "Valida operação, monitoramento e automação de workloads na AWS, com foco em confiabilidade, segurança e otimização de custo/desempenho.",
      en: "Validates operation, monitoring, and automation of AWS workloads, focusing on reliability, security, and cost/performance optimization."
    },
    whoFor: {
      pt: "Administradores de sistemas e profissionais de operações em nuvem.",
      en: "System administrators and cloud operations professionals."
    },
    domains: [
      { name: { pt: "Monitoramento, logging e remediação", en: "Monitoring, Logging, and Remediation" }, weightPct: 20 },
      { name: { pt: "Confiabilidade e continuidade de negócio", en: "Reliability and Business Continuity" }, weightPct: 16 },
      { name: { pt: "Implantação, provisionamento e automação", en: "Deployment, Provisioning, and Automation" }, weightPct: 18 },
      { name: { pt: "Segurança e conformidade", en: "Security and Compliance" }, weightPct: 16 },
      { name: { pt: "Rede e entrega de conteúdo", en: "Networking and Content Delivery" }, weightPct: 18 },
      { name: { pt: "Otimização de custo e desempenho", en: "Cost and Performance Optimization" }, weightPct: 12 }
    ],
    highlightedServices: [
      { name: "Amazon CloudWatch", slug: "amazon-cloudwatch" },
      { name: "Amazon RDS", slug: "amazon-rds" },
      { name: "Amazon CloudFront", slug: "amazon-cloudfront" }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-sysops-admin-associate/" }
    ]
  },
  {
    slug: "data-engineer-associate",
    code: "DEA-C01",
    name: { pt: "AWS Certified Data Engineer – Associate", en: "AWS Certified Data Engineer – Associate" },
    level: "associate",
    durationMin: 130,
    questions: 65,
    passingScore: 720,
    costUsd: 150,
    overview: {
      pt: "Valida a construção de pipelines de dados: ingestão, transformação, armazenamento, operação e governança de dados na AWS.",
      en: "Validates building data pipelines: ingestion, transformation, storage, operations, and data governance on AWS."
    },
    whoFor: {
      pt: "Engenheiros de dados que projetam e operam pipelines na AWS.",
      en: "Data engineers who design and operate pipelines on AWS."
    },
    domains: [
      { name: { pt: "Ingestão e transformação de dados", en: "Data Ingestion and Transformation" }, weightPct: 34 },
      { name: { pt: "Gestão de armazenamento de dados", en: "Data Store Management" }, weightPct: 26 },
      { name: { pt: "Operações e suporte de dados", en: "Data Operations and Support" }, weightPct: 22 },
      { name: { pt: "Segurança e governança de dados", en: "Data Security and Governance" }, weightPct: 18 }
    ],
    highlightedServices: [
      { name: "Amazon Kinesis Data Streams", slug: "amazon-kinesis-data-streams" },
      { name: "Amazon OpenSearch Service", slug: "amazon-opensearch-service" },
      { name: "Amazon DynamoDB", slug: "amazon-dynamodb" }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-data-engineer-associate/" }
    ]
  },
  {
    slug: "machine-learning-engineer-associate",
    code: "MLA-C01",
    name: { pt: "AWS Certified Machine Learning Engineer – Associate", en: "AWS Certified Machine Learning Engineer – Associate" },
    level: "associate",
    durationMin: 130,
    questions: 65,
    passingScore: 720,
    costUsd: 150,
    overview: {
      pt: "Valida a construção, implantação e operação de soluções de ML na AWS: preparação de dados, desenvolvimento de modelo, orquestração e monitoramento.",
      en: "Validates building, deploying, and operating ML solutions on AWS: data preparation, model development, orchestration, and monitoring."
    },
    whoFor: {
      pt: "Engenheiros de ML que colocam modelos em produção na AWS.",
      en: "ML engineers who take models to production on AWS."
    },
    domains: [
      { name: { pt: "Preparação de dados para ML", en: "Data Preparation for ML" }, weightPct: 28 },
      { name: { pt: "Desenvolvimento de modelos de ML", en: "ML Model Development" }, weightPct: 26 },
      { name: { pt: "Implantação e orquestração de workflows de ML", en: "Deployment and Orchestration of ML Workflows" }, weightPct: 22 },
      { name: { pt: "Monitoramento, manutenção e segurança de soluções de ML", en: "ML Solution Monitoring, Maintenance, and Security" }, weightPct: 24 }
    ],
    highlightedServices: [{ name: "Amazon SageMaker" }, { name: "Amazon Bedrock" }],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/" }
    ]
  },
  {
    slug: "solutions-architect-professional",
    code: "SAP-C02",
    name: { pt: "AWS Certified Solutions Architect – Professional", en: "AWS Certified Solutions Architect – Professional" },
    level: "professional",
    durationMin: 180,
    questions: 75,
    passingScore: 750,
    costUsd: 300,
    overview: {
      pt: "Valida arquitetura avançada em cenários de complexidade organizacional, novas soluções, melhoria contínua e migração/modernização em escala.",
      en: "Validates advanced architecture across organizational complexity, new solutions, continuous improvement, and migration/modernization at scale."
    },
    whoFor: {
      pt: "Arquitetos de soluções experientes que desenham ambientes multi-conta e complexos.",
      en: "Experienced solutions architects designing complex, multi-account environments."
    },
    domains: [
      { name: { pt: "Soluções para complexidade organizacional", en: "Design Solutions for Organizational Complexity" }, weightPct: 26 },
      { name: { pt: "Projeto de novas soluções", en: "Design for New Solutions" }, weightPct: 29 },
      { name: { pt: "Melhoria contínua de soluções existentes", en: "Continuous Improvement for Existing Solutions" }, weightPct: 25 },
      { name: { pt: "Acelerar migração e modernização de workloads", en: "Accelerate Workload Migration and Modernization" }, weightPct: 20 }
    ],
    highlightedServices: [
      { name: "AWS DMS", slug: "aws-dms" },
      { name: "AWS Step Functions", slug: "aws-step-functions" }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/" }
    ]
  },
  {
    slug: "devops-engineer-professional",
    code: "DOP-C02",
    name: { pt: "AWS Certified DevOps Engineer – Professional", en: "AWS Certified DevOps Engineer – Professional" },
    level: "professional",
    durationMin: 180,
    questions: 75,
    passingScore: 750,
    costUsd: 300,
    overview: {
      pt: "Valida a implementação de práticas de DevOps na AWS: automação de SDLC, infraestrutura como código, resiliência, monitoramento e resposta a incidentes.",
      en: "Validates implementing DevOps practices on AWS: SDLC automation, infrastructure as code, resilience, monitoring, and incident response."
    },
    whoFor: {
      pt: "Engenheiros de DevOps/SRE que automatizam entrega e operação na AWS.",
      en: "DevOps/SRE engineers who automate delivery and operations on AWS."
    },
    domains: [
      { name: { pt: "Automação de SDLC", en: "SDLC Automation" }, weightPct: 22 },
      { name: { pt: "Gestão de configuração e IaC", en: "Configuration Management and IaC" }, weightPct: 17 },
      { name: { pt: "Soluções resilientes em nuvem", en: "Resilient Cloud Solutions" }, weightPct: 15 },
      { name: { pt: "Monitoramento e logging", en: "Monitoring and Logging" }, weightPct: 15 },
      { name: { pt: "Resposta a incidentes e eventos", en: "Incident and Event Response" }, weightPct: 14 },
      { name: { pt: "Segurança e conformidade", en: "Security and Compliance" }, weightPct: 17 }
    ],
    highlightedServices: [
      { name: "Amazon CloudWatch", slug: "amazon-cloudwatch" },
      { name: "Amazon ECS", slug: "amazon-ecs" },
      { name: "AWS Lambda", slug: "aws-lambda" }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/" }
    ]
  },
  {
    slug: "generative-ai-developer-professional",
    code: "AIP-C01",
    name: {
      pt: "AWS Certified Generative AI Developer – Professional",
      en: "AWS Certified Generative AI Developer – Professional"
    },
    level: "professional",
    durationMin: 180,
    questions: 65,
    passingScore: 750,
    costUsd: 300,
    overview: {
      pt: "Valida a construção de aplicações de IA generativa em produção na AWS: integração de foundation models, RAG e Knowledge Bases, agentes, segurança/governança, otimização e testes.",
      en: "Validates building production generative AI applications on AWS: foundation model integration, RAG and Knowledge Bases, agents, security/governance, optimization, and testing."
    },
    whoFor: {
      pt: "Desenvolvedores que constroem soluções de IA generativa com Amazon Bedrock em escala.",
      en: "Developers building generative AI solutions with Amazon Bedrock at scale."
    },
    domains: [
      {
        name: { pt: "Integração de FM, gestão de dados e conformidade", en: "Foundation Model Integration, Data Management, and Compliance" },
        weightPct: 31,
        summary: {
          pt: "Formas de inferência no Bedrock, seleção de modelo, RAG com Knowledge Bases e governança de prompts.",
          en: "Bedrock inference options, model selection, RAG with Knowledge Bases, and prompt governance."
        },
        keyTopics: [
          { pt: "Chamada direta de FM, Converse API, prompt versionado, Knowledge Base e agentes.", en: "Direct FM invocation, Converse API, versioned prompts, Knowledge Bases, and agents." },
          { pt: "Seleção de modelo: modalidade, latência, custo, contexto, tool use, streaming e guardrails.", en: "Model selection: modality, latency, cost, context, tool use, streaming, and guardrails." },
          { pt: "RAG: fonte, chunking, embeddings, vector store, metadados, reranking e citações.", en: "RAG: source, chunking, embeddings, vector store, metadata, reranking, and citations." }
        ],
        services: ["Amazon Bedrock", "Bedrock Knowledge Bases", "Bedrock Prompt Management"]
      },
      {
        name: { pt: "Implementação e integração", en: "Implementation and Integration" },
        weightPct: 26,
        summary: {
          pt: "Bedrock Agents, AgentCore, action groups e integração com sistemas externos.",
          en: "Bedrock Agents, AgentCore, action groups, and integration with external systems."
        },
        keyTopics: [
          { pt: "Agents, action groups e orquestração de ferramentas.", en: "Agents, action groups, and tool orchestration." },
          { pt: "Amazon Bedrock AgentCore para agentes em produção.", en: "Amazon Bedrock AgentCore for production agents." }
        ],
        services: ["Bedrock Agents", "Bedrock AgentCore"]
      },
      {
        name: { pt: "Segurança, proteção e governança de IA", en: "AI Safety, Security, and Governance" },
        weightPct: 20,
        summary: {
          pt: "Guardrails, proteção de dados, controle de acesso e conformidade em soluções de GenAI.",
          en: "Guardrails, data protection, access control, and compliance for GenAI solutions."
        },
        keyTopics: [
          { pt: "Bedrock Guardrails: filtros de conteúdo, tópicos negados e PII.", en: "Bedrock Guardrails: content filters, denied topics, and PII." }
        ],
        services: ["Bedrock Guardrails", "AWS KMS", "IAM"]
      },
      {
        name: { pt: "Eficiência operacional e otimização", en: "Operational Efficiency and Optimization" },
        weightPct: 12,
        summary: {
          pt: "Custo, latência e desempenho: prompt caching, escolha de modelo e monitoramento.",
          en: "Cost, latency, and performance: prompt caching, model choice, and monitoring."
        }
      },
      {
        name: { pt: "Testes, validação e troubleshooting", en: "Testing, Validation, and Troubleshooting" },
        weightPct: 11,
        summary: {
          pt: "Avaliação de qualidade de respostas, testes de RAG/agentes e diagnóstico de problemas.",
          en: "Response quality evaluation, RAG/agent testing, and problem diagnosis."
        }
      }
    ],
    highlightedServices: [{ name: "Amazon Bedrock" }, { name: "Amazon OpenSearch Service", slug: "amazon-opensearch-service" }, { name: "AWS Lambda", slug: "aws-lambda" }],
    studyOrder: [
      { pt: "Domine o Domínio 1 (31%): inferência no Bedrock, RAG e Knowledge Bases.", en: "Master Domain 1 (31%): Bedrock inference, RAG, and Knowledge Bases." },
      { pt: "Avance para Implementação (26%): Agents, action groups e AgentCore.", en: "Move to Implementation (26%): Agents, action groups, and AgentCore." },
      { pt: "Estude Segurança e governança (20%): Guardrails e proteção de dados.", en: "Study Security and Governance (20%): Guardrails and data protection." },
      { pt: "Feche com Otimização (12%) e Testes/Troubleshooting (11%).", en: "Finish with Optimization (12%) and Testing/Troubleshooting (11%)." }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-generative-ai-developer-professional/" },
      { title: "Guia oficial do exame (AIP-C01)", url: "https://docs.aws.amazon.com/aws-certification/latest/ai-professional-01/ai-professional-01.html" }
    ]
  },
  {
    slug: "advanced-networking-specialty",
    code: "ANS-C01",
    name: { pt: "AWS Certified Advanced Networking – Specialty", en: "AWS Certified Advanced Networking – Specialty" },
    level: "specialty",
    durationMin: 170,
    questions: 65,
    passingScore: 750,
    costUsd: 300,
    overview: {
      pt: "Valida design, implementação e operação de arquiteturas de rede complexas na AWS e híbridas.",
      en: "Validates design, implementation, and operation of complex AWS and hybrid networking architectures."
    },
    whoFor: {
      pt: "Profissionais de rede que trabalham com conectividade em escala na AWS.",
      en: "Networking professionals working with connectivity at scale on AWS."
    },
    domains: [
      { name: { pt: "Design de rede", en: "Network Design" }, weightPct: 30 },
      { name: { pt: "Implementação de rede", en: "Network Implementation" }, weightPct: 26 },
      { name: { pt: "Gestão e operação de rede", en: "Network Management and Operation" }, weightPct: 20 },
      { name: { pt: "Segurança, conformidade e governança de rede", en: "Network Security, Compliance, and Governance" }, weightPct: 24 }
    ],
    highlightedServices: [
      { name: "Amazon CloudFront", slug: "amazon-cloudfront" },
      { name: "AWS WAF", slug: "aws-waf" }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/" }
    ]
  },
  {
    slug: "machine-learning-specialty",
    code: "MLS-C01",
    name: { pt: "AWS Certified Machine Learning – Specialty", en: "AWS Certified Machine Learning – Specialty" },
    level: "specialty",
    durationMin: 180,
    questions: 65,
    passingScore: 750,
    costUsd: 300,
    overview: {
      pt: "Valida a construção, treino, tuning e implantação de modelos de ML na AWS, com forte ênfase em modelagem.",
      en: "Validates building, training, tuning, and deploying ML models on AWS, with strong emphasis on modeling."
    },
    whoFor: {
      pt: "Cientistas de dados e engenheiros de ML com experiência prática.",
      en: "Data scientists and ML engineers with hands-on experience."
    },
    domains: [
      { name: { pt: "Engenharia de dados", en: "Data Engineering" }, weightPct: 20 },
      { name: { pt: "Análise exploratória de dados", en: "Exploratory Data Analysis" }, weightPct: 24 },
      { name: { pt: "Modelagem", en: "Modeling" }, weightPct: 36 },
      { name: { pt: "Implementação e operações de ML", en: "ML Implementation and Operations" }, weightPct: 20 }
    ],
    highlightedServices: [{ name: "Amazon SageMaker" }, { name: "Amazon Kinesis Data Streams", slug: "amazon-kinesis-data-streams" }],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/" }
    ]
  },
  {
    slug: "security-specialty",
    code: "SCS-C02",
    name: { pt: "AWS Certified Security – Specialty", en: "AWS Certified Security – Specialty" },
    level: "specialty",
    durationMin: 170,
    questions: 65,
    passingScore: 750,
    costUsd: 300,
    overview: {
      pt: "Valida segurança avançada na AWS: detecção de ameaças, logging, segurança de infraestrutura, IAM, proteção de dados e governança.",
      en: "Validates advanced security on AWS: threat detection, logging, infrastructure security, IAM, data protection, and governance."
    },
    whoFor: {
      pt: "Profissionais de segurança responsáveis por proteger workloads na AWS.",
      en: "Security professionals responsible for protecting AWS workloads."
    },
    domains: [
      { name: { pt: "Detecção de ameaças e resposta a incidentes", en: "Threat Detection and Incident Response" }, weightPct: 14 },
      { name: { pt: "Logging e monitoramento de segurança", en: "Security Logging and Monitoring" }, weightPct: 18 },
      { name: { pt: "Segurança de infraestrutura", en: "Infrastructure Security" }, weightPct: 20 },
      { name: { pt: "Gestão de identidade e acesso", en: "Identity and Access Management" }, weightPct: 16 },
      { name: { pt: "Proteção de dados", en: "Data Protection" }, weightPct: 18 },
      { name: { pt: "Gestão e governança de segurança", en: "Management and Security Governance" }, weightPct: 14 }
    ],
    highlightedServices: [
      { name: "AWS WAF", slug: "aws-waf" },
      { name: "Amazon Cognito", slug: "amazon-cognito" }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-security-specialty/" }
    ]
  }
];

const bySlug = new Map<string, CertDefinition>(certifications.map((cert) => [cert.slug, cert]));

export interface CertDomainEntry {
  name: string;
  weightPct: number;
  summary: string | null;
  keyTopics: string[];
  services: string[];
}

export interface CertEntry {
  slug: string;
  code: string;
  name: string;
  level: CertLevel;
  levelLabel: string;
  durationMin: number;
  questions: number;
  passingScore: number;
  costUsd: number;
  overview: string;
  whoFor: string;
  domains: CertDomainEntry[];
  highlightedServices: HighlightedService[];
  studyOrder: string[];
  resources: Resource[];
}

function toEntry(cert: CertDefinition, lang: Language): CertEntry {
  return {
    slug: cert.slug,
    code: cert.code,
    name: cert.name[lang],
    level: cert.level,
    levelLabel: levelLabels[lang][cert.level],
    durationMin: cert.durationMin,
    questions: cert.questions,
    passingScore: cert.passingScore,
    costUsd: cert.costUsd,
    overview: cert.overview[lang],
    whoFor: cert.whoFor[lang],
    domains: cert.domains.map((domain) => ({
      name: domain.name[lang],
      weightPct: domain.weightPct,
      summary: domain.summary ? domain.summary[lang] : null,
      keyTopics: (domain.keyTopics ?? []).map((topic) => topic[lang]),
      services: domain.services ?? []
    })),
    highlightedServices: cert.highlightedServices,
    studyOrder: (cert.studyOrder ?? []).map((item) => item[lang]),
    resources: cert.resources
  };
}

export function getAllCertifications(lang: Language): CertEntry[] {
  return certifications.map((cert) => toEntry(cert, lang));
}

export function getCertificationsByLevel(lang: Language, level: CertLevel): CertEntry[] {
  return certifications.filter((cert) => cert.level === level).map((cert) => toEntry(cert, lang));
}

export function getCertificationBySlug(lang: Language, slug: string): CertEntry | null {
  const cert = bySlug.get(slug);
  return cert ? toEntry(cert, lang) : null;
}

export function getCertificationSlugs(): string[] {
  return certifications.map((cert) => cert.slug);
}
