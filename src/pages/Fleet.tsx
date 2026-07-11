import { Link } from 'react-router-dom'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'

export function Fleet() {
  return (
    <article className="page">
      <div className="page__inner">
        <h1>Rental fleet</h1>
        <p className="page__lede">
          Japanese JDM Class C camper vans with wet bathrooms and sleeping space
          for three to six — ready for your next route.
        </p>

        <div className="fleet-list">
          <section className="fleet-item" aria-labelledby="fleet-a">
            <PhotoPlaceholder
              label="Class C rental camper van exterior"
              aspect="wide"
            />
            <h2 id="fleet-a">Class C road camper</h2>
            <ul>
              <li>Sleeps 3–6</li>
              <li>Wet bathroom on board</li>
              <li>Galley and living space</li>
            </ul>
            <Link to="/contact" className="text-link">
              Request rental dates
            </Link>
          </section>

          <section className="fleet-item" aria-labelledby="fleet-b">
            <PhotoPlaceholder
              label="Second Class C rental camper van exterior"
              aspect="wide"
            />
            <h2 id="fleet-b">Family Class C</h2>
            <ul>
              <li>Sleeps up to 6</li>
              <li>Wet bathroom</li>
              <li>Flexible berth layouts</li>
            </ul>
            <Link to="/contact" className="text-link">
              Request rental dates
            </Link>
          </section>
        </div>
      </div>
    </article>
  )
}
