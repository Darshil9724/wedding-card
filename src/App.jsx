import { useState } from 'react'
import StartPage from './components/StartPage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Invitation from './components/Invitation'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import Schedule from './components/Schedule'
import Family from './components/Family'
import Quote from './components/Quote'
import Footer from './components/Footer'

export default function App() {
  const [started, setStarted] = useState(false)

  if (!started) {
    return <StartPage onEnter={() => setStarted(true)} />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Invitation />
        <Gallery />
        <Venue />
        <Schedule />
        <Family />
        <Quote />
      </main>
      <Footer />
    </>
  )
}
