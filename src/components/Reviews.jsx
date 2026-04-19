const reviews = [
  {
    stars: 5,
    text: "It's pretty well going on. Gautam is very good at teaching it perfectly, and whenever I'm missing the session I'm able to cover the thing with the recording session.",
    name: 'Pritam',
    role: 'Student',
  },
  {
    stars: 5,
    text: 'It was a great workshop. We got to learn a lot of new things.',
    name: 'Saish Sunil Kandolkar',
    role: 'Student',
  },
  {
    stars: 5,
    text: "Overall I think that that course was really good. I'm glad that I took it. It took a fast pace at times but the recordings helped for that matter. It was pretty informative as well.",
    name: 'Naysa',
    role: 'Student',
  },
]

function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
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
                <div>
                  <p className="review-name">{item.name}</p>
                  <p className="review-role">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
