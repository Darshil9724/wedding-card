import { useState, useEffect, useRef } from 'react'

export default function StartPage({ onEnter }) {
  const [leaving, setLeaving] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const symbols = ['✦', '✿', '❀', '◆', '❋', '✵', '·']
    const petals = []

    for (let i = 0; i < 30; i++) {
      const el = document.createElement('span')
      el.className = 'sp-petal'
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)]
      el.style.left = Math.random() * 100 + 'vw'
      el.style.animationDelay = Math.random() * 15 + 's'
      el.style.animationDuration = (Math.random() * 12 + 14) + 's'
      el.style.fontSize = (Math.random() * 0.9 + 0.35) + 'rem'
      el.style.opacity = (Math.random() * 0.28 + 0.1).toString()
      el.style.color = Math.random() > 0.5 ? '#c9a84c' : '#c97b84'
      container.appendChild(el)
      petals.push(el)
    }
    return () => petals.forEach(p => p.remove())
  }, [])

  const handleEnter = () => {
    setLeaving(true)
    setTimeout(onEnter, 750)
  }

  return (
    <div className={`sp-root${leaving ? ' sp-exit' : ''}`} ref={containerRef}>
      {/* Subtle grid pattern */}
      <div className="sp-bg-grid" />

      {/* Ambient glow blobs */}
      <div className="sp-glow sp-glow-1" />
      <div className="sp-glow sp-glow-2" />

      {/* Main card */}
      <div className="sp-card">
        {/* Corner ornaments */}
        <span className="sp-corner sp-corner-tl">❋</span>
        <span className="sp-corner sp-corner-tr">❋</span>
        <span className="sp-corner sp-corner-bl">❋</span>
        <span className="sp-corner sp-corner-br">❋</span>

        {/* Pre-ribbon ornament row */}
        <div className="sp-pre-ornament">
          <span>·</span><span>·</span><span>·</span><span>·</span><span>·</span>
        </div>

        {/* ── RIBBON BANNER ── */}
        <div className="sp-ribbon-wrap">
          <div className="sp-ribbon">
            <span className="sp-ribbon-gem">✦</span>
            &nbsp;&nbsp;The Wedding Of&nbsp;&nbsp;
            <span className="sp-ribbon-gem">✦</span>
          </div>
        </div>

        {/* Names */}
        <h1 className="sp-names">
          <span className="sp-name-bride">Peena</span>
          <span className="sp-amp">&amp;</span>
          <span className="sp-name-groom">Bhavik</span>
        </h1>

        {/* Ornamental gem divider */}
        <div className="sp-gem-divider">
          <span>✦&nbsp;&nbsp;✦&nbsp;&nbsp;✦</span>
        </div>

        {/* Details */}
        <p className="sp-date">12 &middot; December &middot; 2026</p>
        <p className="sp-venue">Mehsana</p>

        {/* CTA */}
        <button className="sp-btn" onClick={handleEnter}>
          <span>Enter the Celebration</span>
          <span className="sp-arrow">&#8594;</span>
        </button>
      </div>
    </div>
  )
}
