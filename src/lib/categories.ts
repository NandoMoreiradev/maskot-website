import { slugify } from './slug'

/**
 * Categorias do blog — espelham as opções do campo Select `category`
 * em customtypes/blog_post/index.json. Fonte única para gerar as páginas
 * de categoria (/blog/categoria/[slug]) e resolver slug <-> nome.
 */
export const BLOG_CATEGORIES = [
  'Gestão Escolar',
  'Marketing',
  'Retenção',
  'Tecnologia',
  'Vendas',
  'Gestão de Leads',
  'Leads',
  'Retenção de Matrículas',
  'Funil de Matrículas',
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

/** Slug de URL para uma categoria (ex: "Gestão Escolar" -> "gestao-escolar"). */
export function categorySlug(category: string): string {
  return slugify(category)
}

/** Resolve o nome da categoria a partir do slug da URL; null se não existir. */
export function categoryFromSlug(slug: string): BlogCategory | null {
  return BLOG_CATEGORIES.find((c) => slugify(c) === slug) ?? null
}
