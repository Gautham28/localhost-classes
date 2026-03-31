import heroCard from '../assets/hero-card.png'

const points = ['Zero to hero in 30 days', 'Real client project', 'Lifetime support']

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Master low-code
          <br />
          development to create
          <br />
          <span className="heading-highlight">high-converting</span> sites
        </h1>

        <ul className="hero-points">
          {points.map((point) => (
            <li key={point}>
              <span aria-hidden="true" className="point-check">
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>

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
