import ContactForm from './Components/ContactForm.jsx'

// Fixed site header: logo lockup + utility nav.
// These stay as two separate fixed elements (not one wrapper) because
// Hero's GSAP scroll animations move/scale headingRef, navRef and
// burgerRef independently - the logo box scales/translates on scroll
// while the nav bar only shifts color. Splitting them out here keeps
// Hero.jsx focused on the scroll choreography instead of markup.
const Header = ({ headingRef, navRef, burgerRef }) => {
  return (
    <>
      <div
        ref={headingRef}
        id="heading"
        className="fixed top-20 left-4 z-20 flex h-auto w-[42vw] max-w-[190px] items-center justify-center border-2 border-black p-3 sm:top-24 sm:left-6 sm:w-[32vw] sm:max-w-[220px] sm:p-4 lg:top-45 lg:left-10 lg:h-[15vh] lg:w-[26vw] lg:max-w-none lg:p-10 lg:px-10"
      >
        <h1 className="fixed font-family text-[clamp(1.35rem,6vw,6rem)] leading-none">
          CZARINA
        </h1>
      </div>

      <div className="fixed z-20 w-full px-4 pt-5 sm:px-6 sm:pt-6 lg:px-10 lg:pt-10">
        <nav
          ref={navRef}
          className="flex items-center justify-between text-[0.65rem] tracking-widest text-black font-sans font-medium sm:text-xs"
        >
          <div ref={burgerRef} className="flex cursor-pointer flex-col space-y-1">
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 lg:gap-10 lg:space-x-8">
            <a
              href="#select"
              className="hidden transition-opacity hover:opacity-70 sm:inline"
            >
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
    </>
  )
}

export default Header
