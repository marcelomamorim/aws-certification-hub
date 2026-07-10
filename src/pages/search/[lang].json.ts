import type { APIRoute } from "astro";
import { getAllCertifications } from "../../lib/certifications";
import { languages } from "../../lib/site";

export function getStaticPaths() {
  return languages.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as "pt" | "en";
  const data = getAllCertifications(lang).map((cert) => ({
    slug: cert.slug,
    code: cert.code,
    name: cert.name,
    level: cert.level,
    durationMin: cert.durationMin,
    questions: cert.questions,
    passingScore: cert.passingScore,
    costUsd: cert.costUsd,
    domains: cert.domains.map((domain) => ({ name: domain.name, weightPct: domain.weightPct })),
    highlightedServices: cert.highlightedServices
  }));

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
};
