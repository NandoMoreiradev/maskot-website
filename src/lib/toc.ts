import { slugify } from './slug'

export type TocHeading = {
  id: string
  text: string
  level: 2 | 3
}

/**
 * Percorre os slices `rich_text` de um post e extrai os headings (H2 e H3)
 * para montar o índice navegável do artigo. Os ids batem com os gerados
 * pelo serializer do slice RichText (mesmo slugify).
 */
export function extractHeadings(slices: unknown[]): TocHeading[] {
  const headings: TocHeading[] = []

  for (const slice of slices) {
    if (
      typeof slice !== 'object' ||
      slice === null ||
      !('slice_type' in slice) ||
      slice.slice_type !== 'rich_text' ||
      !('primary' in slice)
    ) {
      continue
    }

    const primary = (slice as { primary?: { text?: unknown } }).primary
    const blocks = primary?.text
    if (!Array.isArray(blocks)) continue

    for (const block of blocks) {
      if (
        typeof block === 'object' &&
        block !== null &&
        'type' in block &&
        'text' in block &&
        typeof block.text === 'string' &&
        block.text.trim().length > 0 &&
        (block.type === 'heading2' || block.type === 'heading3')
      ) {
        headings.push({
          id: slugify(block.text),
          text: block.text,
          level: block.type === 'heading2' ? 2 : 3,
        })
      }
    }
  }

  return headings
}
