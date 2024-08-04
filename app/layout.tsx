import { ReactElement } from 'react'
import Providers from './providers'
import { checkSession } from './_lib/check-session'

async function RootLayout({
  children,
  notAuthenticated
}: {
  children: ReactElement
  notAuthenticated: ReactElement
}) {
  const session = await checkSession()

  return (
    <html lang={`en`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <title>Linx Security</title>
      </head>

      <body>
        <Providers>{session ? children : notAuthenticated}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
