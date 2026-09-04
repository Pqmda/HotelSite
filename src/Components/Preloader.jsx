import { useEffect, useState } from 'react'

const Preloader = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIsExiting(true)
    }, 1800)

    const completeTimer = window.setTimeout(() => {
      onComplete()
    }, 2600)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-royalblue text-dirtywhite transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="text-center">
        <p className="mb-6 text-xs tracking-[0.35em] opacity-70">
          EST. MARBELLA
        </p>

        <h1 className="overflow-hidden font-serif text-[clamp(3rem,10vw,9rem)] uppercase leading-none tracking-[-0.06em]">
          <span className="inline-block animate-[preloader-reveal_1.2s_cubic-bezier(.77,0,.18,1)_forwards]">
            CZARINA
          </span>
        </h1>

        <div className="mx-auto mt-8 h-px w-24 origin-left animate-[preloader-line_1.8s_ease-in-out_forwards] bg-dirtywhite" />
      </div>
    </div>
  )
}

export default Preloader