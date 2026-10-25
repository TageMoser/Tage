import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Verdan Medical — Kontinuerlig trykkmåling som forebygger liggesår',
  description:
    'SmartMat er en tynn, forseglet trykksensor-matte som kartlegger trykk over hundrevis av punkter i sanntid, og gjør forebygging av liggesår om fra en manuell snurutine til en proaktiv, varselstyrt arbeidsflyt.',
  generator: 'v0.app',
  openGraph: {
    title: 'Verdan Medical — Kontinuerlig trykkmåling som forebygger liggesår',
    description:
      'SmartMat er en tynn, forseglet trykksensor-matte som kartlegger trykk over hundrevis av punkter i sanntid, og gjør forebygging av liggesår om fra en manuell snurutine til en proaktiv, varselstyrt arbeidsflyt.',
    siteName: 'Verdan Medical',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdan Medical — Kontinuerlig trykkmåling som forebygger liggesår',
    description:
      'SmartMat er en tynn, forseglet trykksensor-matte som kartlegger trykk over hundrevis av punkter i sanntid.',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#151b24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no" className={`light ${inter.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
