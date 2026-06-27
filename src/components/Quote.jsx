import { useReveal } from '../hooks/useReveal'

export default function Quote() {
  const [ref, visible] = useReveal()
  return (
    <section className="sec-wrap quote-bg">
      <div className="quote-inner sec-inner">
        <span className={`quote-mark reveal${visible ? ' visible' : ''}`} ref={ref}>"</span>
        <p className="quote-text reveal visible">
          As we stand on the threshold of this beautiful new chapter, our hearts overflow with gratitude
          for every one of you — our family, our friends, our cherished companions on life's journey.
          Your presence, love, and blessings mean the world to us. Come, celebrate with us, as two
          lives become one.
        </p>
        <div className="quote-sign reveal visible">— Peena &amp; Bhavik</div>
      </div>
    </section>
  )
}
