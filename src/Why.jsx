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
        <div className="flex h-screen w-screen shrink-0 flex-col items-center px-[3vw] pt-14 text-center">
          <p className="mt-40 text-[0.85rem] font-bold">
            THE CONCEPT
          </p>

          <h2 ref={conceptHeadingRef} className=" mx-auto mt-20 max-w-[1180px] font-serif text-[clamp(2.5rem,5.1vw,5rem)] font-normal leading-[0.9] tracking-[-0.04em]">
            ERA RESIDENCES IS A BOUTIQUE GATED COMMUNITY OF ONLY 25 RESIDENCES,
            DESIGNED AROUND PRIVACY, WELLBEING AND TIMELESS MEDITERRANEAN LIVING
          </h2>

          <p className="mx-auto mt-auto mb-10 max-w-[370px] text-base leading-[1.35]">
            Inspired by the atmosphere of Marbella & apos;s golden era, the
            project combines contemporary architecture with warm materials,
            natural landscaping and carefully curated spaces.
          </p>

          <div className="text-5xl leading-none" aria-hidden="true">
            ✥
          </div>
        </div>

        <div id="word-cont" className = "relative ml-50 mt-35 w-[60vw] h-[75vh]">
          <span
            ref={(element) => {
              wordRefs.current[0] = element
            }}
            className="absolute top-[10vh] text-[12rem] font-satoshi text-wine"
          >
            NEW
          </span>

          <span
            ref={(element) => {
              wordRefs.current[1] = element
            }}
            className="absolute top-[25vh] left-[14vw] z-10 text-[12rem] font-satoshi text-wine"
          >
            GOLDEN
          </span>

          <span
            ref={(element) => {
              wordRefs.current[2] = element
            }}
            className="absolute top-[40vh] left-[3vw] text-[12rem] font-satoshi text-wine"
          >
            MILE
          </span>
        </div>  

        <div className = "absolute left-[150vw] mt-15 w-[40vw] h-[90vh]">
          <img src = {terrace} alt = "terrace" className = "w-full h-full object-cover z-5"/>
        </div>

        <div className="relative mt-[65vh] ml-[20vw] flex h-[30vh] w-[42vw] flex-col justify-start">
          <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-normal uppercase leading-[0.9] tracking-[-0.04em] text-royalblue">
            BETWEEN MARBELLA AND ESTEPONA
          </h1>

          <p className="mt-8 max-w-[38vw] text-left text-[1rem] leading-[1.35] text-royalblue">
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