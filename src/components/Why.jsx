import { CheckCircle2, CircleX } from 'lucide-react'

const notForYou = [
  'Experienced devs seeking advanced-only topics',
  'Those skipping hands-on practice or 1v1 sessions',
  'People wanting fully self-paced, no mentorship',
  'Learners only seeking theory, no real application',
  'Not applying lessons to actual projects',
]

const forYou = [
  'Beginners wanting clear low-code guidance',
  'Freelancers/designers building websites fast',
  'Founders needing practical project guidance',
  'Struggling with starting or workflows',
  'Want personalized feedback & support',
]

function Why() {
  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="why-heading-wrap">
          <h2>
            Is this
            <br />
            for you?
          </h2>
        </div>

        <div className="why-panels">
          <article className="why-panel why-panel-negative">
            <h3>This is not for you if:</h3>
            <ul className="why-list">
              {notForYou.map((item) => (
                <li key={item}>
                  <span className="why-mark why-mark-x" aria-hidden="true">
                    <CircleX />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="why-panel why-panel-positive">
            <h3>This is for you if:</h3>
            <ul className="why-list">
              {forYou.map((item) => (
                <li key={item}>
                  <span className="why-mark why-mark-check" aria-hidden="true">
                    <CheckCircle2 />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Why
