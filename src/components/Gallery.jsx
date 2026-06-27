import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const slides = [
  { cls: 'gc1', emoji: '💑', label: 'Engagement' },
  { cls: 'gc2', emoji: '🌹', label: 'Together' },
  { cls: 'gc3', emoji: '🎉', label: 'Celebration' },
  { cls: 'gc4', emoji: '🌺', label: 'Mehendi' },
  { cls: 'gc5', emoji: '💍', label: 'Ring Ceremony' },
  { cls: 'gc6', emoji: '🙏', label: 'Family' },
  { cls: 'gc7', emoji: '❤️', label: 'Love' },
  { cls: 'gc8', emoji: '✨', label: 'Happy Moments' },
]
const TOTAL = slides.length

function getVisible() {
  if (typeof window === 'undefined') return 3
  return window.innerWidth < 768 ? 1 : 3
}

export default function Gallery() {
  const [idx, setIdx] = useState(0)
  const [vis, setVis] = useState(getVisible)
  const [ref, revealVisible] = useReveal()

  useEffect(() => {
    const onResize = () => {
      const v = getVisible()
      setVis(v)
      setIdx(i => Math.min(i, TOTAL - v))
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const prev = () => setIdx(i => Math.max(0, i - 1))
  const next = () => setIdx(i => Math.min(TOTAL - vis, i + 1))
  const maxDots = TOTAL - vis + 1

  // translateX(%) is relative to the track itself.
  // Track = TOTAL * slideWidth, so 1 slide = (100/TOTAL)% of track.
  const translateX = idx * (100 / TOTAL)

  return (
    <section id="gallery" className="sec-wrap gallery-bg">
      <div className="sec-inner">
        <p className={`sec-label reveal${revealVisible ? ' visible' : ''}`} ref={ref}>✦ Memories ✦</p>
        <h2 className="sec-title">Our Gallery</h2>
        <p className="sec-sub">A glimpse into the beautiful moments we have shared together.</p>

        <div className="gallery-wrap">
          <div
            className="gallery-track"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {slides.map((s, i) => (
              <div className="gallery-slide" key={i}>
                <div className={`gallery-card ${s.cls}`}>
                  {s.emoji}
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-nav">
          <button className="gal-btn" onClick={prev} aria-label="Previous">&#8592;</button>
          <div className="gal-dots">
            {Array.from({ length: maxDots }, (_, i) => (
              <button
                key={i}
                className={`gal-dot${i === idx ? ' active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="gal-btn" onClick={next} aria-label="Next">&#8594;</button>
        </div>
      </div>
    </section>
  )
}
