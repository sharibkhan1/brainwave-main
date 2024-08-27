import Section from "./Section";
import Heading from "./Heading";
import { service2, service3, check, background, flutterapp,reactbg, lamba } from "../assets";
import { brainwaveServices,brainServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
//import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use" className="bg-[#0c0e0c]">
      <div className="container">
        <Heading
          title="Our Expertise"
          text="Innovative solutions for a dynamic digital world."
        />
{/* <Gradient/> */}
        <div className="relative">
          
        <div className="relative z-1 bg-black flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]" style={{  background:
        'radial-gradient(125% 125% at 30% 80%, #121412 50%, #d8323c)',
        filter: 'brightness(1) contrast(1.1)',
      }}>
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
    <img
      className="w-full h-full object-cover md:object-right opacity-40"
      width={800}
      alt="Smartest AI"
      height={730}
      src={flutterapp}  
      
    />
{/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-black opacity-70" /> */}
</div>

  <div className="relative z-1 max-w-[17rem] ml-auto"style={{}} >
    <h4 className="h4 mb-4" style={{lineHeight:"1"}}>Flutter App Development</h4>
    <p className="body-2 mb-[3rem] text-n-3" > 
      Crafting seamless, cross-platform mobile experiences. Build once, deploy everywhere.
    </p>
    <ul className="body-2">
      {brainwaveServices.map((item, index) => (
        <li
          key={index}
          className="flex items-start py-4 border-t border-n-6"
        >
          <img width={24} height={24} src={check} />
          <p className="ml-4">{item}</p>
        </li>
      ))}
    </ul>
  </div>

  {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
</div>


          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div
  className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden"
  style={{
    boxShadow:
      '0 4px 8px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
  }}
>
  <div
    className="absolute inset-0"
    style={{
      background:
        'radial-gradient(125% 125% at 30% 40%, #121412 40%, #d8323c)',
        filter: 'brightness(1) contrast(1.1)',
    }}
  ></div>

<div className="absolute inset-0">
  <img
    src={reactbg}
    className="h-full w-full object-cover"
    width={630}
    height={750}
    alt="robot"
    style={{
      zIndex: 2,
     // maskImage: 'linear-gradient(to top left, transparent 20%, black 60%)',
      //WebkitMaskImage: 'linear-gradient(to top left, transparent 0%, black 70%)',
    }}
  />
</div>


  <div
    className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15"
    style={{ zIndex: 2 }}
  >
    <h4 className="h4 mb-4">React.js Development</h4>
    <p className="body-2 mb-[3rem] text-n-3">
      Building dynamic, responsive web applications. Leverage React.js for
      scalable and interactive user experiences.
    </p>
  </div>
</div>

            {/* <Gradient/> */}
            <div className="relative z-1 grid gap-5 lg:grid-row-2">
            <div className="relative p-2  rounded-3xl overflow-hidden lg:min-h-[30rem]"  style={{
    background: "radial-gradient(125% 125% at 30% 30%, #121412 50%, #d8323c)",
    // background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 1) 40%)',
    filter: 'brightness(1) contrast(1.1)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
  }} >
  <div className="relative z-10 py-6 px-2 xl:px-4">
    <h4 className="h4 mb-2">LLaMA AI Chatbots</h4>
    <p className="body-2 mb-[4rem] text-n-3">
      Transforming customer interactions with intelligent, adaptive AI. Our LLaMA-powered chatbots deliver personalized and efficient communication.
    </p>
    <ul className="body-2">
      {brainServices.map((item, index) => (
        <li
          key={index}
          className="flex items-start py-4 border-t border-n-6"
        >
          <img width={24} height={24} src={check} />
          <p className="ml-4">{item}</p>
        </li>
      ))}
    </ul>
  </div>
</div>



  <div className="p-2 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[20rem]"   style={{
   // background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 1) 40%)',
   background: "radial-gradient(125% 125% at 50% 20%, #121412 40%, #d8323c)",
 
    filter: 'brightness(1) contrast(1.1)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
  }}>
    <div className="py-6 px-2 xl:px-4">
      <h4 className="h4 mb-2">LLM & ML Integration</h4>
      <p className="body-2 mb-[1rem] text-n-3">
      Unlock the potential of language with advanced LLM solutions. Enhance your applications with intelligent, context-driven interactions.
      </p>
      <p className="h6 mb-[1rem] text-n-1">
      Integration platforms :
      </p>
      <ul className="flex items-center justify-center gap-4">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                         "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                         
                      }`}
                    >
                      <div
                        className={
                          "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                           
                        }
                      >
                        <img src={item} width={29} height={29} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
    </div>
  </div>
</div>

            
          </div>

          {/* <Gradient /> */}
        </div>
      </div>
    </Section>
  );
};

export default Services;
