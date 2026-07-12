# AWS Certification Hub

Materiais de estudo bilíngues (pt/en) para todas as certificações AWS: domínios e pesos, tópicos-chave, serviços em escopo, recursos oficiais e trilha de estudo sugerida — do nível Foundational ao Specialty. Parte do ecossistema de estudos AWS, ao lado do [aws-services-catalog](https://github.com/marcelomamorim/aws-services-catalog) e do [aws-architecture-patterns-hub](https://github.com/marcelomamorim/aws-architecture-patterns-hub).

## Stack

- Astro 6
- GitHub Pages
- Conteúdo das certificações versionado em `src/lib/certifications.ts`

## Rodando localmente

```bash
npm install
npm run dev
```

Abra:

```text
http://localhost:4321/aws-certification-hub/
```

## Build e preview

```bash
npm run build
npm run preview
```

## Estrutura principal

- `src/lib/certifications.ts` — fonte de dados bilíngue das provas e validações de integridade (slugs, códigos, traduções, recursos e soma dos pesos).
- `src/pages/[lang]/` — home (roadmap por nível), listagem e página de detalhe da certificação.
- `src/pages/search/[lang].json.ts` — índice JSON consumido pelo app desktop.
- `.github/workflows/deploy.yml` — deploy automático para GitHub Pages a cada push em `main`.

## Conteúdo atual

12 certificações ativas do lineup AWS mapeadas com metadados, domínios, pesos, tópicos-chave e serviços relacionados. O histórico da **MLS-C01** permanece arquivado na fonte, sem gerar páginas públicas. O lineup inclui **SOA-C03** (CloudOps Engineer – Associate) e **SCS-C03** (Security – Specialty).

O build falha quando encontra slugs ou códigos duplicados, pesos que não totalizam 100%, conteúdo-base sem tradução ou certificações sem recursos oficiais.

Cada página de certificação inclui um modo de estudo local: checklist por domínio, progresso persistente, cartões de recuperação ativa e quiz com correção imediata e placar por domínio. CLF-C02 e SAA-C03 possuem simulados editoriais; as demais provas oferecem exercícios de domínio derivados do blueprint. Nenhum login ou backend é necessário.

## Deploy

Configurado para buildar e publicar automaticamente no GitHub Pages a cada push em `main`. Em *Settings → Pages*, selecionar **GitHub Actions** como origem.
