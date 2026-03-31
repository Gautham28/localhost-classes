const navItems = ['Home', 'Curriculum', 'Essentials', 'Contact']

function Navbar() {
  return (
    <header className="navbar-shell">
      <nav className="navbar">
        <a className="brand" href="#" aria-label="Localhost Classes home">
          <img src="/localhostclasseslogo.png" alt="Localhost Classes" />
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
              {item === 'Essentials' && <span className="caret">▾</span>}
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
