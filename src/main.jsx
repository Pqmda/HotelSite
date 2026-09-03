import React from 'react'
import ReactDOM from 'react-dom/client'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CSS/Hero.css'
import MainLayout from './MainLayout.jsx'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  wheelMultiplier: 0.9,
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
)