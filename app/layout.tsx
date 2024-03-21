import { ReactElement } from 'react'
import Providers from './providers'
import { checkSession } from './_lib/check-session'

export default async function RootLayout({
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
        <title>Linx Security</title>
      </head>
      <body>
        <Providers>{session ? children : notAuthenticated}</Providers>
      </body>
    </html>
  )
}
