import { useReveal } from '../hooks/useReveal'
import { GaneshIcon, MameruIcon, HaldiIcon, GarbaIcon, PherasIcon, ThaliIcon } from './EventIcons'

const items = [
  { icon: <GaneshIcon />, name: 'Ganesh Sthapna',          meta: 'Labh Residency, Mehsana · Thu 11 Dec', time: '7:00 AM' },
  { icon: <MameruIcon />, name: 'Mameru',                  meta: 'Swagat Party Plot, Dediyasan · Thu 11 Dec', time: '3:00 PM' },
  { icon: <HaldiIcon />, name: 'Haldi Ceremony',          meta: 'Swagat Party Plot, Dediyasan · Thu 11 Dec',  time: '4:00 PM' },
  { icon: <GarbaIcon />, name: 'Ras Garba',               meta: 'Swagat Party Plot, Dediyasan · Thu 11 Dec', time: '10:00 PM' },
  { icon: <PherasIcon />, name: 'Wedding Ceremony (Pheras)',meta: 'Dudheshwar Mahadev Mandir · Fri 12 Dec',      time: '10:00 AM' },
  { icon: <ThaliIcon />, name: 'Wedding Lunch',           meta: 'Dudheshwar Mahadev Mandir · Fri 12 Dec', time: '1:00 PM' },
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
