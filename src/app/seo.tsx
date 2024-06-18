
import { siteMetadata } from '@/config/site'
import { Metadata } from 'next'


interface PageSEOProps {
  title: string
  description?: string
  image?: string
  locale?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any

}

export function genPageMetadata({ title, description, image,locale, ...rest }: PageSEOProps): Metadata {
  return {
    title ,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: locale || 'pt-BR',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  }
}
