import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Badereddin Matar | Full-Stack Laravel Developer',
  description:
    'Full-Stack Laravel Developer (Backend-Focused) with strong experience building scalable business systems, RESTful APIs, and interactive dashboards. Based in Cairo, Egypt.',
  keywords: [
    'Badereddin Matar',
    'Laravel Developer',
    'Full-Stack Developer',
    'PHP Developer',
    'Backend Developer',
    'Cairo Egypt',
    'REST API',
    'MySQL',
    'Redis',
    'Software Engineer',
  ],
  authors: [{ name: 'Badereddin Matar', url: 'https://github.com/Bader533' }],
  creator: 'Badereddin Matar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Badereddin Matar | Full-Stack Laravel Developer',
    description:
      'Full-Stack Laravel Developer specializing in scalable backend systems, RESTful APIs, ERP solutions, and performance optimization.',
    siteName: 'Badereddin Matar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Badereddin Matar | Full-Stack Laravel Developer',
    description:
      'Full-Stack Laravel Developer specializing in scalable backend systems, RESTful APIs, and ERP solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Badereddin Matar',
  jobTitle: 'Full-Stack Laravel Developer',
  description:
    'Full-Stack Laravel Developer (Backend-Focused) with strong experience building scalable business systems and RESTful APIs.',
  email: 'mattar.bader99@gmail.com',
  telephone: '+201003864413',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'Egypt',
  },
  sameAs: [
    'https://linkedin.com/in/badereddin-matar-437684224/',
    'https://github.com/Bader533/',
  ],
  knowsAbout: ['Laravel', 'PHP', 'MySQL', 'Redis', 'REST APIs', 'Clean Architecture', 'TDD'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
