import { useState, useEffect } from 'react'

const WEDDING = new Date('2026-12-12T10:00:00')

function pad(n) { return String(n).padStart(2, '0') }

export default function Hero() {
  const [time, setTime] = useState(null)

  useEffect(() => {
    const tick = () => {
      const diff = WEDDING - new Date()
      if (diff <= 0) { setTime(null); return }
      setTime({
        days:  Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins:  Math.floor((diff % 3600000) / 60000),
        secs:  Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-pattern" />

      <div className="hero-ornament">✦ ✿ ✦</div>
      <p className="hero-tag">Together in Love · Forever in Joy</p>

      <h1 className="hero-names">
        <span>Peena</span>
        <span className="hero-amp">&amp;</span>
        <span>Bhavik</span>
      </h1>

      <p className="hero-date-line">Saturday, 12 December 2026</p>
      <p className="hero-sub">"Two souls, one divine journey begins…"</p>

      {time ? (
        <div className="countdown">
          {[['Days', time.days], ['Hours', time.hours], ['Mins', time.mins], ['Secs', time.secs]].map(
            ([label, val]) => (
              <div className="cd-box" key={label}>
                <span className="cd-num">{pad(val)}</span>
                <span className="cd-label">{label}</span>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="countdown">
          <p style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.2rem' }}>
            ✦ The Big Day Is Here! ✦
          </p>
        </div>
      )}

      <div className="hero-btns">
        <a href="#invitation" className="btn btn-gold">View Invitation</a>
        <a href="#rsvp"       className="btn btn-outline">RSVP Now</a>
      </div>
    </section>
  )
}
