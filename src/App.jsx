import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Learn from './components/learn'
import Curriculum from './components/Curriculum'
import Reviews from './components/Reviews'
import Why from './components/Why'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isEnrollFormOpen, setIsEnrollFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    studentName: '',
    studentNumber: '',
    parentName: '',
    parentWhatsapp: '',
    studentClass: '',
    pricingPlan: 'Complete (Most Popular)',
  })

  const openEnrollForm = (pricingPlan = 'Complete (Most Popular)') => {
    setFormData((prev) => ({ ...prev, pricingPlan }))
    setIsEnrollFormOpen(true)
  }

  const closeEnrollForm = () => {
    setIsEnrollFormOpen(false)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsEnrollFormOpen(false)
  }

  return (
    <main className="landing-page">
      <div className="hero-wrapper">
        <Navbar onEnrollClick={() => openEnrollForm()} />
        <Hero onEnrollClick={() => openEnrollForm()} />
      </div>
      <Learn />
      <Curriculum />
      <Reviews />
      <Why />
      <Pricing onEnrollClick={openEnrollForm} />
      <Faq />
      <Footer />

      {isEnrollFormOpen && (
        <div className="enroll-modal-backdrop" role="presentation" onClick={closeEnrollForm}>
          <div
            className="enroll-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enroll-form-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="enroll-modal-header">
              <h3 id="enroll-form-title">Enrollment Form</h3>
              <button type="button" aria-label="Close enrollment form" onClick={closeEnrollForm}>
                ×
              </button>
            </div>

            <form className="enroll-form" onSubmit={handleSubmit}>
              <div className="enroll-form-column">
                <label>
                  <span className="enroll-form-label-text">
                    Student Name <span className="required-indicator">*</span>
                  </span>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  <span className="enroll-form-label-text">Student Number</span>
                  <input
                    type="tel"
                    name="studentNumber"
                    value={formData.studentNumber}
                    onChange={handleInputChange}
                  />
                </label>

                <label>
                  <span className="enroll-form-label-text">Student Class</span>
                  <input
                    type="text"
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="enroll-form-column">
                <label>
                  <span className="enroll-form-label-text">
                    Parent Name <span className="required-indicator">*</span>
                  </span>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  <span className="enroll-form-label-text">
                    Parent WhatsApp Number <span className="required-indicator">*</span>
                  </span>
                  <input
                    type="tel"
                    name="parentWhatsapp"
                    value={formData.parentWhatsapp}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>

              <label className="enroll-form-full">
                <span className="enroll-form-label-text">
                  Selected Pricing <span className="required-indicator">*</span>
                </span>
                <select name="pricingPlan" value={formData.pricingPlan} onChange={handleInputChange} required>
                  <option value="Starter">Starter - ₹2,000</option>
                  <option value="Complete (Most Popular)">Complete (Most Popular) - ₹4,000</option>
                  <option value="Pro">Pro - ₹5,500</option>
                </select>
              </label>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
