const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Curriculum', href: '#', active: false },
  { label: 'Essentials', href: '#', active: false, hasCaret: true },
  { label: 'Contact', href: '#', active: false },
]

function Navbar() {
  return (
    <header className="navbar-shell">
      <nav className="navbar">
        <a className="brand" href="#" aria-label="Localhost Classes home">
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

        <button className="enroll-btn" type="button">
          Enroll Today
        </button>
      </nav>
    </header>
  )
}

export default Navbar
