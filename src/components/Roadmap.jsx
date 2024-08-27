import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1, newgrid } from "../assets";
import { Gradient } from "./design/Roadmap";
import { Tilt } from "react-tilt";

const Roadmap = () => (
  <Section className="overflow-hidden bg-[#0c0e0c]" id="roadmap">
    <div className="container md:pb-10 bg-[#0c0e0c]">
      <Heading title="Ongoing Projects" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              key={item.id}
              className="md:flex even:md:translate-y-[7rem] p-0.25"
            >
              <Tilt
                options={{ max: 5, scale: 1 }}
                className="rounded-[2.5rem] w-full"
              >
                <div
                  className="p-8 rounded-[2.4375rem] overflow-hidden xl:p-15"
                  style={{
                    backgroundImage: item.gradient,
                    filter: 'brightness(1) contrast(1.1)',
                  }}
                >
                  <div className={`absolute top-0 left-0 right-0 bottom-0 max-w-full ${
                    item.colorful ? "" : ""
                  }`}>
                    <img
                      className="w-full"
                      src={newgrid}
                      width={650}
                      height={650}
                      alt="Grid"
                      style={{
                        transform: "rotate(90deg)",
                        opacity: 0.3,
                      }}
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </Tilt>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
