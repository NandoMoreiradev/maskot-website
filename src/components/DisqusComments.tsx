'use client'

import { useEffect } from 'react'

interface DisqusCommentsProps {
  pageUrl: string
  pageIdentifier: string
  pageTitle: string
}

export default function DisqusComments({ pageUrl, pageIdentifier, pageTitle }: DisqusCommentsProps) {
  useEffect(() => {
    // Reset Disqus thread when navigating between posts
    if (typeof window !== 'undefined') {
      const disqusReset = (window as Window & { DISQUS?: { reset: (config: object) => void } }).DISQUS

      if (disqusReset) {
        disqusReset.reset({
          reload: true,
          config: function (this: { page: { url: string; identifier: string; title: string } }) {
            this.page.url = pageUrl
            this.page.identifier = pageIdentifier
            this.page.title = pageTitle
          },
        })
      } else {
        // First load: inject Disqus script
        const win = window as Window & {
          disqus_config?: (this: { page: { url: string; identifier: string; title: string } }) => void
          disqus_shortname?: string
        }

        win.disqus_config = function () {
          this.page.url = pageUrl
          this.page.identifier = pageIdentifier
          this.page.title = pageTitle
        }

        const script = document.createElement('script')
        script.src = 'https://maskotedu.disqus.com/embed.js'
        script.setAttribute('data-timestamp', String(+new Date()))
        script.async = true
        ;(document.head || document.body).appendChild(script)
      }
    }

    return () => {
      // Cleanup: remove thread iframe on unmount so next page starts fresh
      const thread = document.getElementById('disqus_thread')
      if (thread) thread.innerHTML = ''
    }
  }, [pageUrl, pageIdentifier, pageTitle])

  return (
    <section
      style={{
        marginTop: '5rem',
        paddingTop: '3rem',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <h2
        style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          marginBottom: '2rem',
          color: '#1a1a2e',
        }}
      >
        Comentários
      </h2>
      <div id="disqus_thread" />
    </section>
  )
}
