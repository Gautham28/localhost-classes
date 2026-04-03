import { CheckCircle2 } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    subtitle: '4 Weeks • HTML + CSS Basics • 2 Simple Projects • Live classes + Recordings',
    price: '₹2,000',
    selected: false,
  },
  {
    name: 'Complete (Most Popular)',
    subtitle:
      'Full 8 Weeks • HTML, CSS, JavaScript + GitHub • 4 Live Projects + Deployment • Certificate + Portfolio • Doubt Support',
    price: '₹4,000',
    selected: true,
  },
  {
    name: 'Pro',
    subtitle:
      'Everything in Complete • 1:1 Portfolio Review Session • Priority Doubt Clearing • Extra Feedback + Polish',
    price: '₹5,500',
    selected: false,
  },
]

const leftFeatures = [
  'Full 8-week live program',
  'Project-based learning approach',
  'Small batches and personal attention',
  'Portfolio-ready GitHub projects',
]

const rightFeatures = [
  'Live classes + recordings',
  'Certificate on completion',
  'Dedicated doubt support',
]

function Pricing() {
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
              <article className={`plan-item${plan.selected ? ' plan-item-selected' : ''}`} key={plan.name}>
                <span className={`plan-radio${plan.selected ? ' active' : ''}`} aria-hidden="true" />
                <div className="plan-meta">
                  <h3>{plan.name}</h3>
                  <p>{plan.subtitle}</p>
                  <button className="plan-enroll" type="button">
                    Enroll Now
                  </button>
                </div>
                <p className="plan-price">{plan.price}</p>
              </article>
            ))}
          </div>

          <div className="pricing-details">
            <div className="feature-columns">
              <ul>
                {leftFeatures.map((item) => (
                  <li key={item}>
                    <span className="feature-check" aria-hidden="true">
                      <CheckCircle2 />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <ul>
                {rightFeatures.map((item) => (
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
              <p>Pick the plan that best fits your child&apos;s learning pace and goals.</p>
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
