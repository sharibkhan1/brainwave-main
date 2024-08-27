import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { brainwaveSymbol, service2 } from "../assets";
import { collabApps, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { motion } from "framer-motion";
import { LeftCurve, RightCurve, Gradients } from "./design/Collaboration";
import Heading from './Heading';
import llogo from "../assets/llogo.png";
import LamaCanvas from './canvas/Lamaaa';
import ReactCanvas from './canvas/React';
import ComputersCanvas from './canvas/Flutter';
import { PhotoChatMessage, PhotoChatMessageLeft } from "./design/Services";
import { GradientLight, WhiteGradientLight } from "./design/Benefits";
import { Gradient } from "./design/Services";

const Collaboration = () => {
  return (
    <div style={{ background: "#0c0e0c" }}>
      <Section crosses id="features">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl mx-auto"
          title="Development Services"
        />

        <div className="container lg:flex">
          <div className="lg:w-[40rem] z-2 relative">
            <div className="relative min-h-[39rem] border bg-black border-n-1/10 rounded-3xl overflow-hidden"
                                style={{ backgroundImage: "radial-gradient(125% 125% at 50% 40%, #0c0e0c 35%, #eee9e9)" }}

            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <Gradient />

              

              <PhotoChatMessage />
              <PhotoChatMessageLeft />
              <div className=" absolute  bottom-0  flex flex-col justify-end p-5 lg:p-12 border-t-2" 
                    style={{ backgroundImage: "radial-gradient(125% 125% at 70% 90%, #121412 65%, #d8323c)",
                      filter: 'brightness(1) contrast(1.1)',

                     }}

              >
                <h4 className=" h4 mb-4">Need Help? Ask Our .EXE Bot!</h4>
                <p className="body-2 mb-[4rem] text-n-3">
                  Get instant answers to your questions with our integrated chatbot. Whether you need guidance or quick support, we're here to help!
                </p>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[50%] lg:w-[60%] z-5">
                  <Link to="/chatbotss"> {/* Use Link for navigation */}
                    <motion.button
                      initial={{ "--x": "100%", scale: 1 }}
                      animate={{ "--x": "-100%" }}
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 0.1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                          type: "spring",
                          stiffness: 10,
                          damping: 5,
                          mass: 0.1,
                        },
                      }}
                      className="w-full py-2 rounded-md relative unique-radial-gradient"
                    >
                      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative unique-linear-mask">
                        Chat Now
                      </span>
                      <span className="block absolute inset-0 rounded-md p-px unique-linear-overlay" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:ml-auto xl:w-[38rem] mt-4">
            <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto" style={{ color: "white" }}>
              {collabText}
            </p>
            <div className="relative w-[100%] h-[50%] flex items-center justify-center mt-[-4%]" style={{ zIndex: 20 }}>
              {/* Circular Blur Background */}
              <div
                className="absolute w-[90%] h-[50%] rounded-full bg-white opacity-60 sm:w-[70%] sm:h-[40%] sm:opacity-40"
                style={{
                  filter: "blur(150px)",
                  zIndex: 0, // Make sure it's behind the canvases
                }}
              />
              <LamaCanvas />
              <ComputersCanvas />
              <ReactCanvas />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Collaboration;
