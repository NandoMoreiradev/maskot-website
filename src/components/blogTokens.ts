/** Tipografia editorial do blog: serifa para manchetes/corpo, Inter para interface. */
export const serif = "Georgia, 'Times New Roman', Times, serif"

/** Altura somada do cabeçalho fixo do blog (masthead + faixa de categorias). */
export const BLOG_HEADER_HEIGHT = 112

export function formatDate(iso: string, style: 'short' | 'long' = 'short'): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: style === 'long' ? 'long' : 'short',
    year: 'numeric',
  })
}

/** Fonte dos títulos: Inter, a mesma do sistema. */
export const sans = "var(--font-inter), system-ui, sans-serif"
