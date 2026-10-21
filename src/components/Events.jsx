import { useReveal } from '../hooks/useReveal'

const events = [
  { icon: '🕉️', name: 'Ganesh Sthapna',   date: 'Thu, 11 December 2026', time: '7:00 AM', venue: 'Labh Residency, Mehsana' },
  { icon: '🎁', name: 'Mameru',           date: 'Thu, 11 December 2026', time: '3:00 PM', venue: 'Swagat Party Plot, Dediyasan' },
  { icon: '💛', name: 'Haldi Ceremony',   date: 'Thu, 11 December 2026', time: '4:00 PM – 7:00 PM', venue: 'Swagat Party Plot, Dediyasan' },
  { icon: '🎶', name: 'Ras Garba',        date: 'Thu, 11 December 2026', time: '10:00 PM', venue: 'Swagat Party Plot, Dediyasan' },
  { icon: '🪔', name: 'Wedding Ceremony', date: 'Fri, 12 December 2026', time: '10:00 AM – 2:00 PM', venue: 'Shreeji Mahal, Ahmedabad' },
]

function EventCard({ icon, name, date, time, venue }) {
  const [ref, visible] = useReveal()
  return (
    <div className={`event-card reveal${visible ? ' visible' : ''}`} ref={ref}>
      <span className="ev-icon">{icon}</span>
      <h3 className="ev-name">{name}</h3>
      <p className="ev-date">{date}</p>
      <p className="ev-time">{time}</p>
      <p className="ev-venue">{venue}</p>
    </div>
  )
}

export default function Events() {
  const [ref, visible] = useReveal()
  return (
    <section id="events" className="sec-wrap events-bg">
      <div className="sec-inner">
        <p className={`sec-label reveal${visible ? ' visible' : ''}`} ref={ref}>✦ Celebrations ✦</p>
        <h2 className="sec-title">Wedding Events</h2>
        <p className="sec-sub">Join us across five joyous celebrations to usher in this auspicious union.</p>
        <div className="divider"><span>♬</span></div>
        <div className="events-grid">
          {events.map((e, i) => <EventCard key={i} {...e} />)}
        </div>
      </div>
    </section>
  )
}
