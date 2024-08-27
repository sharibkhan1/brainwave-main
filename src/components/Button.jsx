import ButtonSvg from "../assets/svg/ButtonSvg";
import { useState } from "react";

const Button = ({ className, href, onClick, children, px, white }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Base button styles
  const baseClasses = `relative inline-flex items-center justify-center h-11 transition-all ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""} border-2 ${
    isHovered ? "border-gradient scale-95 " : "border-transparent"
  } ${isHovered ? "bg-transparent text-white " : " text-white"}`;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const renderButton = () => (
    <button
      className={`${baseClasses} ${isHovered ? "shadow-glow" : ""}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`relative z-10 ${isHovered ? "opacity-100" : "opacity-100"}`}>
        {children}
      </span>
      <ButtonSvg white={white} hiddenOnHover={isHovered} />
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      className={`${baseClasses} ${isHovered ? "shadow-glow" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`relative z-10 ${isHovered ? "opacity-100" : "opacity-100"}`}>
        {children}
      </span>
      <ButtonSvg white={white} hiddenOnHover={isHovered} />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
