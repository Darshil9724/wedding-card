import { useReveal } from '../hooks/useReveal'

const items = [
  { icon: '🌿', name: 'Mehendi Ceremony',       meta: 'Patel Banquet Hall · Wed 10 Dec', time: '4:00 PM' },
  { icon: '💛', name: 'Haldi Ceremony',          meta: "Bhavik's Residence · Thu 11 Dec",  time: '9:00 AM' },
  { icon: '🎶', name: 'Sangeet Night',           meta: 'Royal Garden Resort · Thu 11 Dec', time: '7:00 PM' },
  { icon: '🪔', name: 'Baraat Procession',       meta: 'Shreeji Mahal Entrance · Fri 12 Dec', time: '9:30 AM' },
  { icon: '💍', name: 'Wedding Ceremony (Pheras)',meta: 'Shreeji Mahal · Fri 12 Dec',      time: '10:00 AM' },
  { icon: '🍱', name: 'Wedding Lunch',           meta: 'Shreeji Mahal Dining Hall · Fri 12 Dec', time: '1:00 PM' },
  { icon: '🥂', name: 'Reception Evening',       meta: 'Shreeji Mahal Grand Hall · Fri 12 Dec', time: '7:00 PM' },
]

function SchItem({ icon, name, meta, time }) {
  const [ref, visible] = useReveal()
  return (
    <div className={`sch-item reveal${visible ? ' visible' : ''}`} ref={ref}>
      <span className="sch-icon">{icon}</span>
      <div className="sch-details">
        <p className="sch-name">{name}</p>
        <p className="sch-meta">{meta}</p>
      </div>
      <span className="sch-time">{time}</span>
    </div>
  )
}

export default function Schedule() {
  const [ref, visible] = useReveal()
  return (
    <section id="schedule" className="sec-wrap schedule-bg">
      <div className="sec-inner">
        <p className={`sec-label reveal${visible ? ' visible' : ''}`} ref={ref}>✦ Schedule ✦</p>
        <h2 className="sec-title">Detailed Itinerary</h2>
        <p className="sec-sub">Plan your celebrations with our complete day-by-day schedule.</p>
        <div className="divider"><span>♬</span></div>
        <div className="schedule-list">
          {items.map((item, i) => <SchItem key={i} {...item} />)}
        </div>
      </div>
    </section>
  )
}
