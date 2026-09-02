import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";

const About = () => {

    gsap.registerPlugin(ScrollTrigger)

        useGSAP(() => {

        gsap.to(["#aboutini", '#about'], {
            y: -100,
            ease: "exponential.inOut",
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                markers: true,
            },
        });
    });

  return (
    <>
    <section id="aboutini" className = "relative w-[50vw] h-[10vh] bg-black">

    </section>

    <section id="about" className = "relative w-full h-[90vh] bg-black">

    </section>
    </>
  );
};

export default About;