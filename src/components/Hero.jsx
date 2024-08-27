import logo from "../assets/llogo.png"; // Adjust the path if needed
import { useRef } from "react";
import ModelCanvas from './canvas/Ball'; // Import the combined ModelCanvas component
import Section from "./Section";
import CompanyLogos from './CompanyLogos';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <div
    className="justify-center bg-[#0c0e0c]"
    style={{
      backgroundImage: `
        radial-gradient(125% 125% at left center, #0c0e0c 70%, #d8323c),
        radial-gradient(125% 125% at right center, #0c0e0c 70%, #d8323c)
      `,
      backgroundSize: '50% 100%',
      backgroundPosition: 'left center, right center',
      backgroundRepeat: 'no-repeat'
    }}
  >    
      <Section
        className="h-screen flex flex-col items-center justify-between pt-0 -mt-0"
        id="hero"
      >
        <div
          className="relative w-full h-full flex flex-col items-center"
          ref={parallaxRef}
        >
          {/* Flex Container for Image and Title */}
          {/* <div className="flex items-center justify-center w-full max-w-[42rem] mx-auto text-center bg-transparent sm:mt-56">
  <h1 className="text-white text-[5rem] font-bold font-code mt-8 sm:mt-12 sm:text-[10rem] md:text-[11rem]">
    .EXE
  </h1>
  <h1 className="text-red-700 text-[5rem] ml-4 font-bold font-code mt-8 sm:mt-12 sm:text-[10rem] md:text-[11rem]">
    DEV
  </h1>
</div> */}


          {/* ModelCanvas centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <div 
              className="w-[80%] h-[80%] flex items-center justify-center" // Increased to 150% of the viewport width and height
              style={{ zIndex: 20 }}>
              <ModelCanvas />
            </div>
          </div>
          
          {/* Vertical Text on the Left Side */}
          <div
  className="absolute left-[0rem] lg:left-16 lg:top-[70%] top-[90%] transform -translate-y-1/2 flex flex-col items-center space-y-20 sm:left-[0rem] sm:top-[75%] sm:transform -translate-y-1/2 lg:space-y-36 space-y-20 sm:space-y-28"
>
  <span className="text-white lg:text-4xl text-xl flex items-center transform rotate-270 sm:text-2xl sm:rotate-270" style={{ letterSpacing: '0.1em' }}>
    <span className="absolute -left-2 -bottom-1 text-red-600 text-2xl glow transform rotate-0 sm:-left-4 sm:-bottom-0 sm:text-5xl sm:rotate-270">.</span>
    EMPOWER
  </span>
  <span className="text-white lg:text-4xl text-xl flex items-center transform rotate-270 sm:text-2xl sm:rotate-270" style={{ letterSpacing: '0.1em' }}>
    <span className="absolute -left-2 -bottom-1 text-red-600 text-2xl glow transform rotate-0 sm:-left-4 sm:-bottom-0 sm:text-5xl sm:rotate-270">.</span>
    EXCEL
  </span>
  <span className="text-white lg:text-4xl text-xl flex items-center transform rotate-270 sm:text-2xl sm:rotate-270" style={{ letterSpacing: '0.1em' }}>
    <span className="absolute -left-2 -bottom-1 text-red-600 text-2xl glow transform rotate-0 sm:-left-4 sm:-bottom-0 sm:text-5xl sm:rotate-270">.</span>
    EVOLVE
  </span>
</div>

        </div>

        {/* Company Logos positioned at the bottom with some space */}
        <div className="w-[50%] flex justify-center mb-[-15%] lg:mb-[-5%] sm:mb-[-10%]">
          <CompanyLogos className="  relative z-10 lg:block" />
        </div>
      </Section>
    </div>
  );
};

export default Hero;
