import { AtSign, Mail, Phone, Twitter, Youtube } from 'lucide-react'
import Instagram from 'lucide-react/dist/esm/icons/instagram.js'
import mentorAvatar from '../assets/mentor-avatar.png'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="mentor-header">
          <div className="mentor-avatar-wrap">
            <img src={mentorAvatar} alt="Gautham Krishna" />
            <a className="mentor-chip mentor-chip-mail" href="#" aria-label="Email mentor">
              <Mail />
            </a>
            <a className="mentor-chip mentor-chip-linkedin" href="#" aria-label="Mentor LinkedIn">
              <AtSign />
            </a>
          </div>

          <p className="mentor-name">Gautham Krishna</p>
        </div>

        <h2>Meet the mentor</h2>

        <form className="footer-subscribe" onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Your email..." aria-label="Email address" />
          <button type="submit">Subscribe</button>
        </form>

        <div className="footer-links footer-links--icons" aria-label="Social and contact links">
          <a href="#" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="#" aria-label="Email">
            <Mail />
          </a>
          <a href="#" aria-label="Phone">
            <Phone />
          </a>
          <a href="#" aria-label="YouTube">
            <Youtube />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter />
          </a>
        </div>

        <div className="footer-bottom">
          <p>localhost classes</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
