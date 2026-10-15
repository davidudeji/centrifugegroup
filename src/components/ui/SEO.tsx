import React, { useEffect } from 'react'

export interface SEOProps {
  title: string
  description?: string
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Centrifuge Group designs and delivers enterprise software, healthcare platforms, logistics systems, and digital solutions that solve complex operational problems.',
}) => {
  useEffect(() => {
    const fullTitle = title.includes('Centrifuge')
      ? title
      : `${title} | Centrifuge Group`
    document.title = fullTitle

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    const canonicalUrl = `https://www.centrifugegroup.com${window.location.pathname}`
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    const setMeta = (property: string, content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }
      meta.content = content
    }
    setMeta('og:title', fullTitle)
    setMeta('og:description', description)
    setMeta('og:url', canonicalUrl)
    setMeta('og:type', 'website')
  }, [title, description])

  return null
}
