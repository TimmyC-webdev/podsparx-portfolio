import { useState } from 'react'
import { HiEnvelope, HiMapPin, HiClock } from 'react-icons/hi2'
import FadeInSection from '../components/FadeInSection'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    })

    setSubmitted(true)
  }

  return (
    <section className="py-24 bg-base-200" id="contact">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-base-content/60 max-w-xl mx-auto text-lg">
              Have a project in mind? We'd love to hear about it. Let's build something great together.
            </p>
          </div>
        </FadeInSection>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <FadeInSection delay={0.1}>
            <div className="lg:w-1/3 space-y-6">
              <div className="flex items-center gap-4">
                <div
                  style={{ backgroundColor: 'oklch(78% 0.115 274.713)' }}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white pointer-events-none shrink-0"
                >
                  <HiEnvelope />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-base-content/60">contact@podsparx.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  style={{ backgroundColor: 'oklch(78% 0.115 274.713)' }}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white pointer-events-none shrink-0"
                >
                  <HiMapPin />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-base-content/60">London, UK</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  style={{ backgroundColor: 'oklch(78% 0.115 274.713)' }}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white pointer-events-none shrink-0"
                >
                  <HiClock />
                </div>
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-base-content/60">Within 24 hours</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="w-full lg:w-2/3">
              <div className="card bg-base-100 shadow-md w-full">
                <div className="card-body gap-5 lg:gap-6 p-6 lg:p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <p className="text-2xl font-bold mb-2">Message Sent! 🎉</p>
                      <p className="text-base-content/60">Thanks for reaching out — we'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-4">
                        <div className="form-control w-full">
                          <label className="label pb-2">
                            <span className="label-text">Your Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Smith"
                            className="input input-bordered w-full"
                            required
                          />
                        </div>

                        <div className="form-control w-full">
                          <label className="label pb-2">
                            <span className="label-text">Email Address</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            className="input input-bordered w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-control w-full mb-4">
                        <label className="label pb-2">
                          <span className="label-text">Subject</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Project Inquiry"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      <div className="form-control w-full mb-6">
                        <label className="label pb-2">
                          <span className="label-text">Message</span>
                        </label>
                        <textarea
                          name="message"
                          className="textarea textarea-bordered h-32 lg:h-40 w-full"
                          placeholder="Tell us about your project..."
                          required
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-secondary w-full mt-2 rounded-full">
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

export default Contact