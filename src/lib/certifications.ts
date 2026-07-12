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
  keyTopics?: (LocalizedText & { doc?: string })[];
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
  active?: boolean;
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
          { pt: "Modelos de nuvem e os 6 pilares do Well-Architected.", en: "Cloud models and the 6 Well-Architected pillars.", doc: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html" },
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
          { pt: "Responsabilidade compartilhada: o que é do cliente vs da AWS.", en: "Shared responsibility: what is the customer's vs AWS's.", doc: "https://aws.amazon.com/compliance/shared-responsibility-model/" },
          { pt: "IAM: usuários, grupos, roles, políticas e MFA.", en: "IAM: users, groups, roles, policies, and MFA.", doc: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html" },
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
          { pt: "Regiões, Zonas de Disponibilidade e edge locations.", en: "Regions, Availability Zones, and edge locations.", doc: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/" },
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
          { pt: "Modelos de preço: On-Demand, Reserved, Spot e Savings Plans.", en: "Pricing models: On-Demand, Reserved, Spot, and Savings Plans.", doc: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html" },
          { pt: "Cost Explorer, Budgets, Billing e a AWS Pricing Calculator.", en: "Cost Explorer, Budgets, Billing, and the AWS Pricing Calculator." },
          { pt: "Planos de suporte e o AWS Trusted Advisor.", en: "Support plans and AWS Trusted Advisor.", doc: "https://aws.amazon.com/premiumsupport/plans/" }
        ],
        services: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Trusted Advisor"]
      }
    ],
    highlightedServices: [
      { name: "Amazon S3", slug: "amazon-s3" },
      { name: "Amazon EC2", slug: "amazon-ec2" },
      { name: "AWS Lambda", slug: "aws-lambda" },
      { name: "AWS IAM", slug: "aws-iam" },
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
      {
        name: { pt: "Fundamentos de IA e ML", en: "Fundamentals of AI and ML" },
        weightPct: 20,
        summary: {
          pt: "Conceitos básicos de IA, ML e deep learning, tipos de aprendizado e casos de uso.",
          en: "Basics of AI, ML, and deep learning, learning types, and use cases."
        },
        keyTopics: [
          { pt: "Diferença entre IA, ML e deep learning.", en: "Difference between AI, ML, and deep learning." },
          { pt: "Aprendizado supervisionado, não supervisionado e por reforço.", en: "Supervised, unsupervised, and reinforcement learning." },
          { pt: "Quando usar (e não usar) IA/ML em um problema.", en: "When to use (and not use) AI/ML for a problem." }
        ],
        services: ["Amazon SageMaker"]
      },
      {
        name: { pt: "Fundamentos de IA generativa", en: "Fundamentals of Generative AI" },
        weightPct: 24,
        summary: {
          pt: "Conceitos de GenAI: foundation models, prompts, tokens, embeddings e limitações.",
          en: "GenAI concepts: foundation models, prompts, tokens, embeddings, and limitations."
        },
        keyTopics: [
          { pt: "Foundation models, LLMs, tokens e janelas de contexto.", en: "Foundation models, LLMs, tokens, and context windows.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html" },
          { pt: "Prompt engineering e seus padrões básicos.", en: "Prompt engineering and its basic patterns." },
          { pt: "Limitações: alucinação, viés e dados de treino.", en: "Limitations: hallucination, bias, and training data." }
        ],
        services: ["Amazon Bedrock", "Amazon Q"]
      },
      {
        name: { pt: "Aplicações de foundation models", en: "Applications of Foundation Models" },
        weightPct: 28,
        summary: {
          pt: "Construir aplicações com FMs: seleção de modelo, RAG, fine-tuning e agentes.",
          en: "Building applications with FMs: model selection, RAG, fine-tuning, and agents."
        },
        keyTopics: [
          { pt: "Critérios de seleção de modelo (custo, latência, modalidade).", en: "Model selection criteria (cost, latency, modality)." },
          { pt: "RAG e Knowledge Bases vs fine-tuning.", en: "RAG and Knowledge Bases vs fine-tuning.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html" },
          { pt: "Agentes e integração com dados corporativos.", en: "Agents and integration with business data." }
        ],
        services: ["Amazon Bedrock", "Amazon SageMaker"]
      },
      {
        name: { pt: "Diretrizes de IA responsável", en: "Guidelines for Responsible AI" },
        weightPct: 14,
        summary: {
          pt: "Sistemas de IA justos, transparentes e seguros: viés, explicabilidade e guardrails.",
          en: "Fair, transparent, and safe AI systems: bias, explainability, and guardrails."
        },
        keyTopics: [
          { pt: "Detecção de viés e fairness em modelos.", en: "Bias detection and model fairness." },
          { pt: "Guardrails e filtragem de conteúdo.", en: "Guardrails and content filtering.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html" },
          { pt: "Avaliação de modelos: transparência e model evaluation.", en: "Model evaluation and transparency practices.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html" }
        ],
        services: ["Amazon Bedrock"]
      },
      {
        name: { pt: "Segurança, conformidade e governança de IA", en: "Security, Compliance, and Governance for AI" },
        weightPct: 14,
        summary: {
          pt: "Proteger dados e workloads de IA: acesso, criptografia e conformidade.",
          en: "Securing AI data and workloads: access, encryption, and compliance."
        },
        keyTopics: [
          { pt: "IAM e controle de acesso a modelos e dados.", en: "IAM and access control for models and data." },
          { pt: "Privacidade de dados e requisitos regulatórios.", en: "Data privacy and regulatory requirements." },
          { pt: "Auditoria de uso de IA com CloudTrail e isolamento por conta.", en: "Auditing AI usage with CloudTrail and per-account isolation." }
        ],
        services: ["IAM", "AWS KMS"]
      }
    ],
    highlightedServices: [
      { name: "Amazon Bedrock", slug: "amazon-bedrock" },
      { name: "Amazon SageMaker", slug: "amazon-sagemaker" },
      { name: "Amazon Q" }
    ],
    studyOrder: [
      { pt: "Comece pelos fundamentos de IA/ML (20%) para fixar o vocabulário.", en: "Start with AI/ML fundamentals (20%) to lock the vocabulary." },
      { pt: "Avance para GenAI (24%) e o maior domínio, aplicações de FMs (28%).", en: "Move to GenAI (24%) and the largest domain, FM applications (28%)." },
      { pt: "Feche com IA responsável (14%) e segurança/governança (14%).", en: "Finish with responsible AI (14%) and security/governance (14%)." }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" },
      { title: "Guia oficial do exame (AIF-C01)", url: "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner/ai-practitioner.html" }
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
      {
        name: { pt: "Projetar arquiteturas seguras", en: "Design Secure Architectures" },
        weightPct: 30,
        summary: {
          pt: "Acesso seguro a recursos, workloads e apps; controles de segurança de dados apropriados.",
          en: "Secure access to resources, workloads, and apps; appropriate data security controls."
        },
        keyTopics: [
          { pt: "IAM, roles, federação e políticas de mínimo privilégio.", en: "IAM, roles, federation, and least-privilege policies.", doc: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html" },
          { pt: "Segurança de rede: VPC, security groups, NACLs, WAF.", en: "Network security: VPC, security groups, NACLs, WAF.", doc: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html" },
          { pt: "Criptografia em repouso e em trânsito com KMS.", en: "Encryption at rest and in transit with KMS.", doc: "https://docs.aws.amazon.com/kms/latest/developerguide/overview.html" }
        ],
        services: ["IAM", "Amazon VPC", "AWS KMS", "AWS WAF"]
      },
      {
        name: { pt: "Projetar arquiteturas resilientes", en: "Design Resilient Architectures" },
        weightPct: 26,
        summary: {
          pt: "Arquiteturas escaláveis e desacopladas, altamente disponíveis e tolerantes a falhas.",
          en: "Scalable, loosely coupled architectures that are highly available and fault tolerant."
        },
        keyTopics: [
          { pt: "Multi-AZ, multi-região e failover com Route 53.", en: "Multi-AZ, multi-region, and failover with Route 53.", doc: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html" },
          { pt: "Desacoplamento com SQS, SNS e EventBridge.", en: "Decoupling with SQS, SNS, and EventBridge.", doc: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html" },
          { pt: "Auto Scaling e balanceamento de carga.", en: "Auto Scaling and load balancing.", doc: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html" }
        ],
        services: ["Amazon Route 53", "Amazon SQS", "Amazon SNS"]
      },
      {
        name: { pt: "Projetar arquiteturas de alto desempenho", en: "Design High-Performing Architectures" },
        weightPct: 24,
        summary: {
          pt: "Soluções de compute, storage, banco e rede escaláveis e de alto desempenho.",
          en: "Scalable, high-performing compute, storage, database, and network solutions."
        },
        keyTopics: [
          { pt: "Escolher compute (EC2, Lambda, containers) por carga.", en: "Choose compute (EC2, Lambda, containers) per workload." },
          { pt: "Caching com CloudFront e ElastiCache.", en: "Caching with CloudFront and ElastiCache.", doc: "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Strategies.html" },
          { pt: "Selecionar banco certo (RDS, Aurora, DynamoDB).", en: "Select the right database (RDS, Aurora, DynamoDB)." }
        ],
        services: ["Amazon CloudFront", "Amazon ElastiCache", "Amazon DynamoDB"]
      },
      {
        name: { pt: "Projetar arquiteturas com custo otimizado", en: "Design Cost-Optimized Architectures" },
        weightPct: 20,
        summary: {
          pt: "Soluções de custo otimizado em compute, storage, banco e rede.",
          en: "Cost-optimized compute, storage, database, and network solutions."
        },
        keyTopics: [
          { pt: "Modelos de preço: On-Demand, Reserved, Savings Plans, Spot.", en: "Pricing models: On-Demand, Reserved, Savings Plans, Spot." },
          { pt: "Classes de storage do S3 e lifecycle.", en: "S3 storage classes and lifecycle.", doc: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html" },
          { pt: "Ferramentas de custo: Cost Explorer e Budgets.", en: "Cost tools: Cost Explorer and Budgets." }
        ],
        services: ["Amazon S3", "Amazon EC2"]
      }
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
      {
        name: { pt: "Desenvolvimento com serviços AWS", en: "Development with AWS Services" },
        weightPct: 32,
        summary: {
          pt: "Escrever código para apps serverless e orientadas a evento usando SDKs e APIs.",
          en: "Write code for serverless and event-driven apps using SDKs and APIs."
        },
        keyTopics: [
          { pt: "Lambda, API Gateway e integração com DynamoDB.", en: "Lambda, API Gateway, and DynamoDB integration." },
          { pt: "Mensageria e orquestração: SQS, SNS, Step Functions.", en: "Messaging and orchestration: SQS, SNS, Step Functions." },
          { pt: "Idempotência, retries e tratamento de erros.", en: "Idempotency, retries, and error handling." }
        ],
        services: ["AWS Lambda", "Amazon API Gateway", "Amazon DynamoDB"]
      },
      {
        name: { pt: "Segurança", en: "Security" },
        weightPct: 26,
        summary: {
          pt: "Autenticação, autorização e criptografia em componentes de aplicação.",
          en: "Authentication, authorization, and encryption across application components."
        },
        keyTopics: [
          { pt: "Cognito para autenticação de usuários e tokens.", en: "Cognito for user authentication and tokens.", doc: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html" },
          { pt: "Roles do IAM para acesso de serviços.", en: "IAM roles for service access." },
          { pt: "Secrets Manager e KMS para segredos e chaves.", en: "Secrets Manager and KMS for secrets and keys.", doc: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html" }
        ],
        services: ["Amazon Cognito", "IAM", "AWS KMS"]
      },
      {
        name: { pt: "Implantação", en: "Deployment" },
        weightPct: 24,
        summary: {
          pt: "Preparar, testar e implantar código com CI/CD e infraestrutura como código.",
          en: "Prepare, test, and deploy code with CI/CD and infrastructure as code."
        },
        keyTopics: [
          { pt: "Pipelines de CI/CD e estratégias de deploy.", en: "CI/CD pipelines and deployment strategies." },
          { pt: "SAM/CloudFormation para empacotar apps serverless.", en: "SAM/CloudFormation to package serverless apps." },
          { pt: "Versionamento e aliases de Lambda.", en: "Lambda versioning and aliases.", doc: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html" }
        ],
        services: ["AWS CloudFormation", "AWS Lambda"]
      },
      {
        name: { pt: "Troubleshooting e otimização", en: "Troubleshooting and Optimization" },
        weightPct: 18,
        summary: {
          pt: "Diagnosticar e otimizar aplicações com observabilidade e boas práticas.",
          en: "Diagnose and optimize applications with observability and best practices."
        },
        keyTopics: [
          { pt: "Logs, métricas e tracing (CloudWatch, X-Ray).", en: "Logs, metrics, and tracing (CloudWatch, X-Ray).", doc: "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html" },
          { pt: "Otimização de custo e performance de código.", en: "Cost and code performance optimization." },
          { pt: "Depurar APIs: códigos de erro, throttling e DLQs.", en: "Debugging APIs: error codes, throttling, and DLQs." }
        ],
        services: ["Amazon CloudWatch"]
      }
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
    slug: "cloudops-engineer-associate",
    code: "SOA-C03",
    name: { pt: "AWS Certified CloudOps Engineer – Associate", en: "AWS Certified CloudOps Engineer – Associate" },
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
      pt: "Engenheiros de CloudOps, suporte e operações responsáveis por implantar, gerenciar e operar workloads na AWS.",
      en: "CloudOps, support, and operations engineers responsible for deploying, managing, and operating AWS workloads."
    },
    domains: [
      {
        name: { pt: "Monitoramento, logging, análise, remediação e performance", en: "Monitoring, Logging, Analysis, Remediation, and Performance Optimization" },
        weightPct: 22,
        summary: {
          pt: "Coletar métricas e logs, criar alarmes e remediar problemas automaticamente.",
          en: "Collect metrics and logs, create alarms, and remediate issues automatically."
        },
        keyTopics: [
          { pt: "CloudWatch: métricas, logs, alarmes e dashboards.", en: "CloudWatch: metrics, logs, alarms, and dashboards.", doc: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html" },
          { pt: "Remediação automática com EventBridge e SSM.", en: "Automated remediation with EventBridge and SSM." },
          { pt: "Agente do CloudWatch para métricas e logs customizados.", en: "The CloudWatch agent for custom metrics and logs.", doc: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html" }
        ],
        services: ["Amazon CloudWatch", "Amazon EventBridge"]
      },
      {
        name: { pt: "Confiabilidade e continuidade de negócio", en: "Reliability and Business Continuity" },
        weightPct: 22,
        summary: {
          pt: "Alta disponibilidade, escala, backups e recuperação de desastres.",
          en: "High availability, scaling, backups, and disaster recovery."
        },
        keyTopics: [
          { pt: "Multi-AZ, Auto Scaling e balanceamento.", en: "Multi-AZ, Auto Scaling, and load balancing." },
          { pt: "Backups, snapshots e estratégias de DR.", en: "Backups, snapshots, and DR strategies." },
          { pt: "RTO/RPO e a escolha da estratégia de recuperação.", en: "RTO/RPO and choosing the recovery strategy." }
        ],
        services: ["Amazon EC2", "Amazon EBS", "Amazon Route 53"]
      },
      {
        name: { pt: "Implantação, provisionamento e automação", en: "Deployment, Provisioning, and Automation" },
        weightPct: 22,
        summary: {
          pt: "Provisionar e automatizar recursos com infraestrutura como código.",
          en: "Provision and automate resources with infrastructure as code."
        },
        keyTopics: [
          { pt: "CloudFormation e Systems Manager.", en: "CloudFormation and Systems Manager.", doc: "https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html" },
          { pt: "Automação de tarefas operacionais.", en: "Automation of operational tasks." },
          { pt: "Patching de frotas com janelas de manutenção.", en: "Fleet patching with maintenance windows." }
        ],
        services: ["AWS CloudFormation"]
      },
      {
        name: { pt: "Segurança e conformidade", en: "Security and Compliance" },
        weightPct: 16,
        summary: {
          pt: "Controle de acesso, proteção de dados e conformidade operacional.",
          en: "Access control, data protection, and operational compliance."
        },
        keyTopics: [
          { pt: "IAM, políticas e MFA.", en: "IAM, policies, and MFA." },
          { pt: "Criptografia com KMS e auditoria com CloudTrail.", en: "Encryption with KMS and auditing with CloudTrail.", doc: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html" },
          { pt: "Acesso a instâncias via Session Manager, sem SSH.", en: "Instance access via Session Manager, no SSH.", doc: "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html" }
        ],
        services: ["IAM", "AWS KMS"]
      },
      {
        name: { pt: "Rede e entrega de conteúdo", en: "Networking and Content Delivery" },
        weightPct: 18,
        summary: {
          pt: "Configurar e resolver problemas de rede, DNS e entrega de conteúdo.",
          en: "Configure and troubleshoot networking, DNS, and content delivery."
        },
        keyTopics: [
          { pt: "VPC, security groups e conectividade.", en: "VPC, security groups, and connectivity." },
          { pt: "Route 53 e CloudFront.", en: "Route 53 and CloudFront." },
          { pt: "Resolução de DNS na VPC com Route 53 Resolver.", en: "VPC DNS resolution with Route 53 Resolver.", doc: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html" }
        ],
        services: ["Amazon VPC", "Amazon Route 53", "Amazon CloudFront"]
      },
    ],
    highlightedServices: [
      { name: "Amazon CloudWatch", slug: "amazon-cloudwatch" },
      { name: "Amazon RDS", slug: "amazon-rds" },
      { name: "Amazon CloudFront", slug: "amazon-cloudfront" }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-cloudops-engineer-associate/" },
      { title: "Guia oficial do exame (SOA-C03)", url: "https://docs.aws.amazon.com/aws-certification/latest/sysops-administrator-associate-03.html" }
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
      {
        name: { pt: "Ingestão e transformação de dados", en: "Data Ingestion and Transformation" },
        weightPct: 34,
        summary: {
          pt: "Ingerir dados em batch e streaming e transformá-los para consumo analítico.",
          en: "Ingest batch and streaming data and transform it for analytical consumption."
        },
        keyTopics: [
          { pt: "Streaming com Kinesis; batch com Glue.", en: "Streaming with Kinesis; batch with Glue.", doc: "https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html" },
          { pt: "Pipelines ETL/ELT e orquestração.", en: "ETL/ELT pipelines and orchestration." },
          { pt: "Formatos colunares e particionamento.", en: "Columnar formats and partitioning." }
        ],
        services: ["Amazon Kinesis Data Streams", "AWS Glue", "Amazon S3"]
      },
      {
        name: { pt: "Gestão de armazenamento de dados", en: "Data Store Management" },
        weightPct: 26,
        summary: {
          pt: "Escolher e gerenciar data stores adequados (data lake, warehouse, NoSQL).",
          en: "Choose and manage appropriate data stores (data lake, warehouse, NoSQL)."
        },
        keyTopics: [
          { pt: "Data lake no S3 e catálogo com Glue.", en: "S3 data lake and Glue catalog." },
          { pt: "Modelagem para DynamoDB e Redshift.", en: "Modeling for DynamoDB and Redshift." },
          { pt: "Classes de storage e particionamento no S3 para custo e consulta.", en: "S3 storage classes and partitioning for cost and querying.", doc: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html" }
        ],
        services: ["Amazon S3", "Amazon DynamoDB", "AWS Glue"]
      },
      {
        name: { pt: "Operações e suporte de dados", en: "Data Operations and Support" },
        weightPct: 22,
        summary: {
          pt: "Automatizar, monitorar e manter pipelines e garantir qualidade de dados.",
          en: "Automate, monitor, and maintain pipelines and ensure data quality."
        },
        keyTopics: [
          { pt: "Monitoramento e alarmes com CloudWatch.", en: "Monitoring and alarms with CloudWatch." },
          { pt: "Consultas ad hoc com Athena.", en: "Ad hoc queries with Athena.", doc: "https://docs.aws.amazon.com/athena/latest/ug/what-is.html" },
          { pt: "Qualidade de dados nos pipelines (validação e reprocessamento).", en: "Data quality in pipelines (validation and reprocessing)." }
        ],
        services: ["Amazon CloudWatch", "Amazon Athena"]
      },
      {
        name: { pt: "Segurança e governança de dados", en: "Data Security and Governance" },
        weightPct: 18,
        summary: {
          pt: "Aplicar controle de acesso, criptografia, privacidade e linhagem de dados.",
          en: "Apply access control, encryption, privacy, and data lineage."
        },
        keyTopics: [
          { pt: "Criptografia com KMS e políticas de acesso.", en: "Encryption with KMS and access policies." },
          { pt: "Governança e catálogo (Lake Formation).", en: "Governance and catalog (Lake Formation).", doc: "https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html" },
          { pt: "Controle de acesso fino e mascaramento por coluna.", en: "Fine-grained access control and column masking." }
        ],
        services: ["AWS KMS", "IAM"]
      }
    ],
    highlightedServices: [
      { name: "Amazon Kinesis Data Streams", slug: "amazon-kinesis-data-streams" },
      { name: "AWS Glue", slug: "aws-glue" },
      { name: "Amazon Redshift", slug: "amazon-redshift" },
      { name: "Amazon Athena", slug: "amazon-athena" },
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
      {
        name: { pt: "Preparação de dados para ML", en: "Data Preparation for ML" },
        weightPct: 28,
        summary: {
          pt: "Ingerir, transformar e validar dados; feature engineering e qualidade.",
          en: "Ingest, transform, and validate data; feature engineering and quality."
        },
        keyTopics: [
          { pt: "Feature engineering e Feature Store do SageMaker.", en: "Feature engineering and the SageMaker Feature Store.", doc: "https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store.html" },
          { pt: "Formatos e ingestão a partir do S3/Glue.", en: "Formats and ingestion from S3/Glue." },
          { pt: "Qualidade, balanceamento e viés nos dados.", en: "Data quality, balancing, and bias." }
        ],
        services: ["Amazon SageMaker", "Amazon S3", "AWS Glue"]
      },
      {
        name: { pt: "Desenvolvimento de modelos de ML", en: "ML Model Development" },
        weightPct: 26,
        summary: {
          pt: "Treinar, ajustar e avaliar modelos, incluindo uso de modelos prontos.",
          en: "Train, tune, and evaluate models, including using pre-built models."
        },
        keyTopics: [
          { pt: "Treino e hyperparameter tuning no SageMaker.", en: "Training and hyperparameter tuning in SageMaker." },
          { pt: "Métricas de avaliação e overfitting.", en: "Evaluation metrics and overfitting." },
          { pt: "Quando usar Bedrock/modelos prontos vs treinar.", en: "When to use Bedrock/pre-built models vs training." }
        ],
        services: ["Amazon SageMaker", "Amazon Bedrock"]
      },
      {
        name: { pt: "Implantação e orquestração de workflows de ML", en: "Deployment and Orchestration of ML Workflows" },
        weightPct: 22,
        summary: {
          pt: "Servir modelos (real-time, batch, serverless) e automatizar pipelines de ML.",
          en: "Serve models (real-time, batch, serverless) and automate ML pipelines."
        },
        keyTopics: [
          { pt: "Tipos de endpoint e estratégias de deploy do SageMaker.", en: "SageMaker endpoint types and deployment strategies.", doc: "https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html" },
          { pt: "Pipelines de ML e CI/CD para modelos.", en: "ML pipelines and CI/CD for models." },
          { pt: "Inferência serverless e batch transform.", en: "Serverless inference and batch transform.", doc: "https://docs.aws.amazon.com/sagemaker/latest/dg/serverless-endpoints.html" }
        ],
        services: ["Amazon SageMaker", "AWS Step Functions", "AWS CodePipeline"]
      },
      {
        name: { pt: "Monitoramento, manutenção e segurança de soluções de ML", en: "ML Solution Monitoring, Maintenance, and Security" },
        weightPct: 24,
        summary: {
          pt: "Monitorar drift e performance, controlar custos e proteger a solução.",
          en: "Monitor drift and performance, control costs, and secure the solution."
        },
        keyTopics: [
          { pt: "Model Monitor: drift de dados e de modelo.", en: "Model Monitor: data and model drift.", doc: "https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html" },
          { pt: "IAM, VPC e KMS aplicados a workloads de ML.", en: "IAM, VPC, and KMS applied to ML workloads." },
          { pt: "Custo de treino e inferência; Spot para treinos tolerantes.", en: "Training and inference cost; Spot for tolerant training jobs." }
        ],
        services: ["Amazon SageMaker", "Amazon CloudWatch", "IAM"]
      }
    ],
    highlightedServices: [
      { name: "Amazon SageMaker", slug: "amazon-sagemaker" },
      { name: "Amazon Bedrock", slug: "amazon-bedrock" }
    ],
    studyOrder: [
      { pt: "Domine preparação de dados (28%), o maior domínio.", en: "Master data preparation (28%), the largest domain." },
      { pt: "Siga para desenvolvimento de modelos (26%).", en: "Continue to model development (26%)." },
      { pt: "Feche com monitoramento/segurança (24%) e deploy/orquestração (22%).", en: "Finish with monitoring/security (24%) and deployment/orchestration (22%)." }
    ],
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
      {
        name: { pt: "Soluções para complexidade organizacional", en: "Design Solutions for Organizational Complexity" },
        weightPct: 26,
        summary: {
          pt: "Arquiteturas multi-conta, redes complexas e governança em escala corporativa.",
          en: "Multi-account architectures, complex networking, and enterprise-scale governance."
        },
        keyTopics: [
          { pt: "Organizations, OUs e SCPs para multi-conta.", en: "Organizations, OUs, and SCPs for multi-account.", doc: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html" },
          { pt: "Redes híbridas: Transit Gateway, Direct Connect, VPN.", en: "Hybrid networks: Transit Gateway, Direct Connect, VPN.", doc: "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html" },
          { pt: "Acesso federado e roles entre contas.", en: "Federated access and cross-account roles." }
        ],
        services: ["AWS Organizations", "AWS Transit Gateway", "AWS Direct Connect", "IAM"]
      },
      {
        name: { pt: "Projeto de novas soluções", en: "Design for New Solutions" },
        weightPct: 29,
        summary: {
          pt: "Desenhar soluções novas com segurança, resiliência, performance e custo em RTO/RPO definidos.",
          en: "Design new solutions with security, resilience, performance, and cost against defined RTO/RPO."
        },
        keyTopics: [
          { pt: "Estratégias de DR: backup/restore, pilot light, warm standby, multi-site.", en: "DR strategies: backup/restore, pilot light, warm standby, multi-site.", doc: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html" },
          { pt: "Arquiteturas multi-região com Route 53 e Global Accelerator.", en: "Multi-region architectures with Route 53 and Global Accelerator." },
          { pt: "Escolha de compute, dados e integração por requisito.", en: "Choosing compute, data, and integration per requirement." }
        ],
        services: ["Amazon Route 53", "AWS Global Accelerator", "AWS Backup"]
      },
      {
        name: { pt: "Melhoria contínua de soluções existentes", en: "Continuous Improvement for Existing Solutions" },
        weightPct: 25,
        summary: {
          pt: "Evoluir arquiteturas em produção: excelência operacional, segurança, confiabilidade e custo.",
          en: "Evolve production architectures: operational excellence, security, reliability, and cost."
        },
        keyTopics: [
          { pt: "Identificar gargalos e single points of failure.", en: "Identify bottlenecks and single points of failure." },
          { pt: "Otimização de custo (right-sizing, Savings Plans, S3 tiers).", en: "Cost optimization (right-sizing, Savings Plans, S3 tiers)." },
          { pt: "Observabilidade e automação de resposta.", en: "Observability and automated response." }
        ],
        services: ["Amazon CloudWatch", "AWS Config"]
      },
      {
        name: { pt: "Acelerar migração e modernização de workloads", en: "Accelerate Workload Migration and Modernization" },
        weightPct: 20,
        summary: {
          pt: "Selecionar workloads, definir estratégia de migração (7 Rs) e modernizar em seguida.",
          en: "Select workloads, define the migration strategy (7 Rs), and modernize afterward."
        },
        keyTopics: [
          { pt: "Os 7 Rs: rehost, replatform, refactor, retire…", en: "The 7 Rs: rehost, replatform, refactor, retire…" },
          { pt: "DMS e ferramentas de migração de dados.", en: "DMS and data migration tooling." },
          { pt: "Decompor monólitos (strangler fig) após migrar.", en: "Decompose monoliths (strangler fig) after migrating." }
        ],
        services: ["AWS DMS", "AWS Organizations"]
      }
    ],
    highlightedServices: [
      { name: "AWS Organizations", slug: "aws-organizations" },
      { name: "AWS Transit Gateway", slug: "aws-transit-gateway" },
      { name: "AWS DMS", slug: "aws-dms" },
      { name: "AWS Step Functions", slug: "aws-step-functions" }
    ],
    studyOrder: [
      { pt: "Comece pelo maior domínio: novas soluções (29%), com foco em DR e multi-região.", en: "Start with the largest domain: new solutions (29%), focusing on DR and multi-region." },
      { pt: "Estude complexidade organizacional (26%): Organizations e redes híbridas.", en: "Study organizational complexity (26%): Organizations and hybrid networks." },
      { pt: "Avance por melhoria contínua (25%) e feche com migração (20%).", en: "Move through continuous improvement (25%) and finish with migration (20%)." }
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
      {
        name: { pt: "Automação de SDLC", en: "SDLC Automation" },
        weightPct: 22,
        summary: {
          pt: "Pipelines de CI/CD, testes automatizados e gestão de artefatos.",
          en: "CI/CD pipelines, automated testing, and artifact management."
        },
        keyTopics: [
          { pt: "CodePipeline, CodeBuild e CodeDeploy ponta a ponta.", en: "End-to-end CodePipeline, CodeBuild, and CodeDeploy.", doc: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html" },
          { pt: "Estratégias de deploy: blue/green, canary, rolling.", en: "Deployment strategies: blue/green, canary, rolling.", doc: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html" },
          { pt: "Gates de teste e aprovação no pipeline.", en: "Test and approval gates in the pipeline." }
        ],
        services: ["AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy"]
      },
      {
        name: { pt: "Gestão de configuração e IaC", en: "Configuration Management and IaC" },
        weightPct: 17,
        summary: {
          pt: "Definir e reutilizar infraestrutura como código em múltiplas contas e regiões.",
          en: "Define and reuse infrastructure as code across accounts and regions."
        },
        keyTopics: [
          { pt: "CloudFormation avançado: StackSets, change sets, custom resources.", en: "Advanced CloudFormation: StackSets, change sets, custom resources.", doc: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html" },
          { pt: "Automação de contas com Organizations.", en: "Account automation with Organizations." },
          { pt: "CDK: infraestrutura em linguagem de programação.", en: "CDK: infrastructure in a programming language.", doc: "https://docs.aws.amazon.com/cdk/v2/guide/home.html" }
        ],
        services: ["AWS CloudFormation", "AWS Organizations", "AWS Systems Manager"]
      },
      {
        name: { pt: "Soluções resilientes em nuvem", en: "Resilient Cloud Solutions" },
        weightPct: 15,
        summary: {
          pt: "Alta disponibilidade, escala automática e recuperação para RTO/RPO.",
          en: "High availability, auto scaling, and recovery to meet RTO/RPO."
        },
        keyTopics: [
          { pt: "Multi-AZ vs multi-região e failover automatizado.", en: "Multi-AZ vs multi-region and automated failover." },
          { pt: "Auto Scaling de serviços e dados.", en: "Auto scaling of services and data." },
          { pt: "Testes de resiliência com injeção de falhas (FIS).", en: "Resilience testing with fault injection (FIS)." }
        ],
        services: ["Amazon ECS", "AWS Lambda", "Amazon Route 53"]
      },
      {
        name: { pt: "Monitoramento e logging", en: "Monitoring and Logging" },
        weightPct: 15,
        summary: {
          pt: "Coletar, agregar e analisar logs e métricas em escala.",
          en: "Collect, aggregate, and analyze logs and metrics at scale."
        },
        keyTopics: [
          { pt: "CloudWatch Logs, métricas customizadas e dashboards.", en: "CloudWatch Logs, custom metrics, and dashboards." },
          { pt: "Agregação multi-conta de logs e eventos.", en: "Multi-account log and event aggregation." },
          { pt: "Tracing distribuído com X-Ray entre serviços.", en: "Distributed tracing across services with X-Ray.", doc: "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html" }
        ],
        services: ["Amazon CloudWatch", "Amazon EventBridge"]
      },
      {
        name: { pt: "Resposta a incidentes e eventos", en: "Incident and Event Response" },
        weightPct: 14,
        summary: {
          pt: "Detectar eventos, automatizar resposta e remediar falhas rapidamente.",
          en: "Detect events, automate response, and remediate failures fast."
        },
        keyTopics: [
          { pt: "EventBridge + Lambda/SSM para auto-remediação.", en: "EventBridge + Lambda/SSM for auto-remediation." },
          { pt: "Rollback automático de deploys com alarmes.", en: "Automatic deployment rollback with alarms." },
          { pt: "Runbooks de resposta com SSM Automation.", en: "Response runbooks with SSM Automation.", doc: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html" }
        ],
        services: ["Amazon EventBridge", "AWS Systems Manager"]
      },
      {
        name: { pt: "Segurança e conformidade", en: "Security and Compliance" },
        weightPct: 17,
        summary: {
          pt: "Automatizar segurança: identidade, detecção e conformidade contínua.",
          en: "Automate security: identity, detection, and continuous compliance."
        },
        keyTopics: [
          { pt: "Config rules e remediação automática.", en: "Config rules and automatic remediation.", doc: "https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html" },
          { pt: "GuardDuty e Security Hub integrados ao fluxo DevOps.", en: "GuardDuty and Security Hub in the DevOps flow." },
          { pt: "Escaneamento de artefatos e segredos no pipeline.", en: "Artifact and secret scanning in the pipeline." }
        ],
        services: ["AWS Config", "Amazon GuardDuty", "AWS Security Hub"]
      }
    ],
    highlightedServices: [
      { name: "AWS CodePipeline", slug: "aws-codepipeline" },
      { name: "AWS CloudFormation", slug: "aws-cloudformation" },
      { name: "Amazon CloudWatch", slug: "amazon-cloudwatch" },
      { name: "Amazon ECS", slug: "amazon-ecs" },
      { name: "AWS Lambda", slug: "aws-lambda" }
    ],
    studyOrder: [
      { pt: "Comece por SDLC (22%): domine a família Code* e estratégias de deploy.", en: "Start with SDLC (22%): master the Code* family and deployment strategies." },
      { pt: "Siga com IaC (17%) e segurança/conformidade (17%).", en: "Continue with IaC (17%) and security/compliance (17%)." },
      { pt: "Feche com resiliência (15%), monitoramento (15%) e incidentes (14%).", en: "Finish with resilience (15%), monitoring (15%), and incidents (14%)." }
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
          { pt: "Chamada direta de FM, Converse API, prompt versionado, Knowledge Base e agentes.", en: "Direct FM invocation, Converse API, versioned prompts, Knowledge Bases, and agents.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html" },
          { pt: "Seleção de modelo: modalidade, latência, custo, contexto, tool use, streaming e guardrails.", en: "Model selection: modality, latency, cost, context, tool use, streaming, and guardrails." },
          { pt: "RAG: fonte, chunking, embeddings, vector store, metadados, reranking e citações.", en: "RAG: source, chunking, embeddings, vector store, metadata, reranking, and citations.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-it-works.html" }
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
          { pt: "Agents, action groups e orquestração de ferramentas.", en: "Agents, action groups, and tool orchestration.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html" },
          { pt: "Amazon Bedrock AgentCore para agentes em produção.", en: "Amazon Bedrock AgentCore for production agents.", doc: "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html" }
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
          { pt: "Bedrock Guardrails: filtros de conteúdo, tópicos negados e PII.", en: "Bedrock Guardrails: content filters, denied topics, and PII.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html" }
        ],
        services: ["Bedrock Guardrails", "AWS KMS", "IAM"]
      },
      {
        name: { pt: "Eficiência operacional e otimização", en: "Operational Efficiency and Optimization" },
        weightPct: 12,
        summary: {
          pt: "Custo, latência e desempenho: prompt caching, escolha de modelo e monitoramento.",
          en: "Cost, latency, and performance: prompt caching, model choice, and monitoring."
        },
        keyTopics: [
          { pt: "Prompt caching e roteamento de modelos por custo/latência.", en: "Prompt caching and routing models by cost/latency.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html" },
          { pt: "Provisioned throughput vs on-demand para FMs.", en: "Provisioned throughput vs on-demand for FMs." }
        ]
      },
      {
        name: { pt: "Testes, validação e troubleshooting", en: "Testing, Validation, and Troubleshooting" },
        weightPct: 11,
        summary: {
          pt: "Avaliação de qualidade de respostas, testes de RAG/agentes e diagnóstico de problemas.",
          en: "Response quality evaluation, RAG/agent testing, and problem diagnosis."
        },
        keyTopics: [
          { pt: "Avaliação de respostas (model evaluation) e testes de RAG.", en: "Response evaluation (model evaluation) and RAG testing.", doc: "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html" },
          { pt: "Troubleshooting: throttling, limites e qualidade do contexto.", en: "Troubleshooting: throttling, limits, and context quality." }
        ]
      }
    ],
    highlightedServices: [{ name: "Amazon Bedrock", slug: "amazon-bedrock" }, { name: "Amazon OpenSearch Service", slug: "amazon-opensearch-service" }, { name: "AWS Lambda", slug: "aws-lambda" }],
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
      {
        name: { pt: "Design de rede", en: "Network Design" },
        weightPct: 30,
        summary: {
          pt: "Arquiteturas de rede na AWS e híbridas: conectividade, DNS e entrega na borda.",
          en: "AWS and hybrid network architectures: connectivity, DNS, and edge delivery."
        },
        keyTopics: [
          { pt: "Topologias com Transit Gateway, peering e VPC endpoints.", en: "Topologies with Transit Gateway, peering, and VPC endpoints.", doc: "https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html" },
          { pt: "Conectividade híbrida: Direct Connect + VPN e roteamento BGP.", en: "Hybrid connectivity: Direct Connect + VPN and BGP routing." },
          { pt: "DNS híbrido com Route 53 resolvers.", en: "Hybrid DNS with Route 53 resolvers.", doc: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html" }
        ],
        services: ["AWS Transit Gateway", "AWS Direct Connect", "Amazon Route 53"]
      },
      {
        name: { pt: "Implementação de rede", en: "Network Implementation" },
        weightPct: 26,
        summary: {
          pt: "Implantar e automatizar as redes projetadas, incluindo balanceamento e roteamento.",
          en: "Deploy and automate the designed networks, including load balancing and routing."
        },
        keyTopics: [
          { pt: "Configurar ELB (ALB/NLB) e roteamento de tráfego.", en: "Configure ELB (ALB/NLB) and traffic routing." },
          { pt: "Automatizar rede com IaC (CloudFormation).", en: "Automate networking with IaC (CloudFormation)." },
          { pt: "Conectividade privada com PrivateLink e endpoint services.", en: "Private connectivity with PrivateLink and endpoint services.", doc: "https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html" }
        ],
        services: ["Elastic Load Balancing", "AWS CloudFormation", "Amazon VPC"]
      },
      {
        name: { pt: "Gestão e operação de rede", en: "Network Management and Operation" },
        weightPct: 20,
        summary: {
          pt: "Monitorar, analisar e otimizar redes em operação.",
          en: "Monitor, analyze, and optimize running networks."
        },
        keyTopics: [
          { pt: "VPC Flow Logs, Reachability Analyzer e métricas de rede.", en: "VPC Flow Logs, Reachability Analyzer, and network metrics.", doc: "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html" },
          { pt: "Troubleshooting de conectividade e MTU/latência.", en: "Connectivity and MTU/latency troubleshooting." },
          { pt: "Monitoramento de conexões híbridas e alarmes de BGP.", en: "Monitoring hybrid connections and BGP alarms." }
        ],
        services: ["Amazon CloudWatch", "Amazon VPC"]
      },
      {
        name: { pt: "Segurança, conformidade e governança de rede", en: "Network Security, Compliance, and Governance" },
        weightPct: 24,
        summary: {
          pt: "Proteger o perímetro e o tráfego: inspeção, borda segura e criptografia.",
          en: "Secure the perimeter and traffic: inspection, secure edge, and encryption."
        },
        keyTopics: [
          { pt: "Security groups, NACLs e inspeção centralizada.", en: "Security groups, NACLs, and centralized inspection." },
          { pt: "Proteção de borda com WAF, Shield e CloudFront.", en: "Edge protection with WAF, Shield, and CloudFront." },
          { pt: "Criptografia em trânsito e endpoints privados.", en: "Encryption in transit and private endpoints." }
        ],
        services: ["AWS WAF", "AWS Shield", "Amazon CloudFront"]
      }
    ],
    highlightedServices: [
      { name: "AWS Transit Gateway", slug: "aws-transit-gateway" },
      { name: "AWS Direct Connect", slug: "aws-direct-connect" },
      { name: "Elastic Load Balancing", slug: "elastic-load-balancing" },
      { name: "Amazon CloudFront", slug: "amazon-cloudfront" },
      { name: "AWS WAF", slug: "aws-waf" }
    ],
    studyOrder: [
      { pt: "Invista pesado em design (30%): Transit Gateway, Direct Connect e DNS híbrido.", en: "Invest heavily in design (30%): Transit Gateway, Direct Connect, and hybrid DNS." },
      { pt: "Pratique implementação (26%) e segurança de rede (24%).", en: "Practice implementation (26%) and network security (24%)." },
      { pt: "Feche com operação e troubleshooting (20%).", en: "Finish with operations and troubleshooting (20%)." }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/" }
    ]
  },
  {
    slug: "machine-learning-specialty",
    code: "MLS-C01",
    active: false,
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
      {
        name: { pt: "Engenharia de dados", en: "Data Engineering" },
        weightPct: 20,
        summary: {
          pt: "Criar repositórios e pipelines de ingestão/transformação para ML.",
          en: "Build data repositories and ingestion/transformation pipelines for ML."
        },
        keyTopics: [
          { pt: "Ingestão batch (Glue/EMR) e streaming (Kinesis).", en: "Batch (Glue/EMR) and streaming (Kinesis) ingestion." },
          { pt: "Data lake no S3 e formatos para treino.", en: "S3 data lake and training-friendly formats." }
        ],
        services: ["Amazon S3", "AWS Glue", "Amazon Kinesis Data Streams", "Amazon EMR"]
      },
      {
        name: { pt: "Análise exploratória de dados", en: "Exploratory Data Analysis" },
        weightPct: 24,
        summary: {
          pt: "Preparar, limpar e visualizar dados; feature engineering.",
          en: "Prepare, clean, and visualize data; feature engineering."
        },
        keyTopics: [
          { pt: "Tratamento de missing values e outliers.", en: "Handling missing values and outliers." },
          { pt: "Feature engineering: scaling, encoding, binning.", en: "Feature engineering: scaling, encoding, binning." },
          { pt: "Análise de distribuição e correlação.", en: "Distribution and correlation analysis." }
        ],
        services: ["Amazon SageMaker", "Amazon Athena"]
      },
      {
        name: { pt: "Modelagem", en: "Modeling" },
        weightPct: 36,
        summary: {
          pt: "O coração da prova: enquadrar o problema, escolher algoritmo, treinar, ajustar e avaliar.",
          en: "The heart of the exam: frame the problem, pick the algorithm, train, tune, and evaluate."
        },
        keyTopics: [
          { pt: "Algoritmos built-in do SageMaker (XGBoost, Linear Learner…).", en: "SageMaker built-in algorithms (XGBoost, Linear Learner…)." },
          { pt: "Hyperparameter tuning e combate a overfitting.", en: "Hyperparameter tuning and fighting overfitting." },
          { pt: "Métricas: precision/recall, F1, AUC, RMSE e matriz de confusão.", en: "Metrics: precision/recall, F1, AUC, RMSE, and the confusion matrix." }
        ],
        services: ["Amazon SageMaker"]
      },
      {
        name: { pt: "Implementação e operações de ML", en: "ML Implementation and Operations" },
        weightPct: 20,
        summary: {
          pt: "Servir modelos em produção com desempenho, disponibilidade e segurança.",
          en: "Serve production models with performance, availability, and security."
        },
        keyTopics: [
          { pt: "Endpoints, A/B testing e auto scaling de inferência.", en: "Endpoints, A/B testing, and inference auto scaling." },
          { pt: "Monitoramento e retraining de modelos.", en: "Model monitoring and retraining." }
        ],
        services: ["Amazon SageMaker", "Amazon CloudWatch"]
      }
    ],
    highlightedServices: [
      { name: "Amazon SageMaker", slug: "amazon-sagemaker" },
      { name: "Amazon Kinesis Data Streams", slug: "amazon-kinesis-data-streams" },
      { name: "Amazon EMR", slug: "amazon-emr" }
    ],
    studyOrder: [
      { pt: "Concentre-se em modelagem (36%): algoritmos, tuning e métricas.", en: "Focus on modeling (36%): algorithms, tuning, and metrics." },
      { pt: "Estude EDA (24%) — anda junto com a modelagem.", en: "Study EDA (24%) — it goes hand in hand with modeling." },
      { pt: "Feche com engenharia de dados (20%) e operações de ML (20%).", en: "Finish with data engineering (20%) and ML operations (20%)." }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/" }
    ]
  },
  {
    slug: "security-specialty",
    code: "SCS-C03",
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
      {
        name: { pt: "Detecção", en: "Detection" },
        weightPct: 16,
        summary: {
          pt: "Projetar e operar recursos de monitoramento e detecção de ameaças.",
          en: "Design and operate threat monitoring and detection capabilities."
        },
        keyTopics: [
          { pt: "GuardDuty e Security Hub para detecção e triagem.", en: "GuardDuty and Security Hub for detection and triage.", doc: "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html" },
          { pt: "Centralização e correlação de achados de segurança.", en: "Centralization and correlation of security findings." }
        ],
        services: ["Amazon GuardDuty", "AWS Security Hub", "Amazon EventBridge"]
      },
      {
        name: { pt: "Resposta a incidentes", en: "Incident Response" },
        weightPct: 14,
        summary: {
          pt: "Preparar, investigar, conter e recuperar workloads após incidentes de segurança.",
          en: "Prepare, investigate, contain, and recover workloads after security incidents."
        },
        keyTopics: [
          { pt: "Playbooks: isolar recursos, revogar credenciais e preservar evidências.", en: "Playbooks: isolate resources, revoke credentials, and preserve evidence." },
          { pt: "Resposta automatizada com EventBridge e Lambda.", en: "Automated response with EventBridge and Lambda." },
          { pt: "Investigação com CloudTrail e logs centralizados.", en: "Investigation with CloudTrail and centralized logs." },
          { pt: "Consultar logs em escala com Athena.", en: "Querying logs at scale with Athena.", doc: "https://docs.aws.amazon.com/athena/latest/ug/what-is.html" }
        ],
        services: ["AWS CloudTrail", "Amazon CloudWatch", "Amazon Athena"]
      },
      {
        name: { pt: "Segurança de infraestrutura", en: "Infrastructure Security" },
        weightPct: 18,
        summary: {
          pt: "Proteger a borda e a rede: segmentação, inspeção e mitigação de ataques.",
          en: "Secure the edge and network: segmentation, inspection, and attack mitigation."
        },
        keyTopics: [
          { pt: "Security groups, NACLs e VPC endpoints.", en: "Security groups, NACLs, and VPC endpoints." },
          { pt: "WAF e Shield contra ataques L7 e DDoS.", en: "WAF and Shield against L7 and DDoS attacks.", doc: "https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html" },
          { pt: "Inspeção centralizada com Network Firewall.", en: "Centralized inspection with Network Firewall.", doc: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html" }
        ],
        services: ["Amazon VPC", "AWS WAF", "AWS Shield"]
      },
      {
        name: { pt: "Gestão de identidade e acesso", en: "Identity and Access Management" },
        weightPct: 20,
        summary: {
          pt: "Autenticação e autorização em escala: políticas, federação e acesso mínimo.",
          en: "Authentication and authorization at scale: policies, federation, and least privilege."
        },
        keyTopics: [
          { pt: "Avaliação de políticas IAM (explicit deny, boundaries, SCPs).", en: "IAM policy evaluation (explicit deny, boundaries, SCPs).", doc: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html" },
          { pt: "Federação, Identity Center e Cognito.", en: "Federation, Identity Center, and Cognito." },
          { pt: "Credenciais temporárias com STS e roles entre contas.", en: "Temporary credentials with STS and cross-account roles.", doc: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html" }
        ],
        services: ["IAM", "Amazon Cognito", "AWS Organizations"]
      },
      {
        name: { pt: "Proteção de dados", en: "Data Protection" },
        weightPct: 18,
        summary: {
          pt: "Criptografia em repouso e em trânsito, gestão de chaves e de segredos.",
          en: "Encryption at rest and in transit, key and secret management."
        },
        keyTopics: [
          { pt: "KMS: políticas de chave, grants e rotação.", en: "KMS: key policies, grants, and rotation.", doc: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html" },
          { pt: "Secrets Manager e TLS/certificados.", en: "Secrets Manager and TLS/certificates." },
          { pt: "Descoberta de dados sensíveis no S3 com Macie.", en: "Sensitive data discovery in S3 with Macie.", doc: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html" }
        ],
        services: ["AWS KMS", "AWS Secrets Manager", "Amazon S3"]
      },
      {
        name: { pt: "Fundamentos e governança de segurança", en: "Security Foundations and Governance" },
        weightPct: 14,
        summary: {
          pt: "Governança multi-conta, conformidade contínua e estratégia de segurança.",
          en: "Multi-account governance, continuous compliance, and security strategy."
        },
        keyTopics: [
          { pt: "Organizations, SCPs e contas dedicadas de segurança.", en: "Organizations, SCPs, and dedicated security accounts." },
          { pt: "Config rules e evidências de conformidade.", en: "Config rules and compliance evidence." },
          { pt: "Administração delegada e conta central de segurança.", en: "Delegated administration and a central security account." }
        ],
        services: ["AWS Organizations", "AWS Config", "AWS Security Hub"]
      }
    ],
    highlightedServices: [
      { name: "Amazon GuardDuty", slug: "amazon-guardduty" },
      { name: "AWS CloudTrail", slug: "aws-cloudtrail" },
      { name: "AWS KMS", slug: "aws-kms" },
      { name: "AWS Secrets Manager", slug: "aws-secrets-manager" },
      { name: "AWS WAF", slug: "aws-waf" },
      { name: "Amazon Cognito", slug: "amazon-cognito" }
    ],
    studyOrder: [
      { pt: "Comece por IAM (20%) e infraestrutura (18%): políticas, rede, WAF e Shield.", en: "Start with IAM (20%) and infrastructure (18%): policies, networking, WAF, and Shield." },
      { pt: "Estude proteção de dados (18%) e detecção (16%) — KMS e GuardDuty são centrais.", en: "Study data protection (18%) and detection (16%) — KMS and GuardDuty are central." },
      { pt: "Feche com resposta a incidentes (14%) e fundamentos/governança (14%).", en: "Finish with incident response (14%) and foundations/governance (14%)." }
    ],
    resources: [
      { title: "Página oficial da certificação", url: "https://aws.amazon.com/certification/certified-security-specialty/" },
      { title: "Guia oficial do exame (SCS-C03)", url: "https://docs.aws.amazon.com/aws-certification/latest/security-specialty-03/security-specialty-03.html" }
    ]
  }
];

const activeCertifications = certifications.filter((cert) => cert.active !== false);

function validateCertifications(definitions: CertDefinition[]): void {
  const slugs = new Set<string>();
  const codes = new Set<string>();

  for (const cert of definitions) {
    if (slugs.has(cert.slug)) throw new Error(`Duplicate certification slug: ${cert.slug}`);
    if (codes.has(cert.code)) throw new Error(`Duplicate certification code: ${cert.code}`);
    slugs.add(cert.slug);
    codes.add(cert.code);

    const totalWeight = cert.domains.reduce((total, domain) => total + domain.weightPct, 0);
    if (totalWeight !== 100) {
      throw new Error(`Domain weights for ${cert.code} total ${totalWeight}%, expected 100%`);
    }
    if (!cert.name.pt || !cert.name.en || !cert.overview.pt || !cert.overview.en) {
      throw new Error(`Missing localized core content for certification: ${cert.code}`);
    }
    if (cert.resources.length === 0) {
      throw new Error(`Certification has no official resource: ${cert.code}`);
    }
  }
}

validateCertifications(activeCertifications);

const bySlug = new Map<string, CertDefinition>(activeCertifications.map((cert) => [cert.slug, cert]));

export interface CertDomainEntry {
  name: string;
  weightPct: number;
  summary: string | null;
  keyTopics: { text: string; doc?: string }[];
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
      keyTopics: (domain.keyTopics ?? []).map((topic) => ({ text: topic[lang], doc: topic.doc })),
      services: domain.services ?? []
    })),
    highlightedServices: cert.highlightedServices,
    studyOrder: (cert.studyOrder ?? []).map((item) => item[lang]),
    resources: cert.resources
  };
}

export function getAllCertifications(lang: Language): CertEntry[] {
  return activeCertifications.map((cert) => toEntry(cert, lang));
}

export function getCertificationsByLevel(lang: Language, level: CertLevel): CertEntry[] {
  return activeCertifications.filter((cert) => cert.level === level).map((cert) => toEntry(cert, lang));
}

export function getCertificationBySlug(lang: Language, slug: string): CertEntry | null {
  const cert = bySlug.get(slug);
  return cert ? toEntry(cert, lang) : null;
}

export function getCertificationSlugs(): string[] {
  return activeCertifications.map((cert) => cert.slug);
}
