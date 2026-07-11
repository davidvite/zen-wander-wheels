import { Link } from 'react-router-dom'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'

export function Buy() {
  return (
    <article className="page">
      <div className="page__inner">
        <h1>Buy a Class C camper</h1>
        <p className="page__lede">
          Interested in owning a Japanese JDM Class C camper van? Tell us what
          you need and we will help you explore available options.
        </p>
        <PhotoPlaceholder
          label="Japanese JDM Class C camper van available for purchase"
          aspect="wide"
          className="page__media"
        />
        <p>
          Our vans are built for everyday travel: wet bathroom, sleep for three
          to six, and the full Class C footprint — not a compact novelty, a
          normal camper van ready for longer miles.
        </p>
        <p>
          Share your timeline, passenger count, and must-haves. We will follow
          up with details and next steps.
        </p>
        <p>
          <Link to="/contact" className="btn btn--primary">
            Inquire to buy
          </Link>
        </p>
      </div>
    </article>
  )
}
