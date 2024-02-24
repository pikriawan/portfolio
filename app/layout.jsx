import AppBar from '../component/app-bar'
import Eruda from '../component/eruda'
import { inter, poppins } from '../lib/font'
import './global.css'

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${poppins.variable}`} lang="en">
      <body>
        {process.env.NODE_ENV === 'development' && <Eruda />}
        <AppBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}