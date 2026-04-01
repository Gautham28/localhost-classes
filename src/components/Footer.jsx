import mentorAvatar from '../assets/mentor-avatar.png'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="mentor-header">
          <p className="mentor-kicker">Mentor</p>

          <div className="mentor-avatar-wrap">
            <img src={mentorAvatar} alt="Hamira Hoque Mewsi" />
            <a className="mentor-chip mentor-chip-mail" href="#" aria-label="Email mentor">
              ✉
            </a>
            <a className="mentor-chip mentor-chip-linkedin" href="#" aria-label="Mentor LinkedIn">
              in
            </a>
          </div>

          <p className="mentor-name">Hamira Hoque Mewsi</p>
        </div>

        <h2>
          Meet the mentor
          <br />
          behind your low-code
          <br />
          mastery journey
        </h2>

        <form className="footer-subscribe" onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Your email..." aria-label="Email address" />
          <button type="submit">Subscribe</button>
        </form>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">T & C</a>
          <a href="#">Refund Policy</a>
          <a href="#">404</a>
        </div>

        <div className="footer-bottom">
          <p>Copyright & design by @templatemunk - 2026</p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="X">
              x
            </a>
            <a href="#" aria-label="Instagram">
              o
            </a>
            <a href="#" aria-label="YouTube">
              ▷
            </a>
          </div>
        </div>
      </div>

      <div className="footer-clouds" />
    </footer>
  )
}

export default Footer
