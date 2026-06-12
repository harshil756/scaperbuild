import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import QuotePopupProvider from './QuotePopupProvider.jsx'
import SiteScripts from './SiteScripts.jsx'

export default function Layout() {
  return (
    <QuotePopupProvider>
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
      <SiteScripts />
    </QuotePopupProvider>
  )
}
