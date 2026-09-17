import Why from './Why.jsx'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import hotelImage from './assets/Hotel1.png'
import sky from './assets/sky.jpg'
import H1 from './assets/Highlight1.png'
import H2 from './assets/Highlight2.png'
import pool from './assets/Pool.jpg'
import ContactForm from './Components/ContactForm.jsx'


const Hero = () => {

gsap.registerPlugin(ScrollTrigger, SplitText);
    const headingRef = useRef();
    const barRef = useRef();
    const landingRef = useRef();
    const navRef = useRef();
    const burgerRef = useRef();
    const hoteldescRef = useRef();

    const tlmaintext = gsap.timeline({
      scrollTrigger: {
        trigger: "#text1st",
        start: "top top",
        end: "+=1000",
        scrub: 1,
      },
    });

    useGSAP(() => {

        gsap.to(barRef.current, {
            y: -250,
            ease: "exponential.inOut",
            scrollTrigger: {
                trigger: "#landing",
                start: "top top",
                end: "+=1000",
                scrub: 0.5,
                pin: true,
            },
        });

        // Heading scale/travel is the one animation that needs different
        // numbers per screen size - everything else stays identical across
        // breakpoints. matchMedia re-runs this automatically on resize.
        const headingMM = gsap.matchMedia();

        headingMM.add(
          {
            isDesktop: "(min-width: 1024px)",
            isTablet: "(min-width: 640px) and (max-width: 1023px)",
            isMobile: "(max-width: 639px)",
          },
          (context) => {
            const { isDesktop, isTablet } = context.conditions;

            const travelY = isDesktop ? -210 : isTablet ? -130 : -70;
            const travelX = isDesktop ? -100 : isTablet ? -55 : -30;

            gsap.to(headingRef.current, {
              scale: 0.3,
              y: travelY,
              x: travelX,
              ease: "exponential.inOut",
              scrollTrigger: {
                trigger: "#heading",
                start: "top 15%",
                end: "+=1000",
                scrub: 0.5,
              },
            });
          }
        );

        gsap.to([headingRef.current, navRef.current], {
            color: "white",
            borderColor: "white",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#landing",
                start: "10% 15%",
                end: "60% 60%",
                scrub: true,
            }
        });

        gsap.to(burgerRef.current, {
          backgroundColor: "white",
          ease: "power1.inOut",
            scrollTrigger: {
              trigger: "#landing",
              start: "10% 15%",
              end: "60% 60%",
              scrub: true,
            },
        });

        const setHeaderColor = (color) => {
          gsap.to([headingRef.current, navRef.current], {
            color,
            borderColor: color,
            duration: 0.45,
            overwrite: 'auto',
          })

          gsap.to(burgerRef.current, {
            backgroundColor: color,
            duration: 0.45,
            overwrite: 'auto',
          })
        }

        ScrollTrigger.create({
          trigger: '#why',
          start: 'top 80%',
          onEnter: () => setHeaderColor('black'),
          onEnterBack: () => setHeaderColor('black'),
          onLeaveBack: () => setHeaderColor('white'),
          invalidateOnRefresh: true,
        })

        gsap.to(landingRef.current, {
            y: -200,
            ease: "power1.in",
            scrollTrigger: {
                trigger: "#hotelmain",
                start: "top 55%",
                end: "+=1500",
                scrub: true,
            },
        });

      tlmaintext.to("#text1st", {
        y: 20,
        opacity: 0,
        ease: "power1.inOut",
      }, 0);

      tlmaintext.from("#text2nd", {
        y: -20,
        opacity: 0,
        ease: "power1.inOut",
      }, 0.3);

      tlmaintext.from("#text3rd", {
        y: -20,
        opacity: 0,
        ease: "power1.inOut",
      }, 0.1);

        gsap.to(["#aboutini", '#about2','#about3', '#about',], {
            y: -200,
            ease: "exponential.inOut",
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "+=800",
                scrub: true,
                stagger: 0.2,
            },
        });

      gsap.to(["#leftpic", "#rightpic"], {
        y: -200,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#aboutpiccont",
          start: "top bottom",
          end: "bottom 50%",
          scrub: true,
        },
      });

    gsap.to('#poolimg', {
      y: 200,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#poolcont',
        start: 'top 90%',
        end: 'bottom 50%',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    
    const hoteldesc = SplitText.create(hoteldescRef.current, {
    type: 'words',
    mask: 'words',
  })
    gsap.set(hoteldesc.words, {
    yPercent: 100,
    autoAlpha: 0,
  })

    gsap.to(hoteldesc.words, {
    yPercent: 0,
    autoAlpha: 1,
    stagger: 0.02,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: hoteldescRef.current,
      start: 'top bottom',
      end: 'top 50%',
      scrub: 1,
    },
  })


  }, []);


  return (
    <div className='font-["Satoshi"]'>
        <div ref={headingRef} id = "heading" className = 'fixed top-24 left-5 w-[45vw] sm:w-[35vw] lg:w-[26vw] h-auto lg:h-[15vh] p-4 sm:p-6 lg:p-10 lg:px-10 z-20 border-2 border-black justify-center items-center flex lg:top-45 lg:left-10'>
            <h1 className="fixed font-family text-[clamp(1.75rem,7vw,6rem)]">
                CZARINA
            </h1>
        </div>
      
    <div className = 'fixed w-full pt-6 px-5 sm:pt-8 sm:px-8 lg:pt-10 lg:px-10 z-20 '>
        <nav ref={navRef} className="flex items-center justify-between text-[0.65rem] sm:text-xs tracking-widest text-black font-sans font-medium">
            {/* Hamburger / Menu icon on the left */}
            <div ref={burgerRef} className="flex flex-col space-y-1 cursor-pointer">
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </div>
            {/* Navigation links pushed to the right side of the screen */}
            <div className="flex items-center gap-3 sm:gap-6 lg:gap-10 lg:space-x-8">
              <a href="#select" className="hover:opacity-70 transition-opacity">
                SELECT OFFICE SPACE
              </a>
              <span className="flex items-center space-x-1 cursor-pointer">
                <span>♡</span>
                <span>0</span>
              </span>
              <ContactForm />
            </div>
        </nav>
    </div>

    <section id="landing" className="relative w-[100vw] h-[150vh] overflow-hidden bg-image bg-cover bg-center" style={{ backgroundImage: `url(${sky})` }}>
        <img
            src={hotelImage}
            alt="Hotel"
            ref={landingRef}
            id = 'hotelmain'
            className="absolute top-[20vh] inset-0 mt-40 sm:mt-60 lg:mt-100 w-full h-[120vh] z-9"
        />  
        
      <div ref = {barRef} id = 'leftbar' className="relative z-10 w-full">
        <div className="absolute w-full bg-white h-68 px-8 pt-8 pb-12">
      </div>

        <div id = 'rightbar' className="w-full lg:w-1/2 h-88 bg-white px-8 pb-6 flex items-end justify-between">
          {/* Scroll Down Button at the inside corner */}
          <button 
            aria-label="Scroll down"
            className="absolute bottom-5 left-[47vw] w-8 h-8 rounded-full border border-black flex items-center justify-center text-xs hover:bg-black hover:text-white transition-colors"
          >
            ↓
          </button>
        </div>

      </div>

      <div id = "text1st" className = 'absolute w-[70vw] sm:w-[45vw] lg:w-[20vw] h-[10vw] sm:h-[7vw] lg:h-[5vw] top-[50vh] left-[15vw] sm:left-[27vw] lg:left-[40vw] z-20 font-family text-[clamp(1rem,3.5vw,1.5rem)] text-white flex items-center justify-center'>
        <label>
          Where luxury meets comfort.
        </label>
      </div>

      <div
        id="text2nd"
        className="absolute left-[5vw] sm:left-[10vw] lg:left-[15vw] top-[30vh] z-0 flex h-[55vw] sm:h-[48vw] lg:h-[40vw] w-[70vw] sm:w-[35vw] lg:w-[25vw] items-start justify-center border-1 border-white/50 pt-4 "
      >
        <div className="flex flex-col justify-center text-center text-white">
          <span className="text-[clamp(1rem,3vw,1.5rem)] font-family">CLASS</span>
          <span className="text-[clamp(3rem,14vw,9rem)] font-family">A</span>
        </div>
      </div>

      <div id = "text3rd" className = 'absolute top-[100vh] ml-[7vw] sm:ml-[15vw] lg:ml-[20vw] w-[86vw] sm:w-[70vw] lg:w-[60vw] h-[30vh] sm:h-[28vh] lg:h-[25vh] z-20 flex items-center justify-center p-4'>
        <p className = "relative text-center text-[clamp(1.25rem,4.5vw,3rem)] font-family text-white">
          Experience the epitome of elegance and sophistication at our luxurious hotel, where every detail is meticulously crafted to provide an unforgettable stay.
        </p>
      </div>

    </section>

    <section id="about" className = "relative w-full h-[260vh] bg-royalblue">

      <div id="aboutini" className = "relative top-[0vh] w-[50vw] h-[4vh] bg-royalblue"/>
      <div id='about2' className = 'relative top-[2vh] w-[70vw] h-[4vh] bg-royalblue'/>
      <div id='about3' className = 'relative top-[4vh] w-[90vw] h-[4vh] bg-royalblue'/>
      <div className = 'relative left-[5vw] lg:left-[8vw] w-[90vw] lg:w-[80vw] h-[20vh] lg:h-[15vh] p-4 flex alignitems-center justify-center'>
        <span className = 'absolute text-white text-right text-[clamp(1.5rem,4.5vw,3rem)] font-family'>"Success is not final; failure is not fatal: It is the courage to continue that counts."</span>
      </div>

      <div id = 'aboutpiccont' className = 'relative  w-[95vw] h-[90vh] mx-auto top-[10vh] flex flex-row justify-center items-center gap-4'>
        <span className = 'relative w-[50vw] h-[90vh] overflow-hidden'>
          <img id = "leftpic"src={H1} alt="Hotel" className="absolute w-[90vw] h-[120vh] object-cover" />
        </span>

        <span className = 'relative w-[50vw] h-[90vh] overflow-hidden'>
          <img id = "rightpic" src={H2} alt="Hotel" className="absolute w-[90vw] h-[120vh] object-cover" />
        </span>
      </div>

      <div className = 'relative mx-auto w-[90vw] lg:w-[80vw] h-[20vh] lg:h-[15vh] p-4 flex alighnItems-center justify-center top-[20vh]'>
        <span ref = {hoteldescRef} className = 'absolute text-white text-left text-[clamp(1.5rem,4.2vw,3.75rem)] font-family'>
          This hotel is a sanctuary of elegance and comfort, where every detail is meticulously designed to create an unforgettable experience for our guests.
        </span>
      </div>

      <div id = 'poolcont' className = "relative w-[100vw] h-[120vh] bg-black mt-[40vh] z-2 overflow-hidden">
      <img
          id = 'poolimg'
          src={pool}
          alt="Pool"
          className="absolute top-[-20vh] w-full h-[120vh] z-1 object-cover"
      />

      <span className="absolute top-[60vh] left-[5vw] lg:left-[10vw] group relative inline-block h-56 w-56 lg:h-80 lg:w-80 z-3">
        <svg
          viewBox="0 0 220 220"
          className="circle-ring"
          aria-label="hover ring"
        >
          <circle
            cx="110"
            cy="110"
            r="90"
            className="circle-ring__track"
          />
          <circle
            cx="110"
            cy="110"
            r="90"
            className="circle-ring__progress"
          />
        </svg>

        <div className="relative ring-content z-4 text-[0.7rem] sm:text-sm">
          Explore
        </div>

      </span>

        <span className = 'absolute w-[85vw] lg:w-[50vw] text-white text-[clamp(1.25rem,4.5vw,3.75rem)] text-right font-family top-[60vh] right-[5vw] p-4 z-2'>
          Instead of corridors, walking paths connect the apartments, making Era Residence feel closer to a group of private homes than a standard
        </span>
      </div>
    </section>

    <Why/>
    </div>
  )
}

export default Hero
