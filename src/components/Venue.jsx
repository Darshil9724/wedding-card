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
          <span className="venue-icon">🛕</span>
          <h3 className="venue-name">Dudheshwar Mahadev Mandir</h3>
          <p className="venue-addr">
            Dediyasan,<br />
            Mehsana, Gujarat – 384002
          </p>
          <p className="venue-desc">
            "Blessed by Lord Mahadev, the sacred Dudheshwar Mahadev Mandir in Dediyasan offers a serene
            and divine setting for our sacred vows — where faith, tradition and family come together.
            The perfect place to begin Bhavik &amp; Peena's journey as one."
          </p>
          <a
            href="https://www.bing.com/maps?q=Dudheshwar+Mahadev+Mandir+Dediyasan+Mehsana+Gujarat"
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
