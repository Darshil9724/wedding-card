import { useReveal } from '../hooks/useReveal'

export default function Invitation() {
  const [ref, visible] = useReveal()
  return (
    <section id="invitation" className="invite-bg">
      <div className="invite-inner sec-inner" style={{ textAlign: 'center' }}>
        <p className={`sec-label inv-sec-label reveal${visible ? ' visible' : ''}`} ref={ref}>
          ✦ Formal Invitation ✦
        </p>
        <h2 className="sec-title inv-sec-title">With Joyful Hearts</h2>
        <div className="divider"><span style={{ color: 'rgba(232,201,122,0.6)' }}>✦</span></div>

        <div className="invite-box reveal visible">
          <p className="inv-label">With the blessings of God and our elders</p>
          <p className="inv-pre">We joyfully invite you to celebrate the auspicious wedding of our beloved</p>

          <div className="inv-names">Peena &amp; Bhavik</div>

          <div className="inv-families">
            <span className="inv-family-name">Shri Anilbhai &amp; Smt. Dipikaben Patel</span>
            <span className="inv-muted">proudly announce the marriage of their daughter</span>
            <span className="inv-family-name">Peena Anilbhai Patel</span>
            <br /><br />
            <span className="inv-family-name">Shri Bipinbhai &amp; Smt. Chandrikaben Patel</span>
            <span className="inv-muted">proudly announce the marriage of their son</span>
            <span className="inv-family-name">Bhavik Bipinbhai Patel</span>
          </div>

          <div className="inv-details">
            <span className="inv-highlight">Saturday, 12th December 2026</span><br />
            10:00 AM onwards<br />
            Dediyasan,<br />
            Mehsana – 384002
          </div>
        </div>
      </div>
    </section>
  )
}
