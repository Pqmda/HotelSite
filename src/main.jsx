import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CSS/Hero.css'
import MainLayout from './MainLayout.jsx'
import Preloader from './Components/Preloader.jsx'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 1.5,
  smoothWheel: true,
  wheelMultiplier: 0.6,
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  const finishLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading && <Preloader onComplete={finishLoading} />}
      <div
        className={`transition-opacity duration-700 ease-[cubic-bezier(.65,0,.35,1)] ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <MainLayout />
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)