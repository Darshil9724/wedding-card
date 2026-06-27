import { useReveal } from '../hooks/useReveal'

function TlItem({ date, title, text }) {
  const [ref, visible] = useReveal()
  return (
    <div className={`tl-item reveal${visible ? ' visible' : ''}`} ref={ref}>
      <div className="tl-card">
        <p className="tl-date">{date}</p>
        <h3 className="tl-title">{title}</h3>
        <p className="tl-text">{text}</p>
      </div>
      <div className="tl-dot">✦</div>
      <div className="tl-spacer" />
    </div>
  )
}

const milestones = [
  {
    date: 'January 2020',
    title: 'The First Meeting',
    text: "Fate brought Peena and Bhavik together at a mutual friend's celebration. One glance across the room and something magical stirred — a spark neither could explain but both would cherish forever.",
  },
  {
    date: 'June 2020',
    title: 'Friendship Blossoms',
    text: 'Long conversations over chai, shared laughter, late-night calls — what began as friendship quietly deepened into something far more beautiful. They discovered in each other a kindred spirit, a home away from home.',
  },
  {
    date: 'February 2022',
    title: 'Love Declared',
    text: 'Under a sky full of stars, Bhavik finally confessed what his heart had known for months. Peena smiled — she had been waiting. Their love story officially began, written in the language of quiet moments and endless understanding.',
  },
  {
    date: 'March 2026',
    title: 'The Engagement',
    text: 'Surrounded by their loving families, Bhavik went down on one knee with a ring and a lifelong promise. Peena said yes through joyful tears. Both families united in celebration, blessing this beautiful chapter about to unfold.',
  },
  {
    date: 'December 2026',
    title: 'Forever Begins',
    text: 'The day they have dreamed of is finally here. Peena and Bhavik are ready to walk together, hand in hand, into a lifetime of love, laughter, and togetherness. We invite you to witness this divine union.',
  },
]

export default function Story() {
  const [ref, visible] = useReveal()
  return (
    <section id="story" className="sec-wrap story-bg">
      <div className="sec-inner">
        <p className={`sec-label reveal${visible ? ' visible' : ''}`} ref={ref}>✦ Our Journey ✦</p>
        <h2 className="sec-title">A Love Story</h2>
        <p className="sec-sub">From a chance encounter to a lifetime promise — this is how our story began.</p>
        <div className="divider"><span>✿</span></div>
        <div className="timeline">
          {milestones.map((m, i) => <TlItem key={i} {...m} />)}
        </div>
      </div>
    </section>
  )
}
