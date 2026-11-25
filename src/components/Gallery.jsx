import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const photos = [
  '/images/gallery/6.jpeg',
  '/images/gallery/7.jpeg',
  '/images/gallery/8.jpeg',
  '/images/gallery/9.jpeg',
  '/images/gallery/3.jpeg',
  '/images/gallery/4.jpeg',
]

function getVisible() {
  if (typeof window === 'undefined') return 3
  return window.innerWidth < 768 ? 1 : 3
}

export default function Gallery() {
  const [idx, setIdx] = useState(0)
  const [vis, setVis] = useState(getVisible)
  const [ref, revealVisible] = useReveal()
  // Photos that fail to load are dropped so no blank card is ever shown.
  const [failed, setFailed] = useState(() => new Set())
  const slides = photos.filter(src => !failed.has(src))
  const TOTAL = slides.length

  useEffect(() => {
    const onResize = () => {
      const v = getVisible()
      setVis(v)
      setIdx(i => Math.max(0, Math.min(i, slides.length - v)))
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [slides.length])

  const next = () => setIdx(i => Math.min(Math.max(0, TOTAL - vis), i + 1))
  const maxDots = Math.max(1, TOTAL - vis + 1)
  const shown = Math.min(idx, maxDots - 1)
  const prev = () => setIdx(Math.max(0, shown - 1))

  // Track width equals the wrapper width (slides overflow it), and each slide
  // is (100/vis)% of that, so one step moves the track by (100/vis)%.
  const translateX = shown * (100 / vis)

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
            {slides.map((src, i) => (
              <div className="gallery-slide" key={src}>
                <div className="gallery-card">
                  <img
                    src={src}
                    alt={`Peena & Bhavik — photo ${i + 1}`}
                    onError={() => setFailed(f => new Set(f).add(src))}
                  />
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
                className={`gal-dot${i === shown ? ' active' : ''}`}
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
