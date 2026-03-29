import { Helmet } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import PugletPrivacy from './pages/PugletPrivacy.tsx'

function App() {
  return (
    <div>
       <Helmet>
        <title>Podsparx | Digital Product Studio</title>
        <meta name="description" content="PodSparx is a tech boutique studio crafting iOS apps, web apps, SaaS products, and AI-powered experiences - built with precision and purpose." />
        <link rel="canonical" href="https://podsparx.com/" />

        <meta property="og:title" content="PodSparx | Digital Product Studio" />
        <meta property="og:description" content="PodSparx is a tech boutique studio crafting iOS apps, web apps, SaaS products, and AI-powered experiences - built with precision and purpose." />
        <meta property="og:image" content="https://podsparx.com/og-image.jpg" />
        <meta property="og:url" content="https://podsparx.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Podsparx | Digital Product Studio" />
        <meta name="twitter:description" content="PodSparx is a tech boutique studio crafting iOS apps, web apps, SaaS products, and AI-powered experiences - built with precision and purpose." />
        <meta name="twitter:image" content="https://podsparx.com/og-image.jpg" />
      </Helmet>

      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="pt-20">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
        } />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/privacy/puglet" element={<PugletPrivacy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App