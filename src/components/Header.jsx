import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import llogo from "../assets/llogo.png";
import { navigation } from "../constants";
import FramedButton from "./FramedButton";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (url) => {
    const [basePath, section] = url.split("#");

    if (pathname !== "/") {
      navigate(`/${section ? "#" + section : ""}`);
      setTimeout(() => {
        if (section) {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100); // Delay to allow navigation to complete
    } else {
      if (section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 lg:bg-[#0c0e0c]/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-[#0c0e0c]" : "bg-[#0c0e0c]/90 backdrop-blur-sm"
      }`}
      style={{
        backgroundColor: "#0c0e0c",
        borderBottom: "2px solid #d8323c",
      }}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-2 lg:py-3">
        <div className="flex items-center">
          <a
            className="block w-[8rem]"
            href="#hero"
            onClick={() => handleClick("#hero")}
          >
            <img src={llogo} width={120} height={40} alt="Brainwave" />
          </a>
        </div>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-[0rem] bg-[#0c0e0c] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`/${item.url}`} // Add / before url for correct path
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleClick(item.url); // Custom handle click
                }}
                className={`relative block font-code text-1xl lg:text-sm uppercase transition-colors duration-300 group ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-4 py-4 md:py-6 lg:-mr-0.25 lg:font-semibold ${
                  (item.url === hash || (pathname === "/" && item.url === `#${hash}`)) 
                  ? "text-n-1"  // Color for selected item
                  : "text-n-1" 
                } lg:leading-5 lg:hover:text-n-1 xl:px-8`}
              >
                {item.title}

                {/* TOP */}
                <span
                  className="absolute left-0 top-3 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#d8323c" }}
                />

                {/* RIGHT */}
                <span
                  className="absolute right-0 bottom-1 h-0 w-[2px] transition-all duration-300 group-hover:h-full"
                  style={{ backgroundColor: "#d8323c" }}
                />

                {/* BOTTOM */}
                <span
                  className="absolute bottom-3 right-0 h-[2px] w-0 transition-all duration-100 group-hover:w-full"
                  style={{ backgroundColor: "#d8323c" }}
                />

                {/* LEFT */}
                <span
                  className="absolute top-1 left-0 h-0 w-[2px] transition-all duration-300 group-hover:h-full"
                  style={{ backgroundColor: "#d8323c" }}
                />
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {!openNavigation && isLargeScreen && (
          <FramedButton href="#login" className="hidden lg:block">
            Contact Us
          </FramedButton>
        )}

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;