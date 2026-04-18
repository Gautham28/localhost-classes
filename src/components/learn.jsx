const learnCards = [
  {
    title: 'HTML Fundamentals',
    text: 'Learn how to structure beautiful web pages using proper HTML5 and semantic tags.',
    icon: 'html',
  },
  {
    title: 'Modern CSS Styling',
    text: 'Create stunning designs with colors, fonts, animations, Flexbox, and responsive layouts.',
    icon: 'css',
  },
  {
    title: 'JavaScript Interactivity',
    text: 'Make websites come alive - add buttons, quizzes, animations, and dynamic content.',
    icon: 'javascript',
  },
  {
    title: 'Git & GitHub Workflow',
    text: 'Learn real developer skills - version control, collaboration, and deploying websites live on the internet.',
    icon: 'git',
  },
  {
    title: '4 Real Portfolio Projects',
    text: 'Build and deploy 4 complete projects: Personal Portfolio, Quiz Game, Goa Tourism Page, and Smart To-Do List App.',
    icon: 'projects',
  },
  {
    title: 'Professional Portfolio + Confidence',
    text: 'End with a strong GitHub portfolio + certificate that your child can proudly show to teachers and friends.',
    icon: 'portfolio',
  },
]

function CardIcon({ type }) {
  if (type === 'html') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 7L4 12L8 17" />
        <path d="M16 7L20 12L16 17" />
        <path d="M13 5L11 19" />
      </svg>
    )
  }

  if (type === 'css') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 7H19" />
        <circle cx="15" cy="7" r="1.8" />
        <path d="M5 12H19" />
        <circle cx="9" cy="12" r="1.8" />
        <path d="M5 17H19" />
        <circle cx="17" cy="17" r="1.8" />
      </svg>
    )
  }

  if (type === 'javascript') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L4 14H11L10 22L20 9H12L13 2Z" />
      </svg>
    )
  }

  if (type === 'git') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="6" cy="18" r="2.2" />
        <circle cx="18" cy="12" r="2.2" />
        <path d="M6 8.2V15.8" />
        <path d="M8.1 6.8L15.9 11.2" />
        <path d="M8.1 17.2L15.9 12.8" />
      </svg>
    )
  }

  if (type === 'projects') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 9.5C4 8.67 4.67 8 5.5 8H9.5L11 6.5H18.5C19.33 6.5 20 7.17 20 8V18.5C20 19.33 19.33 20 18.5 20H5.5C4.67 20 4 19.33 4 18.5V9.5Z" />
        <path d="M8 12H16" />
        <path d="M8 15.5H13" />
      </svg>
    )
  }

  if (type === 'portfolio') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 9H16V14C16 16.2 14.2 18 12 18C9.8 18 8 16.2 8 14V9Z" />
        <path d="M8 9H6.5C6.5 11 7.2 12 8 12" />
        <path d="M16 9H17.5C17.5 11 16.8 12 16 12" />
        <path d="M10 18V20H14V18" />
        <path d="M7 21H17" />
        <path d="M12 5V8" />
      </svg>
    )
  }

  return null
}

function Learn() {
  return (
    <section className="learn-section">
      <div className="learn-inner">
        <div className="learn-title-wrap">
          <h2>
            What You Will learn
          </h2>
        </div>

        <div className="learn-grid">
          {learnCards.map((card) => (
            <article className="learn-card" key={card.title}>
              <span className="learn-icon">
                <CardIcon type={card.icon} />
              </span>
              <div className="learn-copy">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Learn
