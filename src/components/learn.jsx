const learnCards = [
  {
    title: 'HTML Fundamentals',
    text: 'Learn how to structure beautiful web pages using proper HTML5 and semantic tags.',
    icon: 'stress',
  },
  {
    title: 'Modern CSS Styling',
    text: 'Create stunning designs with colors, fonts, animations, Flexbox, and responsive layouts.',
    icon: 'chart',
  },
  {
    title: 'JavaScript Interactivity',
    text: 'Make websites come alive - add buttons, quizzes, animations, and dynamic content.',
    icon: 'search',
  },
  {
    title: 'Git & GitHub Workflow',
    text: 'Learn real developer skills - version control, collaboration, and deploying websites live on the internet.',
    icon: 'stairs',
  },
  {
    title: '4 Real Portfolio Projects',
    text: 'Build and deploy 4 complete projects: Personal Portfolio, Quiz Game, Goa Tourism Page, and Smart To-Do List App.',
    icon: 'support',
  },
  {
    title: 'Professional Portfolio + Confidence',
    text: 'End with a strong GitHub portfolio + certificate that your child can proudly show to teachers and friends.',
    icon: 'mentor',
  },
]

function CardIcon({ type }) {
  if (type === 'chart') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20V11" />
        <path d="M10 20V8" />
        <path d="M16 20V13" />
        <path d="M22 20V6" />
        <path d="M4 6.5L10 10L16.2 5.5L22 2.5" />
        <circle cx="4" cy="6.5" r="1.15" />
        <circle cx="10" cy="10" r="1.15" />
        <circle cx="16.2" cy="5.5" r="1.15" />
        <circle cx="22" cy="2.5" r="1.15" />
      </svg>
    )
  }

  if (type === 'search') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="10.2" cy="10.2" r="6.8" />
        <path d="M15.6 15.6L21 21" />
      </svg>
    )
  }

  if (type === 'stairs') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2.5 20.5H21.5" />
        <path d="M4.5 18.5H8.5V14.5H12.5V10.5H16.5V6.5H20.5" />
        <path d="M20.5 6.5L18.5 8.5" />
        <path d="M20.5 6.5L18.5 4.5" />
      </svg>
    )
  }

  if (type === 'support') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 13V11.4C6 7.87 8.69 5 12 5C15.31 5 18 7.87 18 11.4V13" />
        <rect x="3" y="12" width="4" height="6.2" rx="1.2" />
        <rect x="17" y="12" width="4" height="6.2" rx="1.2" />
        <path d="M8.5 18.2H11.5" />
        <path d="M12 18.2C12 19.5 13 20.5 14.2 20.5H16.8" />
        <path d="M9 10.7H15" />
      </svg>
    )
  }

  if (type === 'mentor') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="10.5" y="3.3" width="10" height="7.5" rx="1.2" />
        <path d="M14 13.3H3.5C2.67 13.3 2 13.97 2 14.8V19.8" />
        <circle cx="6.5" cy="10.5" r="2.5" />
        <path d="M16 7.1H18.3" />
        <path d="M14.2 18.2L10.4 20.6" />
        <path d="M20.2 13.2L17.3 16.3L15.5 14.7" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="9.8" r="4.8" />
      <path d="M5.4 21L6.7 16.3" />
      <path d="M18.6 21L17.3 16.3" />
      <path d="M7.7 14.7L9.6 17.7" />
      <path d="M16.3 14.7L14.4 17.7" />
      <path d="M9.4 9.4C9.9 10.1 10.8 10.6 12 10.6C13.2 10.6 14.1 10.1 14.6 9.4" />
    </svg>
  )
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
