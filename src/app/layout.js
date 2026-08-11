import './globals.css';

export const metadata = {
  metadataBase: new URL('https://auradigitalapp.com'),
  title: 'Aura — Secure QR Entry Management for Residential Communities',
  description:
    'Modernize access control at your residence. Aura lets landlords generate visitor QR codes, security agents scan them instantly, and admins manage everything from one dashboard. Available on iOS and Android.',
  keywords:
    'QR code security, residential access control, visitor management, entry management system, SaaS security app',
  authors: [{ name: 'Aura Team' }],
  openGraph: {
    title: 'Aura — Secure QR Entry Management',
    description:
      'Replace clipboards and keys with smart QR-based access control. Built for residential communities.',
    url: 'https://auradigitalapp.com',
    siteName: 'Aura',
    images: [{ url: '/images/app_icon_without_background.png', width: 1200, height: 630, alt: 'Aura App' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura — Secure QR Entry Management',
    description: 'Modernize residential access control with QR codes.',
    images: ['/images/app_icon_without_background.png'],
  },
  icons: {
    icon: '/images/app_icon_without_background.png',
    apple: '/images/app_icon_without_background.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#06060a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
