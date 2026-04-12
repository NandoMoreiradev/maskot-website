'use client'

import { useEffect } from 'react'

interface DisqusCommentsProps {
  pageIdentifier: string
  pageTitle: string
}

export default function DisqusComments({ pageIdentifier, pageTitle }: DisqusCommentsProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Use the real browser URL so Disqus always gets the correct domain
    // This works for both localhost (dev) and production automatically
    const actualUrl = window.location.href

    type DisqusWindow = Window & {
      DISQUS?: { reset: (config: object) => void }
      disqus_config?: (this: { page: { url: string; identifier: string; title: string } }) => void
    }

    const win = window as DisqusWindow

    if (win.DISQUS) {
      // Already loaded — just reset to the new page
      win.DISQUS.reset({
        reload: true,
        config: function (this: { page: { url: string; identifier: string; title: string } }) {
          this.page.url = actualUrl
          this.page.identifier = pageIdentifier
          this.page.title = pageTitle
        },
      })
    } else {
      // First load: set config then inject the embed script
      win.disqus_config = function () {
        this.page.url = actualUrl
        this.page.identifier = pageIdentifier
        this.page.title = pageTitle
      }

      const script = document.createElement('script')
      script.src = 'https://https-www-maskotedu-com-br.disqus.com/embed.js'
      script.setAttribute('data-timestamp', String(+new Date()))
      script.async = true
      ;(document.head || document.body).appendChild(script)
    }

    return () => {
      // Clear the thread so the next post starts fresh
      const thread = document.getElementById('disqus_thread')
      if (thread) thread.innerHTML = ''
    }
  }, [pageIdentifier, pageTitle])

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
