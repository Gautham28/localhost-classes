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
  const activePlan = plans.find((plan) => plan.name === selectedPlan) ?? plans[1]

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
                  onChange={() => setSelectedPlan(plan.name)}
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
              <button type="button">Enroll Now</button>
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
    </section>
  )
}

export default Pricing
