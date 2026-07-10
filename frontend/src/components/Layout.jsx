import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import MobileStickyQuoteCta from './MobileStickyQuoteCta.jsx'
import LocationReadMore from './LocationReadMore.jsx'
import LocationPageReviews from './LocationPageReviews.jsx'
import QuotePopupProvider from './QuotePopupProvider.jsx'
import AnalyticsScripts from './AnalyticsScripts.jsx'
import FormSubmissionHandler from './FormSubmissionHandler.jsx'
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
      <MobileStickyQuoteCta />
      <LocationReadMore />
      <LocationPageReviews />
      <FormSubmissionHandler />
      <AnalyticsScripts />
      <SiteScripts />
    </QuotePopupProvider>
  )
}
