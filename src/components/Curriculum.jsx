import { useState } from 'react'
import curriculumPhoto from '../assets/curriculum-left.png'

const modules = [
  {
    week: 'Week 01',
    module: 'Module 01',
    title: 'HTML Fundamentals',
    rows: [
      'Understanding how websites work',
      'Building structure with semantic HTML',
      'Forms, images, links & lists',
    ],
  },
  {
    week: 'Week 02',
    module: 'Module 02',
    title: 'CSS Styling & Layouts',
    rows: [
      'Colors, fonts, animations & hover effects',
      'Flexbox for modern layouts',
      'Making websites responsive (mobile-friendly)',
    ],
  },
  {
    week: 'Week 03',
    module: 'Module 03',
    title: 'First Major Project',
    rows: [
      'Build a Personal Portfolio Website',
      'Combine HTML + CSS to create something beautiful',
    ],
  },
  {
    week: 'Week 04',
    module: 'Module 04',
    title: 'JavaScript Basics',
    rows: [
      'Making websites interactive',
      'Buttons, events & DOM manipulation',
    ],
  },
  {
    week: 'Week 05',
    module: 'Module 05',
    title: 'Interactive Projects',
    rows: ['Build a Fun Quiz Game with scoring'],
  },
  {
    week: 'Week 06',
    module: 'Module 06',
    title: 'Git & GitHub',
    rows: ['Professional developer workflow', 'Pushing code and deploying live websites'],
  },
  {
    week: 'Week 07',
    module: 'Module 07',
    title: 'Advanced Interactivity',
    rows: ['Build a Smart To-Do List App with local storage'],
  },
  {
    week: 'Week 08',
    module: 'Module 08',
    title: 'Final Polish & Showcase',
    rows: ['Deploy all 4 projects', 'Student showcase + portfolio review'],
  },
]

function Curriculum() {
  const [openIndex, setOpenIndex] = useState(0)

  const onToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="curriculum-section" id="curicullum">
      <div className="curriculum-inner">
        <div className="curriculum-heading">
          <h2>
            Crack the code to build real websites
            <br />
            with confidence.
          </h2>
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
                      <p className="module-meta">
                        <span>{item.week}</span> · <span>{item.module}</span>
                      </p>
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
