import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const slides = [
  { cls: 'gc1', src: '/images/gallery/1.jpeg'},
  { cls: 'gc2', src: '/images/gallery/2.jpeg'},
  { cls: 'gc3', src: '/images/gallery/3.jpeg'},
  { cls: 'gc4', src: '/images/gallery/4.jpeg'},
  { cls: 'gc5', src: '/images/gallery/5.jpeg'},
  { cls: 'gc6', src: '/images/gallery/6.jpeg' },
  { cls: 'gc7', src: '/images/gallery/7.jpeg'},
  { cls: 'gc8', src: '/images/gallery/8.jpeg'},
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

  // Track width equals the wrapper width (slides overflow it), and each slide
  // is (100/vis)% of that, so one step moves the track by (100/vis)%.
  const translateX = idx * (100 / vis)

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
                  <img
                    src={s.src}
                    alt={s.label}
                    loading="lazy"
                    onError={(e) => e.currentTarget.remove()}
                  />
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
