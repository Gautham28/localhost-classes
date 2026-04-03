import { CheckCircle2, CircleX } from 'lucide-react'

const notForYou = [
  'Your child is looking for only advanced topics (this is beginner-friendly)',
  'You want fully self-paced with no live classes',
  'Your child prefers only theory without projects',
  'You want completely free resources only',
]

const forYou = [
  'Your child is a complete beginner and wants clear guidance',
  'You want fun, project-based learning with real results',
  'Your child needs small batch personal attention',
  'You want them to build a professional GitHub portfolio',
  'You want live interactive classes + recordings',
]

function Why() {
  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="why-heading-wrap">
          <h2>
            Is this course for your child?
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
