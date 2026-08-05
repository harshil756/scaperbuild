import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import LocationReadMore from './LocationReadMore.jsx'
import LocationPageReviews from './LocationPageReviews.jsx'
import QuotePopupProvider from './QuotePopupProvider.jsx'
import AnalyticsScripts from './AnalyticsScripts.jsx'
import FormSubmissionHandler from './FormSubmissionHandler.jsx'
import SiteScripts from './SiteScripts.jsx'
import { SiteContactProvider } from '../hooks/useSiteContact.js'

export default function Layout() {
  return (
    <SiteContactProvider>
      <QuotePopupProvider>
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">
          <Outlet />
        </main>
        <Footer />
        <LocationReadMore />
        <LocationPageReviews />
        <FormSubmissionHandler />
        <AnalyticsScripts />
        <SiteScripts />
      </QuotePopupProvider>
    </SiteContactProvider>
  )
}
