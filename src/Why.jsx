import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import terrace from './assets/terrace.webp'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Why = () => {
const wrapperRef = useRef(null)
const racesRef = useRef(null)
const wordRefs = useRef([])
const conceptHeadingRef = useRef(null)

useGSAP(() => {
  const races = racesRef.current

  const getScrollAmount = () => {
    return -(races.scrollWidth - window.innerWidth)
  }

  gsap.to(races, {
    x: getScrollAmount,
    ease: 'none',
    scrollTrigger: {
      trigger: wrapperRef.current,
      start: 'top top',
      end: () => `+=${Math.abs(getScrollAmount())}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  })

  gsap.to(wordRefs.current, {
    x: (index) => [-200, -300, -100][index],
    ease: 'none',
    scrollTrigger: {
      trigger: '#word-cont',
      start: '60% top',
      end: () => `+=${Math.abs(getScrollAmount())}`,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  })

const conceptSplit = SplitText.create(conceptHeadingRef.current, {
  type: 'words',
  mask: 'words',
})

gsap.set(conceptSplit.words, {
  yPercent: 100,
  autoAlpha: 0,
})

gsap.to(conceptSplit.words, {
  yPercent: 0,
  autoAlpha: 1,
  stagger: 0.02,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: wrapperRef.current,
    start: 'top 40%',
    end: '+=500',
    scrub: 1,
    invalidateOnRefresh: true,
  },
})
}, { scope: wrapperRef })

  return (
    <section
      id = "why"
      ref={wrapperRef}
      className="racesWrapper absolute top-[500vh] h-screen w-screen overflow-hidden bg-dirtywhite text-royalblue"
    >
      <div
        ref={racesRef}
        className="races flex h-screen w-[300vw]"
      >
        <div className="flex h-screen w-screen shrink-0 flex-col items-center px-[6vw] pt-16 pb-8 sm:pt-20 lg:px-[3vw] lg:pt-14 lg:pb-0 text-center">
          <p className="mt-6 sm:mt-10 lg:mt-40 text-[0.75rem] lg:text-[0.85rem] font-bold">
            THE CONCEPT
          </p>

          <h2 ref={conceptHeadingRef} className=" mx-auto mt-6 sm:mt-8 lg:mt-20 max-w-[1180px] font-serif text-[clamp(1.6rem,6.5vw,5rem)] font-normal leading-[0.95] lg:leading-[0.9] tracking-[-0.04em]">
            ERA RESIDENCES IS A BOUTIQUE GATED COMMUNITY OF ONLY 25 RESIDENCES,
            DESIGNED AROUND PRIVACY, WELLBEING AND TIMELESS MEDITERRANEAN LIVING
          </h2>

          <p className="mx-auto mt-6 lg:mt-auto mb-4 lg:mb-10 max-w-[370px] text-base leading-[1.35]">
            Inspired by the atmosphere of Marbella's golden era, the
            project combines contemporary architecture with warm materials,
            natural landscaping and carefully curated spaces.
          </p>

          <div className="mt-auto text-3xl sm:text-4xl lg:text-5xl leading-none" aria-hidden="true">
            ✥
          </div>
        </div>

        <div id="word-cont" className = "relative ml-6 sm:ml-16 lg:ml-50 mt-10 sm:mt-16 lg:mt-35 w-[90vw] lg:w-[60vw] h-[70vh] sm:h-[72vh] lg:h-[75vh]">
          <span
            ref={(element) => {
              wordRefs.current[0] = element
            }}
            className="absolute top-[6vh] sm:top-[8vh] lg:top-[10vh] text-[clamp(3.5rem,18vw,12rem)] font-satoshi text-wine"
          >
            NEW
          </span>

          <span
            ref={(element) => {
              wordRefs.current[1] = element
            }}
            className="absolute top-[22vh] sm:top-[24vh] lg:top-[25vh] left-[6vw] lg:left-[14vw] z-10 text-[clamp(3.5rem,18vw,12rem)] font-satoshi text-wine"
          >
            GOLDEN
          </span>

          <span
            ref={(element) => {
              wordRefs.current[2] = element
            }}
            className="absolute top-[38vh] sm:top-[40vh] lg:top-[40vh] left-[1vw] lg:left-[3vw] text-[clamp(3.5rem,18vw,12rem)] font-satoshi text-wine"
          >
            MILE
          </span>
        </div>  

        <div className = "absolute left-[150vw] mt-6 sm:mt-10 lg:mt-15 w-[55vw] sm:w-[45vw] lg:w-[40vw] aspect-[3/4] lg:aspect-auto lg:h-[90vh]">
          <img src = {terrace} alt = "terrace" className = "h-full w-full object-cover z-5"/>
        </div>

        <div className="relative mt-[42vh] sm:mt-[50vh] lg:mt-[65vh] mb-10 sm:mb-14 lg:mb-0 ml-[6vw] lg:ml-[20vw] flex h-auto lg:h-[30vh] w-[88vw] lg:w-[42vw] flex-col justify-start">
          <h1 className="font-serif text-[clamp(1.65rem,6vw,5rem)] font-normal uppercase leading-[0.95] lg:leading-[0.9] tracking-[-0.04em] text-royalblue">
            BETWEEN MARBELLA AND ESTEPONA
          </h1>

          <p className="mt-4 lg:mt-8 max-w-[88vw] lg:max-w-[38vw] text-left text-[0.95rem] lg:text-[1rem] leading-[1.35] text-royalblue">
            Surrounded by beaches, golf courses, wellness clubs and established
            lifestyle destinations, the project combines privacy with effortless
            connectivity to everything essential for Mediterranean living. A location
            designed not around movement — but around returning.
          </p>
        </div>

      </div>


    </section>
  )
}

export default Why
