/**
 * Limite simples de requisições por IP, em memória.
 * Em ambiente serverless (Vercel) cada instância tem a sua própria memória, então isto freia
 * abuso básico mas não é garantia. Quando o volume justificar, troque por Upstash Redis
 * (@upstash/ratelimit) ou pelo Vercel BotID — a assinatura de `isRateLimited` pode ser mantida.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  // limpeza ocasional pra o mapa não crescer sem fim
  if (hits.size > 500) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}