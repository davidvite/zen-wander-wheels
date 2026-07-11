import { ContactForm } from '../components/ContactForm'

export function Contact() {
  return (
    <article className="page">
      <div className="page__inner page__inner--narrow">
        <h1>Contact</h1>
        <p className="page__lede">
          Ask about rental dates or purchasing a Japanese JDM Class C camper
          van. We typically reply within one to two business days.
        </p>
        <ContactForm />
      </div>
    </article>
  )
}
