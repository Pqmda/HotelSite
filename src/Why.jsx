import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Why = () => {
  const wrapperRef = useRef(null)
  const racesRef = useRef(null)

  useGSAP(() => {
    const races = racesRef.current

    const getScrollAmount = () => {
      return -(races.scrollWidth - window.innerWidth)
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: 'none',
      paused: true,
    })

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top top',
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      pinSpacing: false,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    })
  }, { scope: wrapperRef })

  return (
    <section
      ref={wrapperRef}
      className="racesWrapper absolute top-[490vh] h-screen w-screen overflow-hidden bg-dirtywhite text-royalblue"
    >
      <div
        ref={racesRef}
        className="races flex h-screen w-[300vw]"
      >
        <div className="flex h-screen w-screen shrink-0 flex-col items-center px-[3vw] pt-14 text-center">
          <p className="mt-40 text-[0.85rem] font-bold">
            THE CONCEPT
          </p>

          <h2 className="mx-auto mt-20 max-w-[1180px] font-serif text-[clamp(2.5rem,5.1vw,5rem)] font-normal leading-[0.9] tracking-[-0.04em]">
            ERA RESIDENCES IS A BOUTIQUE GATED COMMUNITY OF ONLY 25 RESIDENCES,
            DESIGNED AROUND PRIVACY, WELLBEING AND TIMELESS MEDITERRANEAN LIVING
          </h2>

          <p className="mx-auto mt-auto mb-10 max-w-[370px] text-base leading-[1.35]">
            Inspired by the atmosphere of Marbella&apos;s golden era, the
            project combines contemporary architecture with warm materials,
            natural landscaping and carefully curated spaces.
          </p>

          <div className="text-5xl leading-none" aria-hidden="true">
            ✥
          </div>
        </div>

        <div className="h-screen w-screen shrink-0 bg-dirtywhite" />
        <div className="h-screen w-screen shrink-0 bg-dirtywhite" />
      </div>
    </section>
  )
}

export default Why