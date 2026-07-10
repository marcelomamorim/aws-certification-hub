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

- `src/lib/certifications.ts` — fonte de dados bilíngue das provas (nível, formato, domínios + pesos, tópicos, serviços, recursos).
- `src/pages/[lang]/` — home (roadmap por nível), listagem e página de detalhe da certificação.
- `src/pages/search/[lang].json.ts` — índice JSON consumido pelo app desktop.
- `.github/workflows/deploy.yml` — deploy automático para GitHub Pages a cada push em `main`.

## Conteúdo inicial (v1)

13 certificações do lineup AWS mapeadas com metadados e pesos oficiais. Conteúdo detalhado por domínio (summary + tópicos-chave) já preenchido para **CLF-C02** (Cloud Practitioner) e **AIP-C01** (Generative AI Developer – Professional), semeados a partir do material curado. As demais têm domínios e pesos oficiais e vão sendo aprofundadas incrementalmente.

## Deploy

Configurado para buildar e publicar automaticamente no GitHub Pages a cada push em `main`. Em *Settings → Pages*, selecionar **GitHub Actions** como origem.
