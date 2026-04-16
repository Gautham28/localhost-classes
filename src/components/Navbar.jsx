const navItems = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Curicullum', href: '#curicullum', active: false },
  { label: 'Reviews', href: '#reviews', active: false },
  { label: 'FAQ', href: '#faq', active: false },
]

function Navbar({ onEnrollClick }) {
  return (
    <header className="navbar-shell">
      <nav className="navbar">
        <a className="brand" href="#home" aria-label="Localhost Classes home">
          <img src="/localhostclasseslogo.png" alt="Localhost Classes" />
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a className={item.active ? 'active' : ''} href={item.href}>
                {item.label}
              </a>
              {item.hasCaret && <span className="caret">▾</span>}
            </li>
          ))}
        </ul>

        <button className="enroll-btn" type="button" onClick={onEnrollClick}>
          Enroll Today
        </button>
      </nav>
    </header>
  )
}

export default Navbar
