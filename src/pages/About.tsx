import { Link } from 'react-router-dom'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'

export function About() {
  return (
    <article className="page">
      <div className="page__inner">
        <h1>About Zen Wander Wheels</h1>
        <p className="page__lede">
          We help people get farther with Japanese JDM Class C camper vans —
          for a rental week or a long-term home on wheels.
        </p>
        <PhotoPlaceholder
          label="Founder with a Japanese JDM Class C camper van"
          aspect="wide"
          className="page__media"
        />
        <p>
          Zen Wander Wheels started from a simple idea: bring dependable Class C
          campers from Japan’s domestic market to travelers who want a wet
          bathroom, real sleeping space for three to six, and a van that feels
          ready for the open road.
        </p>
        <p>
          Whether you are booking a trip or exploring ownership, we focus on
          clear answers, solid vans, and a calmer way to wander.
        </p>
        <p>
          <Link to="/contact" className="btn btn--primary">
            Get in touch
          </Link>
        </p>
      </div>
    </article>
  )
}
