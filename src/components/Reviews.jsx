const reviews = [
  {
    stars: 5,
    text: 'Personalized guidance ensured I was always moving forward, progressing faster than I ever thought. A true game-changer.',
    name: 'Erika Austin',
    role: 'Developer',
    avatarClass: 'avatar-erika',
  },
  {
    stars: 5,
    text: 'His teaching style is simple and incredibly boosting. He broke down complex concepts into easy steps, making them approachable.',
    name: 'Daisy Boylan',
    role: 'Designer',
    avatarClass: 'avatar-daisy',
  },
  {
    stars: 4,
    text: 'I was stuck for months trying to figure out low-code tools on my own but this made everything crystal clear. Each session was actionable.',
    name: 'Annalee Jackson',
    role: 'Head of idea',
    avatarClass: 'avatar-annalee',
  },
]

function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-inner">
        <p className="reviews-watermark" aria-hidden="true">
          Reviews
        </p>

        <h2>
          Don&apos;t just take our word for it — see
          <br />
          what our clients have to say about their
          <br />
          Voltiz experience.
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
