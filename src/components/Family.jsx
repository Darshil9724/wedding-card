import { useReveal } from '../hooks/useReveal'

const groom = [
  { name: 'Shri Bipinbhai Patel',  role: 'Father of the Groom' },
  { name: 'Smt. Chandrikaben Patel',    role: 'Mother of the Groom' },
  // { name: 'Shri Mukeshbhai Desai',  role: 'Uncle (Kaka)' },
  { name: 'Jaimini Patel',           role: 'Sister' },
  // { name: 'Rohan Desai',            role: 'Brother' },
]

const bride = [
  { name: 'Shri Anilbhai Patel',   role: 'Father of the Bride' },
  { name: 'Smt. dipikaben Patel',   role: 'Mother of the Bride' },
  // { name: 'Shri Ashwinbhai Patel',  role: 'Uncle (Kaka)' },
  { name: 'Darshil Patel',            role: 'Brother' },
  // { name: 'Hetal Patel',            role: 'Sister' },
]

function FamBlock({ side, surname, members }) {
  const [ref, visible] = useReveal()
  return (
    <div className={`fam-block reveal${visible ? ' visible' : ''}`} ref={ref}>
      <p className="fam-side">{side}</p>
      <h3 className="fam-surname">{surname} Family</h3>
      {members.map((m, i) => (
        <div className="fam-member" key={i}>
          {m.name}
          <span className="fam-role">{m.role}</span>
        </div>
      ))}
    </div>
  )
}

export default function Family() {
  const [ref, visible] = useReveal()
  return (
    <section id="family" className="sec-wrap family-bg">
      <div className="sec-inner">
        <p className={`sec-label reveal${visible ? ' visible' : ''}`} ref={ref}>✦ Our Families ✦</p>
        <h2 className="sec-title">With Blessings Of</h2>
        <p className="sec-sub">Two families united by love, welcoming each other with open hearts.</p>
        <div className="divider"><span>❤</span></div>
        <div className="family-grid">
          <FamBlock side="Groom's Family" surname="Patel" members={groom} />
          <FamBlock side="Bride's Family" surname="Patel" members={bride} />
        </div>
      </div>
    </section>
  )
}
