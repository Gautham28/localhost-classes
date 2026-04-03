import { CheckCircle2 } from 'lucide-react'

const plans = [
  {
    name: 'Basic plan',
    subtitle: 'Build your low-code foundation',
    price: 399,
    selected: false,
  },
  {
    name: 'Advance plan',
    subtitle: 'Enterprise-grade low-code systems',
    price: 499,
    selected: true,
  },
  {
    name: 'Corporate plan',
    subtitle: 'Powerful low-code solutions',
    price: 999,
    selected: false,
  },
]

const leftFeatures = [
  'Advanced Low-code topics',
  'Community learning access',
  'Guided beginner lessons',
  'Ready-made core templates',
]

const rightFeatures = ['Certification included', 'Custom project review', 'Email support']

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-inner">
        <div className="pricing-heading">
          <h2>
            Competitive price
            <br />
            & plans
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
                </div>
                <p className="plan-price">{`$${plan.price}`}</p>
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
              <p>Not sure? Try Pro Plan free for 7 days! No credit card required.</p>
              <button type="button">Enroll Now</button>
            </div>
          </div>
        </div>

        <div className="pricing-trust">
          <p>
            <span aria-hidden="true">◉</span>
            On-time file delivery
          </p>
          <p>
            <span aria-hidden="true">◍</span>
            Providing security solutions
          </p>
          <p>
            <span aria-hidden="true">◎</span>
            24/7 online support
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
