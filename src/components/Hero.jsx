import heroCard from '../assets/hero-card.png'

const points = ['Zero to hero in 30 days', 'Real client project', 'Lifetime support']

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

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title-list">
          <h1>
            Master <span className="hero-soft">low-code</span>
            <br />
            development to create
            <br />
            <span className="heading-highlight">high-converting</span> sites
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

        <button className="hero-cta" type="button">
          Enroll Now For $399
        </button>
      </div>

      <div className="hero-media" aria-hidden="true">
        <div className="review-badge">
          <div className="badge-avatars">
            <span />
            <span />
            <span />
          </div>
          <div className="badge-copy">
            <p className="stars">★★★★★ 4.9</p>
            <p>Based on 2,169 reviews</p>
          </div>
        </div>

        <div className="media-card">
          <img src={heroCard} alt="Student working on a laptop" />
        </div>

        <div className="hero-cubes">
          <span className="cube cube-main" />
          <span className="cube cube-side" />
        </div>
      </div>

      <div className="cloud-layer" />
    </section>
  )
}

export default Hero
