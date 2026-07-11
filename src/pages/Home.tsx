import { Link } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'

export function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-brand">
        <div className="hero__media">
          <PhotoPlaceholder
            label="Japanese JDM Class C camper van parked at a trailhead at dusk"
            aspect="hero"
            priority
          />
        </div>
        <div className="hero__content">
          <h1 id="hero-brand" className="hero__brand">
            Zen Wander Wheels
          </h1>
          <p className="hero__title">
            Japanese JDM Class C campers, ready for the road
          </p>
          <p className="hero__lede">
            Rent or buy a camper van with a wet bathroom and room to sleep three
            to six.
          </p>
          <div className="hero__actions">
            <Link to="/fleet" className="btn btn--primary">
              View fleet
            </Link>
            <Link to="/buy" className="btn btn--ghost">
              Inquire to buy
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--reveal" aria-labelledby="campers-heading">
        <div className="section__inner">
          <h2 id="campers-heading">Built for real trips</h2>
          <p className="section__lede">
            Our Japanese JDM Class C camper vans bring full living space on
            wheels — including a wet bathroom — so you can stay out longer and
            travel lighter.
          </p>
          <div className="feature-grid">
            <article className="feature">
              <PhotoPlaceholder
                label="Interior living area of a Class C camper van"
                aspect="wide"
              />
              <h3>Sleeps 3–6</h3>
              <p>
                Flexible layouts that fit couples, families, or a small crew —
                up to six when you need the space.
              </p>
            </article>
            <article className="feature">
              <PhotoPlaceholder
                label="Wet bathroom inside a Class C camper van"
                aspect="wide"
              />
              <h3>Wet bathroom</h3>
              <p>
                Shower and toilet on board so boondocking and overnight stops
                stay simple.
              </p>
            </article>
            <article className="feature">
              <PhotoPlaceholder
                label="Kitchen galley in a Japanese JDM Class C camper"
                aspect="wide"
              />
              <h3>Full Class C comfort</h3>
              <p>
                Over-cab berth, galley, and living space — a normal camper van
                setup, imported from the Japanese domestic market.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tint section--reveal" aria-labelledby="paths-heading">
        <div className="section__inner">
          <h2 id="paths-heading">Rent for a trip, or take one home</h2>
          <p className="section__lede">
            Whether you want a weekend escape or your own Class C, we can help
            you get on the road.
          </p>
          <div className="path-grid">
            <div className="path">
              <h3>Rent</h3>
              <p>
                Browse the fleet, pick your dates, and roll out in a ready-to-go
                Japanese JDM Class C camper van.
              </p>
              <Link to="/fleet" className="text-link">
                See rental fleet
              </Link>
            </div>
            <div className="path">
              <h3>Buy</h3>
              <p>
                Interested in owning? Tell us what you need and we will walk you
                through available vans and next steps.
              </p>
              <Link to="/buy" className="text-link">
                Ask about buying
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--reveal" aria-labelledby="gallery-heading">
        <div className="section__inner">
          <h2 id="gallery-heading">A look inside the journey</h2>
          <p className="section__lede">
            Photo placeholders for exterior, cabin, and campsite moments —
            replace these with your fleet shots when ready.
          </p>
          <div className="gallery">
            <PhotoPlaceholder
              label="Class C camper van exterior side profile"
              aspect="square"
            />
            <PhotoPlaceholder
              label="Over-cab sleeping berth in a Class C camper"
              aspect="square"
            />
            <PhotoPlaceholder
              label="Campsite evening with Class C van and lantern light"
              aspect="square"
            />
            <PhotoPlaceholder
              label="Open rear doors showing living space of a camper van"
              aspect="square"
            />
          </div>
        </div>
      </section>

      <section className="section section--tint section--reveal" aria-labelledby="contact-heading">
        <div className="section__inner section__inner--narrow">
          <h2 id="contact-heading">Plan your next mile</h2>
          <p className="section__lede">
            Send a note about rental dates or a purchase interest and we will
            get back to you.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
