import './globals.css'
import settings from './config/settings'

// Use environment variable if available, otherwise use a default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://patinyaanddar.com'

// Safely create URL object for metadataBase
let metadataBaseUrl;
try {
  metadataBaseUrl = new URL(siteUrl);
} catch (error) {
  // Fallback to a valid URL if the siteUrl is invalid
  console.warn('Invalid NEXT_PUBLIC_SITE_URL, using fallback URL');
  metadataBaseUrl = new URL('https://patinyaanddar.com');
}

export const metadata = {
  // Basic metadata
  title: `${settings.couple.bride.name} & ${settings.couple.groom.name} | Wedding - ${settings.wedding.displayDate}`,
  description: `Join ${settings.couple.bride.name} and ${settings.couple.groom.name} for their wedding celebration at ${settings.venue.name}, ${settings.venue.address.city}. ${settings.wedding.displayDate} at ${settings.wedding.ceremony.displayTime}. RSVP by ${settings.rsvp.displayDeadline}.`,
  keywords: `wedding, ${settings.couple.bride.name.toLowerCase()}, ${settings.couple.groom.name.toLowerCase()}, ${settings.wedding.displayDate}, ${settings.venue.name}, ${settings.venue.address.city}, wedding invitation, RSVP`,
  authors: [{ name: `${settings.couple.bride.name} & ${settings.couple.groom.name}` }],
  creator: `${settings.couple.bride.name} & ${settings.couple.groom.name}`,
  publisher: `${settings.couple.bride.name} & ${settings.couple.groom.name}`,
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: `${settings.couple.bride.name} & ${settings.couple.groom.name} are Getting Married!`,
    description: `Save the date! Join us for our wedding celebration on ${settings.wedding.displayDate} at ${settings.venue.name}, ${settings.venue.address.city}. ${settings.social.instagram.hashtag}`,
    url: siteUrl,
    siteName: `${settings.couple.bride.name} & ${settings.couple.groom.name} Wedding`,
    images: [
      {
        url: `${siteUrl}/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: `${settings.couple.bride.name} & ${settings.couple.groom.name} Wedding Invitation`,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: `${settings.couple.bride.name} & ${settings.couple.groom.name} - ${settings.wedding.displayDate}`,
    description: `Join us for our wedding celebration at ${settings.venue.name}. RSVP at our website!`,
    images: [`${siteUrl}/thumbnail.png`],
    creator: settings.social.instagram.wedding || settings.social.instagram.bride,
  },
  
  // Additional metadata
  metadataBase: metadataBaseUrl,
  alternates: {
    canonical: '/',
  },
  
  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add your verification codes if needed)
  verification: {
    google: '', // Add Google Search Console verification
    yandex: '',
    yahoo: '',
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest for PWA
  manifest: '/manifest.json',
  
  // Theme color
  themeColor: settings.theme.colors.gold,
  
  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{`${settings.couple.bride.name} & ${settings.couple.groom.name} | Wedding - ${settings.wedding.displayDate}`}</title>
        {/* Additional structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: `${settings.couple.bride.name} & ${settings.couple.groom.name} Wedding`,
              description: `Wedding celebration of ${settings.couple.bride.name} and ${settings.couple.groom.name}`,
              startDate: `${settings.wedding.date}T${settings.wedding.ceremony.time}:00`,
              endDate: `${settings.wedding.date}T${settings.wedding.reception.endTime}:00`,
              eventStatus: 'https://schema.org/EventScheduled',
              location: {
                '@type': 'Place',
                name: settings.venue.name,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: settings.venue.address.street,
                  addressLocality: settings.venue.address.city,
                  postalCode: settings.venue.address.postalCode,
                  addressCountry: settings.venue.address.country,
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: settings.venue.coordinates.lat,
                  longitude: settings.venue.coordinates.lng,
                },
              },
              image: `${siteUrl}/thumbnail.png`,
              url: siteUrl,
              organizer: {
                '@type': 'Person',
                name: `${settings.couple.bride.name} & ${settings.couple.groom.name}`,
                url: siteUrl,
              },
              isAccessibleForFree: true,
              maximumAttendeeCapacity: 200,
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}