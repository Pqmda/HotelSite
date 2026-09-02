import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useRef } from "react";
import hotelImage from './assets/Hotel1.png'
import sky from './assets/Sky.jpg'
import H1 from './assets/Highlight1.png'
import H2 from './assets/Highlight2.png'


const Hero = () => {

gsap.registerPlugin(ScrollTrigger);
    const headingRef = useRef();
    const barRef = useRef();
    const landingRef = useRef();
    const navRef = useRef();
    const burgerRef = useRef();

    const tlmaintext = gsap.timeline({
      scrollTrigger: {
        trigger: "#text1st",
        start: "top top",
        end: "+=1000",
        scrub: 1,
      },
    });

    // const tlaboutfragments = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#about",
    //       start: "top bottom",
    //       end: "bottom bottom",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });

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

        gsap.to(headingRef.current, {
            scale: 0.3,
            y: -210,
            x: -100,
            ease: "exponential.inOut",
            scrollTrigger: {
                trigger: "#heading",
                start: "top 15%",
                end: "+=1000",
                scrub: 0.5,
            },
        });

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

        gsap.to("#burger span", {
          backgroundColor: "white",
          ease: "power1.inOut",
            scrollTrigger: {
              trigger: "#landing",
              start: "10% 15%",
              end: "60% 60%",
              scrub: true,
            },
        });

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

      gsap.to(['#leftpic','#rightpic',],{
        y: -400,
        ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#aboutpiccont",
              start: "top 90%",
              end: "bottom top",
              scrub:true,
              markers: true,
          }
      })

  }, []);


  return (
    <>
        <div ref={headingRef} id = "heading" className = 'fixed top-45 left-10 w-[26vw] h-[15vh] p-10 px-10 z-20 border-2 border-black justify-center items-center flex'>
            <h1  className="fixed text-8xl font-family ">
                CZARINA
            </h1>
        </div>

    <div className = 'fixed w-full pt-10 px-10 z-20 '>
        <nav ref={navRef} className="flex items-center justify-between text-xs tracking-widest text-black font-sans font-medium">
            {/* Hamburger / Menu icon on the left */}
            <div ref={burgerRef} className="flex flex-col space-y-1 cursor-pointer">
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </div>

            {/* Navigation links pushed to the right side of the screen */}
            <div className="flex items-center gap-10 space-x-8">
              <a href="#select" className="hover:opacity-70 transition-opacity">
                SELECT OFFICE SPACE
              </a>
              <span className="flex items-center space-x-1 cursor-pointer">
                <span>♡</span>
                <span>0</span>
              </span>
              <a href="#contact" className="hover:opacity-70 transition-opacity">
                CONTACT US
              </a>
            </div>
        </nav>
    </div>

    <section id="landing" className="relative w-[100vw] h-[150vh] overflow-hidden bg-image bg-cover bg-center" style={{ backgroundImage: `url(${sky})` }}>
        <img
            src={hotelImage}
            alt="Hotel"
            ref={landingRef}
            id = 'hotelmain'
            className="absolute top-[20vh] inset-0 mt-100 w-full h-[120vh] z-9"
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

      <div id = "text1st" className = 'absolute w-[20vw] h-[5vw] top-[50vh] left-[40vw] z-20 font-family text-2xl text-white flex items-center justify-center'>
        <label>
          Where luxury meets comfort.
        </label>
      </div>

      <div
        id="text2nd"
        className="absolute left-[15vw] top-[30vh] z-0 flex h-[40vw] w-[25vw] items-start justify-center border-1 border-white/50 pt-4 "
      >
        <div className="flex flex-col justify-center text-center text-white">
          <span className="text-2xl font-family">CLASS</span>
          <span className="text-9xl font-family">A</span>
        </div>
      </div>

      <div id = "text3rd" className = 'absolute top-[80vh] left-[25vw] w-[50vw] h-[25vh] z-20 flex items-center justify-center'>
        <p className = "relative text-center text-3xl font-family text-white">
          Experience the epitome of elegance and sophistication at our luxurious hotel, where every detail is meticulously crafted to provide an unforgettable stay.
        </p>
      </div>

    </section>

    <section id="about" className = "relative w-full h-[200vh] bg-royalblue">
      <div id="aboutini" className = "relative top-[0vh] w-[50vw] h-[4vh] bg-royalblue"/>
      <div id='about2' className = 'relative top-[2vh] w-[70vw] h-[4vh] bg-royalblue'/>
      <div id='about3' className = 'relative top-[4vh] w-[90vw] h-[4vh] bg-royalblue'/>
      <div className = 'relative left-[8vw] w-[80vw] h-[15vh] p-4 flex alignitems-center justify-center'>
        <span className = 'absolute text-white text-right text-5xl font-family'>"Success is not final; failure is not fatal: It is the courage to continue that counts."</span>
      </div>
      <div id = "aboutpiccont" className = 'relative  w-[95vw] h-[90vh] mx-auto top-[10vh] flex flex-row justify-center items-center gap-4 '>
        <span className = 'relative w-[50vw] h-[90vh] overflow-hidden'>
          <img id = "leftpic" src={H1} alt="Hotel" className="w-[90vw] h-[100vh] object-cover" />
        </span>

        <span className = 'relative w-[50vw] h-[90vh] overflow-hidden'>
          <img id = "rightpic" src={H2} alt="Hotel" className="w-[90vw] h-[100vh] object-cover" />
        </span>
      </div>
    </section>

    </>
  )
}

export default Hero