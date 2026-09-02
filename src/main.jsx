import React from 'react'
import ReactDOM from 'react-dom/client'
import Lenis from 'lenis'
import './CSS/Hero.css'
import MainLayout from './MainLayout.jsx'

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  wheelMultiplier: 0.9,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
)