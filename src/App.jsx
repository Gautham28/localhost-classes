import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Learn from './components/learn'
import Curriculum from './components/Curriculum'
import Reviews from './components/Reviews'
import Why from './components/Why'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import './App.css'

function App() {
  return (
    <main className="landing-page">
      <div className="hero-wrapper">
        <Navbar />
        <Hero />
      </div>
      <Learn />
      <Curriculum />
      <Reviews />
      <Why />
      <Pricing />
      <Faq />
    </main>
  )
}

export default App
