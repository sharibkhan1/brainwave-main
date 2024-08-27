import SectionSvg from "../assets/svg/SectionSvg";

const color = "#d8323c";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div
        className="hidden absolute top-0 left-5 w-0.25 h-full pointer-events-none md:block lg:left-7.5 xl:left-10"
        style={{ backgroundColor: color }}
      />
      <div
        className="hidden absolute top-0 right-5 w-0.25 h-full pointer-events-none md:block lg:right-7.5 xl:right-10"
        style={{ backgroundColor: color }}
      />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
            style={{ backgroundColor: color }}
          />
          <SectionSvg crossesOffset={crossesOffset} color={color} />
        </>
      )}
    </div>
  );
};

export default Section;
