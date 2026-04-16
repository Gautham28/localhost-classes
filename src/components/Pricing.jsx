import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '₹2,000',
    featuresLeft: ['4-week beginner program', 'HTML + CSS foundations', '2 simple guided projects'],
    featuresRight: ['Live classes + recordings', 'Practice assignments', 'Beginner-friendly pace'],
    note: "Great for kids starting web development for the first time.",
  },
  {
    name: 'Complete (Most Popular)',
    price: '₹4,000',
    featuresLeft: [
      'Full 8-week live program',
      'Project-based learning approach',
      'Small batches and personal attention',
      'Portfolio-ready GitHub projects',
    ],
    featuresRight: ['Live classes + recordings', 'Certificate on completion', 'Dedicated doubt support'],
    note: "Pick the plan that best fits your child's learning pace and goals.",
  },
  {
    name: 'Pro',
    price: '₹5,500',
    featuresLeft: ['Everything in Complete', '1:1 portfolio review session', 'Priority doubt clearing'],
    featuresRight: ['Extra feedback + polish', 'Advanced project guidance', 'Personalized roadmap support'],
    note: 'Best for students who want deeper mentoring and stronger final polish.',
  },
]

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1].name)
  const [isEnrollFormOpen, setIsEnrollFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    studentName: '',
    studentNumber: '',
    parentName: '',
    parentWhatsapp: '',
    studentSchool: '',
    pricingPlan: plans[1].name,
  })
  const activePlan = plans.find((plan) => plan.name === selectedPlan) ?? plans[1]

  const handlePlanChange = (planName) => {
    setSelectedPlan(planName)
    setFormData((prev) => ({ ...prev, pricingPlan: planName }))
  }

  const openEnrollForm = () => {
    setFormData((prev) => ({ ...prev, pricingPlan: selectedPlan }))
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
    <section className="pricing-section">
      <div className="pricing-inner">
        <div className="pricing-heading">
          <h2>
            Choose the right plan
            <br />
            for your child
          </h2>
        </div>

        <div className="pricing-box">
          <div className="plan-list">
            {plans.map((plan) => (
              <label className={`plan-item${selectedPlan === plan.name ? ' plan-item-selected' : ''}`} key={plan.name}>
                <input
                  className="plan-radio-input"
                  type="radio"
                  name="pricing-plan"
                  value={plan.name}
                  checked={selectedPlan === plan.name}
                  onChange={() => handlePlanChange(plan.name)}
                />
                <span className={`plan-radio${selectedPlan === plan.name ? ' active' : ''}`} aria-hidden="true" />
                <div className="plan-meta">
                  <h3>{plan.name}</h3>
                </div>
                <p className="plan-price">{plan.price}</p>
              </label>
            ))}
          </div>

          <div className="pricing-details">
            <div className="feature-columns">
              <ul>
                {activePlan.featuresLeft.map((item) => (
                  <li key={item}>
                    <span className="feature-check" aria-hidden="true">
                      <CheckCircle2 />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <ul>
                {activePlan.featuresRight.map((item) => (
                  <li key={item}>
                    <span className="feature-check" aria-hidden="true">
                      <CheckCircle2 />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pricing-note-row">
              <p>{activePlan.note}</p>
              <button type="button" onClick={openEnrollForm}>
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-trust">
          <p>
            <span aria-hidden="true">◉</span>
            Beginner friendly
          </p>
          <p>
            <span aria-hidden="true">◍</span>
            Live mentorship support
          </p>
          <p>
            <span aria-hidden="true">◎</span>
            Project-based outcomes
          </p>
        </div>
      </div>

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
              <label>
                Student Name
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Student Number
                <input
                  type="tel"
                  name="studentNumber"
                  value={formData.studentNumber}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Parent Name
                <input type="text" name="parentName" value={formData.parentName} onChange={handleInputChange} required />
              </label>

              <label>
                Parent WhatsApp Number
                <input
                  type="tel"
                  name="parentWhatsapp"
                  value={formData.parentWhatsapp}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Student School
                <input
                  type="text"
                  name="studentSchool"
                  value={formData.studentSchool}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Selected Pricing
                <select name="pricingPlan" value={formData.pricingPlan} onChange={handleInputChange} required>
                  {plans.map((plan) => (
                    <option key={plan.name} value={plan.name}>
                      {plan.name} - {plan.price}
                    </option>
                  ))}
                </select>
              </label>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Pricing
