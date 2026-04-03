const reviews = [
  {
    stars: 5,
    text: 'My son built his own website in 6 weeks! He is so proud and confident now. The projects were actually fun.',
    name: 'Priya Sharma',
    role: 'Mother of Aarav (Class 9)',
    avatarClass: 'avatar-erika',
  },
  {
    stars: 5,
    text: 'Best decision! The small batch meant personal attention. My daughter loved making the quiz game.',
    name: 'Rohan Patil',
    role: 'Father of Ananya (Class 10)',
    avatarClass: 'avatar-daisy',
  },
  {
    stars: 5,
    text: 'Teaching style is very patient and clear. My child looks forward to every Saturday & Sunday class.',
    name: 'Sneha Khan',
    role: 'Mother of Vihaan (Class 8)',
    avatarClass: 'avatar-annalee',
  },
]

function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-inner">
        <h2>
          Don&apos;t just take our word for it, see
          <br />
          what parents & students say.
        </h2>

        <div className="review-cards">
          {reviews.map((item) => (
            <article className="review-card" key={item.name}>
              <p className="review-stars">{'★'.repeat(item.stars)}</p>
              <p className="review-text">{item.text}</p>

              <div className="review-user">
                <span className={`review-avatar ${item.avatarClass}`} aria-hidden="true" />
                <div>
                  <p className="review-name">{item.name}</p>
                  <p className="review-role">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="review-dots" aria-hidden="true">
          <span className="active" />
          <span />
          <span />
        </div>
      </div>
    </section>
  )
}

export default Reviews
