import { useState } from 'react'
import curriculumPhoto from '../assets/curriculum-left.png'

const modules = [
  {
    week: 'Week 01',
    module: 'Module 01',
    title: 'Fundamentals of modern web design',
    rows: [
      'Identify: Find the purpose of the page or project',
      'Listing: List all sections, content types, and key elements',
      'Styling: Decide which modern style aligns with your brand & project.',
      'Solution: Define spacing, padding, and margins consistently.',
    ],
    extra:
      'Design the visual system including colors, typography, spacing, grids, and reusable components for consistency.',
    linkLabel: 'Contact Me',
  },
  {
    week: 'Week 02',
    module: 'Module 3.2',
    title: 'Build complex layouts',
  },
  {
    week: 'Week 03',
    module: 'Module 05',
    title: 'Incorporate modern design features',
  },
  {
    week: 'Week 04',
    module: 'Module 07',
    title: 'Optimize responsiveness',
  },
]

function Curriculum() {
  const [openIndex, setOpenIndex] = useState(0)

  const onToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="curriculum-section">
      <div className="curriculum-inner">
        <div className="curriculum-heading">
          <h2>
            Crack the code to elite
            <br />
            low-code solutions.
          </h2>
          <p className="curriculum-kicker">Curriculum overview</p>
        </div>

        <div className="curriculum-layout">
          <div className="curriculum-photo-card">
            <img src={curriculumPhoto} alt="Student working on laptop" />
          </div>

          <div className="curriculum-panels">
            {modules.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <article
                  className={`module-card${isOpen ? ' module-card-open' : ''}`}
                  key={item.title}
                >
                  <header className="module-header">
                    <div>
                      <p className="module-meta">{`${item.week} · ${item.module}`}</p>
                      <h3>{item.title}</h3>
                    </div>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.title}`}
                      onClick={() => onToggle(index)}
                    >
                      {isOpen ? '−' : '+'}
                    </button>
                  </header>

                  {isOpen && item.rows && (
                    <div className="module-body">
                      {item.rows.map((row, rowIndex) => (
                        <div className="module-row" key={row}>
                          <p>{row}</p>
                          <span>{`0${rowIndex + 1}`}</span>
                        </div>
                      ))}
                      <p className="module-extra">{item.extra}</p>
                      <a href="#">{item.linkLabel}</a>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Curriculum
