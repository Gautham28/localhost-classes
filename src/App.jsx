import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Learn from './components/learn'
import './App.css'

function App() {
  return (
    <main className="landing-page">
      <div className="hero-wrapper">
        <Navbar />
        <Hero />
      </div>
      <Learn />
    </main>
  )
}

export default App
