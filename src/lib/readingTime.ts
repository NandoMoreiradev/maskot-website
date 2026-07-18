import { asText, RichTextField } from '@prismicio/client'

/**
 * Calcula o tempo de leitura (em minutos) a partir dos slices `rich_text`
 * de um post, considerando ~200 palavras/minuto. Compartilhado entre a
 * página do post e os cards da listagem para evitar valores "chumbados".
 */
export function calculateReadingTime(slices: unknown[]): number {
  let totalWords = 0

  for (const slice of slices) {
    if (
      typeof slice === 'object' &&
      slice !== null &&
      'slice_type' in slice &&
      slice.slice_type === 'rich_text' &&
      'primary' in slice
    ) {
      const s = slice as { primary: { text: RichTextField } }
      const text = asText(s.primary.text)
      if (text) {
        totalWords += text.split(/\s+/).filter((w) => w.length > 0).length
      }
    }
  }

  return Math.max(1, Math.ceil(totalWords / 200))
}
