import './globals.css'

export const metadata = {
  title: 'Wedding Invitation 2025',
  description: 'Join us for our special day',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}