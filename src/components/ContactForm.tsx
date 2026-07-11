import { useId, useState, type FormEvent } from 'react'

type Interest = 'rent' | 'buy' | ''

type FieldErrors = {
  name?: string
  email?: string
  message?: string
  interest?: string
}

export function ContactForm() {
  const formId = useId()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [interest, setInterest] = useState<Interest>('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const nameErrorId = `${formId}-name-error`
  const emailErrorId = `${formId}-email-error`
  const messageErrorId = `${formId}-message-error`
  const interestErrorId = `${formId}-interest-error`

  function validate(): FieldErrors {
    const next: FieldErrors = {}

    if (!name.trim()) next.name = 'Please enter your name.'
    if (!email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!message.trim()) next.message = 'Please include a short message.'
    if (!interest) next.interest = 'Please choose rent or buy.'

    return next
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    console.log({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      interest,
    })

    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
    setInterest('')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {submitted && (
        <p className="contact-form__success" role="status">
          Thanks — your message was recorded. We will follow up soon.
        </p>
      )}

      <div className="contact-form__field">
        <label htmlFor={`${formId}-name`}>Name</label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? nameErrorId : undefined}
          required
        />
        {errors.name && (
          <p id={nameErrorId} className="contact-form__error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-email`}>Email</label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? emailErrorId : undefined}
          required
        />
        {errors.email && (
          <p id={emailErrorId} className="contact-form__error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <fieldset
        className="contact-form__field"
        aria-describedby={errors.interest ? interestErrorId : undefined}
      >
        <legend>I am interested in</legend>
        <div className="contact-form__choices">
          <label className="contact-form__choice">
            <input
              type="radio"
              name="interest"
              value="rent"
              checked={interest === 'rent'}
              onChange={() => setInterest('rent')}
            />
            Renting a camper
          </label>
          <label className="contact-form__choice">
            <input
              type="radio"
              name="interest"
              value="buy"
              checked={interest === 'buy'}
              onChange={() => setInterest('buy')}
            />
            Buying a camper
          </label>
        </div>
        {errors.interest && (
          <p id={interestErrorId} className="contact-form__error" role="alert">
            {errors.interest}
          </p>
        )}
      </fieldset>

      <div className="contact-form__field">
        <label htmlFor={`${formId}-message`}>Message</label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? messageErrorId : undefined}
          required
        />
        {errors.message && (
          <p id={messageErrorId} className="contact-form__error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn--primary">
        Send message
      </button>
    </form>
  )
}
