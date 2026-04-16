import heroCard from '../assets/hero-card.png'

const points = [
  'Zero to Hero in 8 Weeks',
  'Small Batches (10-15 students)',
  'Live Classes + Recordings',
]

function PointIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="currentColor" fillOpacity="0.25" />
      <path
        d="M38 21L24.8 34.2L18 27.4"
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Hero({ onEnrollClick }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-title-list">
          <h1>
            <span className="hero-line">Master Web Development to</span>
            <span className="hero-line">
              Create <span className="heading-highlight">Beautiful & Interactive</span>
            </span>
            <span className="hero-line">Websites</span>
          </h1>

          <ul className="hero-points">
            {points.map((point) => (
              <li key={point}>
                <span aria-hidden="true" className="point-check">
                  <PointIcon />
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="hero-subheadline">
          From zero to building 4 real, live websites in 8 weeks. Fun, project-based learning for
          school kids (8th-12th).
        </p>

        <button className="hero-cta" type="button" onClick={onEnrollClick}>
          Enroll Now
        </button>
      </div>

      <div className="hero-media" aria-hidden="true">
        <div className="media-card">
          <img src={heroCard} alt="Student working on a laptop" />
        </div>
      </div>

    </section>
  )
}

export default Hero
