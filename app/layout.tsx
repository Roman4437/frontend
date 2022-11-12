import Header from '../components/Header'
import '../styles/globals.css'

interface RootLayoutProps {
  children: React.ReactElement
}

export default function RootLayout({children}: RootLayoutProps){
  return (
    <html>
      <head>
        <title>Amazon.com</title>
      </head>
      <body>
        <Header />
        <main className="max-w-screen-2xl mx-auto bg-slate-100">
          {children}
        </main> 
      </body>
    </html>
  )
}

