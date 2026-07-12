import type { Language } from "./site";
import { getCertificationBySlug } from "./certifications";

interface L {
  pt: string;
  en: string;
}

interface QuizQuestionDef {
  domainIndex: number; // índice do domínio em certifications.ts (para o placar por domínio)
  question: L;
  options: L[];
  correctIndex: number;
  explanation: L;
}

const quizzes: Record<string, QuizQuestionDef[]> = {
  "cloud-practitioner": [
    {
      domainIndex: 0,
      question: {
        pt: "Uma empresa quer trocar grandes investimentos iniciais em datacenter por custos variáveis. Qual benefício da AWS Cloud atende a isso?",
        en: "A company wants to replace large upfront datacenter investments with variable costs. Which AWS Cloud benefit addresses this?"
      },
      options: [
        { pt: "Pagar conforme o uso (pay-as-you-go)", en: "Pay-as-you-go pricing" },
        { pt: "Contratos de longo prazo obrigatórios", en: "Mandatory long-term contracts" },
        { pt: "Hardware dedicado por padrão", en: "Dedicated hardware by default" },
        { pt: "Licenciamento perpétuo de software", en: "Perpetual software licensing" }
      ],
      correctIndex: 0,
      explanation: {
        pt: "Trocar CapEx por OpEx é o benefício econômico central da nuvem: você paga apenas pelo que consome, sem investimento inicial.",
        en: "Trading CapEx for OpEx is the cloud's core economic benefit: you pay only for what you consume, with no upfront investment."
      }
    },
    {
      domainIndex: 0,
      question: {
        pt: "Qual das opções NÃO é um pilar do AWS Well-Architected Framework?",
        en: "Which of the following is NOT a pillar of the AWS Well-Architected Framework?"
      },
      options: [
        { pt: "Excelência operacional", en: "Operational excellence" },
        { pt: "Elasticidade máxima", en: "Maximum elasticity" },
        { pt: "Otimização de custos", en: "Cost optimization" },
        { pt: "Confiabilidade", en: "Reliability" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "Os 6 pilares são: excelência operacional, segurança, confiabilidade, eficiência de performance, otimização de custos e sustentabilidade. 'Elasticidade máxima' não é um pilar.",
        en: "The 6 pillars are: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. 'Maximum elasticity' is not one."
      }
    },
    {
      domainIndex: 0,
      question: {
        pt: "Para tornar uma aplicação altamente disponível dentro de uma Região, a recomendação é implantá-la em…",
        en: "To make an application highly available within a Region, the recommendation is to deploy it across…"
      },
      options: [
        { pt: "Múltiplas contas AWS", en: "Multiple AWS accounts" },
        { pt: "Múltiplas Zonas de Disponibilidade", en: "Multiple Availability Zones" },
        { pt: "Múltiplas edge locations", en: "Multiple edge locations" },
        { pt: "Um único host dedicado", en: "A single dedicated host" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "AZs são datacenters isolados dentro da Região: distribuir a carga entre elas protege contra a falha de uma instalação inteira.",
        en: "AZs are isolated datacenters within a Region: spreading the workload across them protects against the failure of an entire facility."
      }
    },
    {
      domainIndex: 1,
      question: {
        pt: "No modelo de responsabilidade compartilhada, quem é responsável por aplicar patches no sistema operacional de uma instância EC2?",
        en: "Under the shared responsibility model, who is responsible for patching the operating system of an EC2 instance?"
      },
      options: [
        { pt: "A AWS", en: "AWS" },
        { pt: "O cliente", en: "The customer" },
        { pt: "O AWS Support", en: "AWS Support" },
        { pt: "Ninguém — EC2 não usa SO", en: "No one — EC2 has no OS" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "A AWS cuida da segurança DA nuvem (infraestrutura física); o cliente cuida da segurança NA nuvem — incluindo SO, aplicações e dados da instância.",
        en: "AWS handles security OF the cloud (physical infrastructure); the customer handles security IN the cloud — including the instance's OS, applications, and data."
      }
    },
    {
      domainIndex: 1,
      question: {
        pt: "Qual é a melhor prática recomendada para a conta root da AWS?",
        en: "What is the recommended best practice for the AWS root account?"
      },
      options: [
        { pt: "Usá-la nas tarefas administrativas diárias", en: "Use it for daily admin tasks" },
        { pt: "Compartilhá-la com o time de operações", en: "Share it with the operations team" },
        { pt: "Ativar MFA e evitar seu uso no dia a dia", en: "Enable MFA and avoid day-to-day use" },
        { pt: "Desativá-la permanentemente", en: "Permanently disable it" }
      ],
      correctIndex: 2,
      explanation: {
        pt: "A root deve ter MFA ativado e ser usada apenas para as poucas tarefas que exigem root. O trabalho diário vai para usuários/roles IAM com privilégio mínimo.",
        en: "Root should have MFA enabled and be used only for the few tasks that require it. Daily work goes to IAM users/roles with least privilege."
      }
    },
    {
      domainIndex: 1,
      question: {
        pt: "Qual serviço fornece detecção de ameaças gerenciada, analisando CloudTrail, VPC Flow Logs e DNS?",
        en: "Which service provides managed threat detection by analyzing CloudTrail, VPC Flow Logs, and DNS?"
      },
      options: [
        { pt: "AWS WAF", en: "AWS WAF" },
        { pt: "Amazon GuardDuty", en: "Amazon GuardDuty" },
        { pt: "AWS Shield", en: "AWS Shield" },
        { pt: "Amazon Inspector", en: "Amazon Inspector" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "O GuardDuty é o serviço de detecção de ameaças contínua. WAF filtra tráfego web, Shield mitiga DDoS e Inspector avalia vulnerabilidades em workloads.",
        en: "GuardDuty is the continuous threat detection service. WAF filters web traffic, Shield mitigates DDoS, and Inspector assesses workload vulnerabilities."
      }
    },
    {
      domainIndex: 2,
      question: {
        pt: "Uma equipe quer executar código em resposta a eventos sem gerenciar servidores. Qual serviço usar?",
        en: "A team wants to run code in response to events without managing servers. Which service should they use?"
      },
      options: [
        { pt: "Amazon EC2", en: "Amazon EC2" },
        { pt: "AWS Lambda", en: "AWS Lambda" },
        { pt: "Amazon LightSail", en: "Amazon Lightsail" },
        { pt: "AWS Elastic Beanstalk", en: "AWS Elastic Beanstalk" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "Lambda executa funções sob demanda em resposta a eventos, escala automaticamente e cobra por uso — sem provisionar servidores.",
        en: "Lambda runs functions on demand in response to events, scales automatically, and bills per use — no server provisioning."
      }
    },
    {
      domainIndex: 2,
      question: {
        pt: "Qual serviço oferece armazenamento de objetos com durabilidade projetada de 99,999999999% (11 noves)?",
        en: "Which service offers object storage designed for 99.999999999% (11 nines) durability?"
      },
      options: [
        { pt: "Amazon EBS", en: "Amazon EBS" },
        { pt: "Amazon EFS", en: "Amazon EFS" },
        { pt: "Amazon S3", en: "Amazon S3" },
        { pt: "AWS Storage Gateway", en: "AWS Storage Gateway" }
      ],
      correctIndex: 2,
      explanation: {
        pt: "O S3 é o storage de objetos com 11 noves de durabilidade. EBS é bloco (para EC2) e EFS é sistema de arquivos NFS.",
        en: "S3 is the object store with 11 nines of durability. EBS is block storage (for EC2) and EFS is an NFS file system."
      }
    },
    {
      domainIndex: 2,
      question: {
        pt: "Para migrar um banco PostgreSQL mantendo o modelo relacional com operação gerenciada, o serviço indicado é…",
        en: "To migrate a PostgreSQL database keeping the relational model with managed operations, the right service is…"
      },
      options: [
        { pt: "Amazon DynamoDB", en: "Amazon DynamoDB" },
        { pt: "Amazon RDS", en: "Amazon RDS" },
        { pt: "Amazon Redshift", en: "Amazon Redshift" },
        { pt: "Amazon ElastiCache", en: "Amazon ElastiCache" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "O RDS oferece PostgreSQL gerenciado (backups, patching, Multi-AZ). DynamoDB é NoSQL, Redshift é data warehouse e ElastiCache é cache em memória.",
        en: "RDS offers managed PostgreSQL (backups, patching, Multi-AZ). DynamoDB is NoSQL, Redshift is a data warehouse, and ElastiCache is an in-memory cache."
      }
    },
    {
      domainIndex: 2,
      question: {
        pt: "Qual serviço entrega conteúdo estático a usuários globais com menor latência, usando pontos de presença?",
        en: "Which service delivers static content to global users with lower latency, using points of presence?"
      },
      options: [
        { pt: "Amazon CloudFront", en: "Amazon CloudFront" },
        { pt: "AWS Direct Connect", en: "AWS Direct Connect" },
        { pt: "Amazon VPC", en: "Amazon VPC" },
        { pt: "AWS Transit Gateway", en: "AWS Transit Gateway" }
      ],
      correctIndex: 0,
      explanation: {
        pt: "O CloudFront é a CDN da AWS: cacheia conteúdo nas edge locations, perto do usuário. Direct Connect é link dedicado híbrido; VPC e TGW são rede interna.",
        en: "CloudFront is AWS's CDN: it caches content at edge locations, close to users. Direct Connect is a dedicated hybrid link; VPC and TGW are internal networking."
      }
    },
    {
      domainIndex: 3,
      question: {
        pt: "Uma carga estável e previsível rodará por 3 anos. Qual opção de compra de EC2 traz o maior desconto?",
        en: "A steady, predictable workload will run for 3 years. Which EC2 purchasing option gives the biggest discount?"
      },
      options: [
        { pt: "On-Demand", en: "On-Demand" },
        { pt: "Spot Instances", en: "Spot Instances" },
        { pt: "Savings Plans / Reserved de 3 anos", en: "3-year Savings Plans / Reserved" },
        { pt: "Dedicated Hosts on-demand", en: "On-demand Dedicated Hosts" }
      ],
      correctIndex: 2,
      explanation: {
        pt: "Compromissos de 1-3 anos (Reserved/Savings Plans) dão os maiores descontos para cargas estáveis. Spot é mais barato, mas pode ser interrompido — não serve para qualquer carga estável crítica.",
        en: "1–3 year commitments (Reserved/Savings Plans) give the biggest discounts for steady workloads. Spot is cheaper but can be interrupted — unsuitable for critical steady loads."
      }
    },
    {
      domainIndex: 3,
      question: {
        pt: "Qual ferramenta permite visualizar e analisar os custos da AWS ao longo do tempo, com filtros por serviço e tag?",
        en: "Which tool lets you visualize and analyze AWS costs over time, filtered by service and tag?"
      },
      options: [
        { pt: "AWS Trusted Advisor", en: "AWS Trusted Advisor" },
        { pt: "AWS Cost Explorer", en: "AWS Cost Explorer" },
        { pt: "AWS CloudTrail", en: "AWS CloudTrail" },
        { pt: "Amazon CloudWatch", en: "Amazon CloudWatch" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "O Cost Explorer é a ferramenta de análise visual de custos e uso. Budgets alerta sobre limites; Trusted Advisor recomenda otimizações; CloudTrail audita chamadas de API.",
        en: "Cost Explorer is the visual cost and usage analysis tool. Budgets alerts on limits; Trusted Advisor recommends optimizations; CloudTrail audits API calls."
      }
    }
  ],

  "solutions-architect-associate": [
    {
      domainIndex: 0,
      question: {
        pt: "Uma aplicação em EC2 precisa ler objetos de um bucket S3. Qual é a forma mais segura de conceder o acesso?",
        en: "An EC2 application needs to read objects from an S3 bucket. What is the most secure way to grant access?"
      },
      options: [
        { pt: "Gravar access keys no código da aplicação", en: "Hardcode access keys in the application" },
        { pt: "Anexar uma IAM role à instância", en: "Attach an IAM role to the instance" },
        { pt: "Tornar o bucket público para leitura", en: "Make the bucket publicly readable" },
        { pt: "Compartilhar as credenciais do usuário admin", en: "Share the admin user's credentials" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "Roles fornecem credenciais temporárias rotacionadas automaticamente via instance profile — sem segredos fixos no código ou no disco.",
        en: "Roles provide automatically rotated temporary credentials via the instance profile — no fixed secrets in code or on disk."
      }
    },
    {
      domainIndex: 0,
      question: {
        pt: "A empresa exige que nenhum bucket S3 fique acessível publicamente, mesmo que alguém configure uma policy permissiva. O que usar?",
        en: "The company requires that no S3 bucket be publicly accessible, even if someone sets a permissive policy. What should be used?"
      },
      options: [
        { pt: "Versionamento de bucket", en: "Bucket versioning" },
        { pt: "S3 Block Public Access na conta", en: "Account-level S3 Block Public Access" },
        { pt: "Lifecycle rules", en: "Lifecycle rules" },
        { pt: "Transfer Acceleration", en: "Transfer Acceleration" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "O Block Public Access no nível da conta sobrepõe policies e ACLs públicas — é o guarda-corpo definitivo contra exposição acidental.",
        en: "Account-level Block Public Access overrides public policies and ACLs — the definitive guardrail against accidental exposure."
      }
    },
    {
      domainIndex: 0,
      question: {
        pt: "Os dados em um bucket devem ser cifrados em repouso com chaves gerenciadas centralmente, rotação automática e auditoria de uso. Qual opção atende?",
        en: "Data in a bucket must be encrypted at rest with centrally managed keys, automatic rotation, and usage auditing. Which option fits?"
      },
      options: [
        { pt: "SSE-S3", en: "SSE-S3" },
        { pt: "SSE-KMS", en: "SSE-KMS" },
        { pt: "Criptografia no cliente sem KMS", en: "Client-side encryption without KMS" },
        { pt: "Nenhuma — S3 não cifra em repouso", en: "None — S3 cannot encrypt at rest" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "SSE-KMS usa chaves do KMS: políticas de acesso próprias, rotação automática e cada uso auditado no CloudTrail. SSE-S3 cifra, mas sem controle/auditoria por chave.",
        en: "SSE-KMS uses KMS keys: their own access policies, automatic rotation, and every use audited in CloudTrail. SSE-S3 encrypts, but without per-key control/auditing."
      }
    },
    {
      domainIndex: 1,
      question: {
        pt: "Uma API sofre picos que derrubam os workers de processamento. Como desacoplar e absorver os picos?",
        en: "An API gets spikes that overwhelm the processing workers. How do you decouple and absorb the spikes?"
      },
      options: [
        { pt: "Aumentar o timeout da API", en: "Increase the API timeout" },
        { pt: "Colocar uma fila SQS entre a API e os workers", en: "Put an SQS queue between the API and the workers" },
        { pt: "Migrar os workers para instâncias maiores", en: "Move workers to bigger instances" },
        { pt: "Usar SNS para entregar direto aos workers", en: "Use SNS to deliver straight to workers" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "É o padrão queue-based load leveling: a fila absorve o pico e os workers consomem no ritmo deles. SNS empurra sem buffer; instância maior só adia o problema.",
        en: "That's queue-based load leveling: the queue absorbs the spike and workers consume at their own pace. SNS pushes without buffering; bigger instances just delay the problem."
      }
    },
    {
      domainIndex: 1,
      question: {
        pt: "Um banco RDS precisa sobreviver à falha de uma AZ com failover automático e sem mudança na aplicação. O que habilitar?",
        en: "An RDS database must survive an AZ failure with automatic failover and no application change. What should be enabled?"
      },
      options: [
        { pt: "Read replica na mesma AZ", en: "A read replica in the same AZ" },
        { pt: "Implantação Multi-AZ", en: "Multi-AZ deployment" },
        { pt: "Snapshots manuais diários", en: "Daily manual snapshots" },
        { pt: "ElastiCache na frente do banco", en: "ElastiCache in front of the database" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "Multi-AZ mantém uma réplica síncrona em outra AZ e faz failover automático no mesmo endpoint. Read replicas servem leitura/performance, não HA automática.",
        en: "Multi-AZ keeps a synchronous standby in another AZ and fails over automatically on the same endpoint. Read replicas serve reads/performance, not automatic HA."
      }
    },
    {
      domainIndex: 1,
      question: {
        pt: "Uma aplicação roda em duas regiões (ativa e standby). O tráfego deve migrar automaticamente se a região ativa ficar indisponível. Qual solução?",
        en: "An application runs in two regions (active and standby). Traffic must shift automatically if the active region becomes unavailable. Which solution?"
      },
      options: [
        { pt: "Route 53 com política de failover e health checks", en: "Route 53 failover policy with health checks" },
        { pt: "Um Application Load Balancer entre regiões", en: "An Application Load Balancer across regions" },
        { pt: "VPC peering entre as regiões", en: "VPC peering between the regions" },
        { pt: "Snapshots replicados de EBS", en: "Replicated EBS snapshots" }
      ],
      correctIndex: 0,
      explanation: {
        pt: "ALB não atravessa regiões. O Route 53 com failover + health checks responde com o endpoint secundário quando o primário falha (Global Accelerator também seria válido).",
        en: "An ALB doesn't span regions. Route 53 failover with health checks answers with the secondary endpoint when the primary fails (Global Accelerator would also work)."
      }
    },
    {
      domainIndex: 2,
      question: {
        pt: "Consultas repetidas de leitura estão saturando um RDS. Como reduzir a latência e aliviar o banco com o mínimo de mudança?",
        en: "Repeated read queries are saturating an RDS database. How do you cut latency and relieve the database with minimal change?"
      },
      options: [
        { pt: "Adicionar ElastiCache com cache-aside", en: "Add ElastiCache with cache-aside" },
        { pt: "Migrar tudo para DynamoDB", en: "Migrate everything to DynamoDB" },
        { pt: "Dobrar o tamanho da instância RDS", en: "Double the RDS instance size" },
        { pt: "Habilitar Multi-AZ", en: "Enable Multi-AZ" }
      ],
      correctIndex: 0,
      explanation: {
        pt: "Cache-aside com ElastiCache serve as leituras quentes da memória em sub-ms. Multi-AZ é disponibilidade (não performance); migração e upsizing são mudanças bem maiores.",
        en: "Cache-aside with ElastiCache serves hot reads from memory in sub-ms. Multi-AZ is availability (not performance); migration and upsizing are far bigger changes."
      }
    },
    {
      domainIndex: 2,
      question: {
        pt: "Um site estático global precisa de menor latência possível e HTTPS. Qual combinação usar?",
        en: "A global static site needs the lowest possible latency and HTTPS. Which combination should be used?"
      },
      options: [
        { pt: "S3 + CloudFront", en: "S3 + CloudFront" },
        { pt: "EC2 + Auto Scaling em uma região", en: "EC2 + Auto Scaling in one region" },
        { pt: "EFS + Direct Connect", en: "EFS + Direct Connect" },
        { pt: "S3 com acesso público direto", en: "S3 with direct public access" }
      ],
      correctIndex: 0,
      explanation: {
        pt: "S3 hospeda os arquivos e o CloudFront os entrega das edges com TLS e cache — com OAC, o bucket nem precisa ser público.",
        en: "S3 hosts the files and CloudFront serves them from the edges with TLS and caching — with OAC, the bucket doesn't even need to be public."
      }
    },
    {
      domainIndex: 3,
      question: {
        pt: "Um cluster de processamento em lote tolera interrupções e reexecuções. Qual opção de compute minimiza o custo?",
        en: "A batch processing cluster tolerates interruptions and reruns. Which compute option minimizes cost?"
      },
      options: [
        { pt: "On-Demand", en: "On-Demand" },
        { pt: "Spot Instances", en: "Spot Instances" },
        { pt: "Reserved Instances", en: "Reserved Instances" },
        { pt: "Dedicated Hosts", en: "Dedicated Hosts" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "Spot usa capacidade ociosa com até ~90% de desconto — ideal para cargas tolerantes a interrupção como batch, CI e renderização.",
        en: "Spot uses spare capacity at up to ~90% off — ideal for interruption-tolerant workloads like batch, CI, and rendering."
      }
    },
    {
      domainIndex: 3,
      question: {
        pt: "Backups são acessados raramente, mas quando necessários precisam de leitura imediata (milissegundos). Qual classe S3 tem o melhor custo?",
        en: "Backups are rarely accessed, but when needed they require immediate (millisecond) reads. Which S3 class has the best cost?"
      },
      options: [
        { pt: "S3 Standard", en: "S3 Standard" },
        { pt: "S3 Standard-IA", en: "S3 Standard-IA" },
        { pt: "S3 Glacier Deep Archive", en: "S3 Glacier Deep Archive" },
        { pt: "S3 Express One Zone", en: "S3 Express One Zone" }
      ],
      correctIndex: 1,
      explanation: {
        pt: "Standard-IA cobra menos pelo armazenamento mantendo leitura imediata. Deep Archive é mais barato, mas a restauração leva horas — não atende 'imediato'.",
        en: "Standard-IA charges less for storage while keeping immediate reads. Deep Archive is cheaper, but restores take hours — failing the 'immediate' requirement."
      }
    }
  ]
};

function validateQuizzes(definitions: Record<string, QuizQuestionDef[]>): void {
  for (const [slug, questions] of Object.entries(definitions)) {
    if (questions.length === 0) throw new Error(`Quiz has no questions: ${slug}`);
    questions.forEach((question, index) => {
      if (question.options.length !== 4) throw new Error(`Quiz ${slug} question ${index + 1} must have 4 options`);
      if (question.correctIndex < 0 || question.correctIndex >= question.options.length) {
        throw new Error(`Quiz ${slug} question ${index + 1} has an invalid correctIndex`);
      }
      if (!question.question.pt || !question.question.en || !question.explanation.pt || !question.explanation.en) {
        throw new Error(`Quiz ${slug} question ${index + 1} is missing localized content`);
      }
    });
  }
}

validateQuizzes(quizzes);

// ---------- API localizada ----------

export interface QuizQuestion {
  domainIndex: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

function getDomainDrill(slug: string, lang: Language): QuizQuestion[] | null {
  const cert = getCertificationBySlug(lang, slug);
  if (!cert || cert.domains.length < 4) return null;

  return cert.domains.map((domain, domainIndex) => {
    const correct = domain.name;
    const distractors = cert.domains
      .filter((_, index) => index !== domainIndex)
      .map((item) => item.name)
      .slice(0, 3);
    const options = [correct, ...distractors];
    const shift = domainIndex % options.length;
    const rotated = [...options.slice(shift), ...options.slice(0, shift)];
    const focus = domain.keyTopics[0]?.text ?? domain.summary ?? domain.name;
    const services = domain.services.slice(0, 3).join(", ");

    return {
      domainIndex,
      question: lang === "pt"
        ? `No blueprint da ${cert.code}, qual domínio concentra este foco: “${focus}”?`
        : `In the ${cert.code} blueprint, which domain covers this focus: “${focus}”?`,
      options: rotated,
      correctIndex: rotated.indexOf(correct),
      explanation: lang === "pt"
        ? `Esse conteúdo pertence a “${domain.name}” (${domain.weightPct}% da prova).${services ? ` Serviços relacionados: ${services}.` : ""}`
        : `This content belongs to “${domain.name}” (${domain.weightPct}% of the exam).${services ? ` Related services: ${services}.` : ""}`
    };
  });
}

export function getQuiz(slug: string, lang: Language): QuizQuestion[] | null {
  const defs = quizzes[slug];
  if (!defs || defs.length === 0) {
    return getDomainDrill(slug, lang);
  }
  return defs.map((def) => ({
    domainIndex: def.domainIndex,
    question: def.question[lang],
    options: def.options.map((option) => option[lang]),
    correctIndex: def.correctIndex,
    explanation: def.explanation[lang]
  }));
}

export function hasQuiz(slug: string): boolean {
  return (slug in quizzes && quizzes[slug].length > 0) || Boolean(getDomainDrill(slug, "pt"));
}
