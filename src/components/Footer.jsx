import { AtSign, Camera, Globe, Mail, Play, X } from 'lucide-react'
import mentorAvatar from '../assets/mentor-avatar.png'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="mentor-header">
          <div className="mentor-avatar-wrap">
            <img src={mentorAvatar} alt="Hamira Hoque Mewsi" />
            <a className="mentor-chip mentor-chip-mail" href="#" aria-label="Email mentor">
              <Mail />
            </a>
            <a className="mentor-chip mentor-chip-linkedin" href="#" aria-label="Mentor LinkedIn">
              <AtSign />
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
              <Globe />
            </a>
            <a href="#" aria-label="X">
              <X />
            </a>
            <a href="#" aria-label="Instagram">
              <Camera />
            </a>
            <a href="#" aria-label="YouTube">
              <Play />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-clouds" />
    </footer>
  )
}

export default Footer
