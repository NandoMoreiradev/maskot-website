import * as prismic from '@prismicio/client'

export const repositoryName = 'maskot-blog'

export function createPrismicClient(config: prismic.ClientConfig = {}) {
  const client = prismic.createClient(repositoryName, {
    fetchOptions: {
      next: { tags: ['prismic'] },
    },
    ...config,
  })
  return client
}

export const createClient = createPrismicClient
export default createPrismicClient