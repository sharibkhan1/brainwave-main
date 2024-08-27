const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} heading-container max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
      <div className="line top-line h-2 w-full md:h-1 md:w-full"></div>
      {/* <div className="line bottom-line h-2 w-full md:h-4 md:w-full"></div> */}
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
