import { useEffect, useState } from 'react'

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (form.website) return

    setStatus('sending')

    try {
      const response = await fetch(import.meta.env.VITE_N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          source: 'hotel website',
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setForm({ name: '', email: '', message: '', website: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="border-b border-current pb-1 text-xs tracking-[0.2em] transition-opacity hover:opacity-60"
      >
        CONTACT US
      </button>

      {isOpen && (
        <div
          className="contact-modal fixed inset-0 z-50 flex items-center justify-center bg-royalblue/55 px-5 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false)
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            className="relative w-full max-w-lg bg-dirtywhite p-7 text-royalblue shadow-2xl sm:p-10"
          >
            <button
              type="button"
              aria-label="Close contact form"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-4 text-2xl leading-none transition-opacity hover:opacity-50"
            >
              ×
            </button>

            <p className="mb-3 text-xs font-bold tracking-[0.25em] text-wine">
              GET IN TOUCH
            </p>

            <h2 id="contact-title" className="mb-8 text-4xl">
              Let’s talk.
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="border-b border-royalblue/30 bg-transparent px-0 py-3 outline-none placeholder:text-royalblue/55 focus:border-wine"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="border-b border-royalblue/30 bg-transparent px-0 py-3 outline-none placeholder:text-royalblue/55 focus:border-wine"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                required
                rows="4"
                className="resize-none border-b border-royalblue/30 bg-transparent px-0 py-3 outline-none placeholder:text-royalblue/55 focus:border-wine"
              />

              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-3 bg-wine px-6 py-4 text-xs font-bold tracking-[0.2em] text-dirtywhite transition-colors hover:bg-royalblue disabled:opacity-50"
              >
                {status === 'sending' ? 'SENDING...' : 'SEND INQUIRY'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-wine">Inquiry sent successfully.</p>
              )}

              {status === 'error' && (
                <p className="text-sm text-wine">Something went wrong.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactForm