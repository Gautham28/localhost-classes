import { useState } from 'react'

const faqItems = [
  {
    question: 'Who is this course for?',
    answer:
      'This course is perfect for anyone who want to learn practical web development. It is beginner-friendly, no prior coding experience is needed.',
  },
  {
    question: 'What will I actually learn?',
    answer:
      'Your child will learn HTML, CSS, JavaScript, Git & GitHub, and how to deploy live websites. By the end of 8 weeks, they will have built and deployed 4 real projects — a Personal Portfolio, Interactive Quiz Game, Goa Tourism Landing Page, and a Smart To-Do List App.',
  },
  {
    question: 'Do I need to buy any software or tools?',
    answer:
      'No. Everything is completely free.\n• A laptop/desktop\n• Stable internet connection\n• VS Code (free editor)',
  },
  {
    question: 'What is the class schedule?',
    answer:
      'Classes are held twice a week:\n• Every Saturday and Sunday\n• Duration: 75–90 minutes per class\n• Timings will be decided based on the batch (evening slots preferred)',
  },
  {
    question: 'What if my child misses a class?',
    answer:
      'All classes are recorded and shared with students. They can watch the recording anytime and still complete the projects.',
  },
  {
    question: 'How big is the batch?',
    answer:
      'We keep batches small (maximum 10–15 students) so every child gets personal attention and doubt clearing.',
  },
  {
    question: 'Will my child get a certificate?',
    answer:
      'Yes. Every student receives a Course Completion Certificate along with their own GitHub portfolio link containing 4 live projects.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'Full refund is available if requested before the second class. After that, refunds are case-by-case.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const onToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="faq-heading">
          <h2>
            Get every single answer
            <br />
            from here!
          </h2>
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
