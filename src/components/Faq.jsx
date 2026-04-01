import { useState } from 'react'

const faqItems = [
  {
    question: 'Are programs detailed with key info?',
    answer:
      'This mentorship is perfect for beginners, designers, freelancers, and founders who want to master low-code tools quickly. If you want direction, confidence, accountability, and real results — this is built for you.',
  },
  {
    question: 'Is contact/support information visible?',
    answer:
      'Yes. You will get direct contact details and support channels so you can ask questions and stay unblocked throughout the program.',
  },
  {
    question: 'Does it follow accessibility standards?',
    answer:
      'The training follows clear design principles that prioritize readability, structure, and usability so projects are easier for all users to navigate.',
  },
  {
    question: 'Is the navigation simple and clear?',
    answer:
      'Absolutely. We focus on straightforward site architecture and intuitive navigation patterns users can understand in seconds.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const onToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <div className="faq-heading">
          <h2>
            Get every single answer
            <br />
            from here!
          </h2>
          <p className="faq-kicker">Any question left?</p>
        </div>

        <div className="faq-box">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article className={`faq-item${isOpen ? ' faq-item-open' : ''}`} key={item.question}>
                <div className="faq-row">
                  <h3>{item.question}</h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.question}`}
                    onClick={() => onToggle(index)}
                  >
                    {isOpen ? '−' : '+'}
                  </button>
                </div>

                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
