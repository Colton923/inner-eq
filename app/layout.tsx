import 'styles/globals.scss'
import Navbar from 'components/navbar/Navbar'
import SiteContext from 'components/context/SiteContext'
import Footer from 'components/footer/Footer'

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="description" content="Go-Events" />
      </head>
      <body style={{ margin: 0 }}>
        <main>
          <SiteContext>
            <Navbar />
            {children}
            <Footer />
          </SiteContext>
        </main>
      </body>
    </html>
  )
}
