import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">Zen Wander Wheels</p>
          <p>
            Japanese JDM Class C camper vans for rent and sale — wet bathrooms,
            sleep 3–6.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="site-footer__links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/fleet">Fleet</Link>
            </li>
            <li>
              <Link to="/buy">Buy</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="site-footer__contact">
          <p>
            <a href="mailto:hello@zenwanderwheels.com">
              hello@zenwanderwheels.com
            </a>
          </p>
          <p>
            <a href="tel:+15555550199">(555) 555-0199</a>
          </p>
        </div>
      </div>
      <p className="site-footer__copy">
        © {year} Zen Wander Wheels. All rights reserved.
      </p>
    </footer>
  )
}
