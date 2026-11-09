const map: Record<string, string> = { "п": "p", "р": "r", "и": "i", "в": "v", "е": "e", "т": "t" };
export function translit(s: string): string {
  return [...s].map(ch => { const l = ch.toLowerCase(); const t = map[l] ?? ch; return ch === l ? t : t.toUpperCase(); }).join("");
}
