import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false)
  const [ref, visible] = useReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="rsvp" className="sec-wrap rsvp-bg">
      <div className="rsvp-inner sec-inner">
        <p className={`sec-label reveal${visible ? ' visible' : ''}`} ref={ref}>✦ RSVP ✦</p>
        <h2 className="sec-title">Will You Join Us?</h2>
        <p className="sec-sub">Kindly let us know of your attendance by 1st December 2026.</p>

        <div className="rsvp-form">
          {submitted ? (
            <div className="rsvp-success">
              <span className="success-emoji">🎉</span>
              <p>
                <strong>Thank you so much!</strong><br />
                We are delighted you will join us to celebrate this special day.<br />
                See you on 12th December 2026!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input className="form-input" type="text" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Number of Guests</label>
                  <select className="form-select">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Attendance</label>
                  <select className="form-select">
                    <option>Joyfully Attending ✓</option>
                    <option>Regretfully Declining ✗</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message &amp; Blessings</label>
                <textarea
                  className="form-textarea"
                  placeholder="Send your heartfelt wishes and blessings to the couple…"
                />
              </div>

              <button type="submit" className="submit-btn">
                Send RSVP &nbsp;✦
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
