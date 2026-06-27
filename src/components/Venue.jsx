import { useReveal } from '../hooks/useReveal'

export default function Venue() {
  const [ref, visible] = useReveal()
  return (
    <section id="venue" className="sec-wrap venue-bg">
      <div className="sec-inner">
        <p className={`sec-label reveal${visible ? ' visible' : ''}`} ref={ref}>✦ Venue ✦</p>
        <h2 className="sec-title">Wedding Venue</h2>
        <p className="sec-sub">We have chosen a magnificent venue worthy of this special celebration.</p>
        <div className="divider"><span>✦</span></div>

        <div className="venue-card reveal visible">
          <span className="venue-icon">🏛️</span>
          <h3 className="venue-name">Shreeji Mahal</h3>
          <p className="venue-addr">
            Nr. Satellite Road, Opp. Jodhpur Cross Roads,<br />
            Ahmedabad, Gujarat – 380015
          </p>
          <p className="venue-desc">
            "A regal banquet adorned with timeless elegance, Shreeji Mahal offers a majestic setting
            for grand celebrations — with opulent décor, sprawling gardens, and world-class hospitality.
            The perfect canvas for Bhavik &amp; Peena's extraordinary day."
          </p>
          <a
            href="https://maps.google.com/?q=Satellite+Road+Ahmedabad+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ fontSize: '0.8rem', padding: '0.75rem 1.8rem' }}
          >
            📍 Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
