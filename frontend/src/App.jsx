import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { blogPostRoutes } from './blogPostRoutes.jsx'
import { commercialOfficeRoutes } from './commercialOfficeRoutes.jsx'
import { locationRoutes } from './locationRoutes.jsx'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ThankYouPage from './pages/ThankYouPage.jsx'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx'
import BlogPostCmsPage from './pages/blog/BlogPostCmsPage.jsx'
import { serviceRoutes } from './serviceRoutes.jsx'
import TrustIndexAutoMount from './components/TrustIndexAutoMount.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TrustIndexAutoMount />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="thank-you" element={<ThankYouPage />} />
          {serviceRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {commercialOfficeRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {locationRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {blogPostRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path=":slug" element={<BlogPostCmsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
