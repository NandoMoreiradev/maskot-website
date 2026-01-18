import * as prismic from '@prismicio/client'

export const repositoryName = 'maskot-blog'

export function createPrismicClient(config: prismic.ClientConfig = {}) {
  const client = prismic.createClient(repositoryName, {
    ...config,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchOptions: {
      next: { tags: ['prismic'], revalidate: 3600 },
    } as any, // Next.js específico - não reconhecido pelos tipos do Prismic
  })

  return client
}

// Alias para compatibilidade
export const createClient = createPrismicClient

// Exportação padrão
export default createPrismicClient