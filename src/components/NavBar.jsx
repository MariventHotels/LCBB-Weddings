import { useState, useEffect } from "react";
import logo from "../assets/logos/lcw-logo.png";
import NavItem from "./NavItem";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { Squash as Hamburger } from "hamburger-react";
import { useMediaQuery } from "@react-hook/media-query";
// import NavBarLogoAnim from "../Reusable Components/NavBarLogoAnim";
import Button from "../Reusable Components/Button";
// import { VscLinkExternal } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";
const NavBar = () => {
  // State for navigation visibility and mobile menu
  const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [navHeight, setNavHeight] = useState("normal");

  // Media query for screen size
  const belowMd = useMediaQuery("(max-width: 852px)");

  // New state for logo visibility
  const [isLogoHidden, setIsLogoHidden] = useState(false);

  // Function to handle mobile menu
  const handleNav = () => {
    setNav(!nav);
    setOpen(!isOpen);
  };

  // Reset navigation and mobile menu on screen size change
  useEffect(() => {
    setNav(false);
    setOpen(false);
  }, [belowMd]);

  // Use custom hook for scroll position
  const scrollPosition = useScrollPosition();

  // Helper function to conditionally apply CSS classes
  function classNames(...classes) {
    return classes.filter(Boolean).join("");
  }

  // Effect to hide the logo when scrolling down
 useEffect(() => {
   if (scrollPosition > 0) {
     // If scroll position is greater than 0, hide the logo after a delay
     const hideLogoTimeout = setTimeout(() => {
       setIsLogoHidden(true);
       setNavHeight("short"); // Set the navbar to a shorter height
     }, 300); // Adjust the delay duration as needed

     return () => clearTimeout(hideLogoTimeout);
   } else {
     setIsLogoHidden(false); // Reset logo visibility when scrolling back to the top
     setNavHeight("normal"); // Set the navbar back to its normal height
   }
 }, [scrollPosition]);

  const logoStyles = {
    transform: isLogoHidden && !belowMd ? "translateY(-300%)" : "translateY(0)",
    transition: "transform 0.2s ease-out",
  };

  const navbarStyles = {
    height: navHeight === "short" && !belowMd ? "0px" : "60px", // Adjust the heights as needed
    transition: "height 0.5s ease-out",
  };

  // Menu items data
  const menuItems = [
    { to: "/", label: "Home", hasDropdown: false },
    {
      to: "/bataan",
      label: "las casas bataan",
      hasDropdown: true,
      dropdownItems: [
        { to: "/bataan/packages", label: "Packages" },
        { to: "/bataan/venue", label: "Venue" },
        { to: "/bataan/menu", label: "Menu" },
        { to: "/bataan/lookbook", label: "LookBook" },
      ],
    },
    {
      to: "/qc",
      label: "las casas qc",
      hasDropdown: true,
      dropdownItems: [
        { to: "/qc/packages", label: "Packages" },
        { to: "/qc/venue", label: "Venue" },
        { to: "/qc/menu", label: "Menu" },
        { to: "/qc/lookbook", label: "LookBook" },
      ],
    },
    { to: "/vshotel", label: "vs hotel", hasDropdown: false },
    { to: "/gallery", label: "gallery", hasDropdown: false },
    // { to: "/aboutus", label: "about us", hasDropdown: false },
    { to: "/inquire", label: "inquire now", hasDropdown: false },
  ];

  return (
    <header
      className={classNames(
        scrollPosition > 0 ? "shadow " : "shadow-none ",
        "sticky top-0 z-[999] block bg-[#ffffff] bg-cover transition-shadow"
      )}
    >
      <div
        className="mx-auto flex justify-center z-[999] bg-white transition-all"
        style={navbarStyles}
      >
        <div className="mt-[5px]">
          <div
            className="max-w-full max-h-[30px] mt-2 mb-4 z-50"
            style={logoStyles}
          >
            <img
              src={logo}
              alt="Las Bodas Logo"
              className={"max-w-[200px] xxsm:hidden"}
            />
          </div>
        </div>
      </div>

      <nav className="z-[3] hidden absolute top-3 left-4 xmd:flex">
        <Hamburger size={20} onToggle={handleNav} toggled={isOpen} />
      </nav>
      <div className="hidden z-[3] absolute top-5 right-4 xmd:flex">
        <Link to="/inquire">
          <AttentionSeeker effect="tada">
            <Button className="!h-[30px] !w-[120px] !text-xs">
              Inquire now
            </Button>
          </AttentionSeeker>
        </Link>
      </div>

      <ul
        className={classNames(
          scrollPosition > 0 ? "shadow-custom " : "shadow-none ",
          `flex items-center justify-center font-futura tracking-widest text-xs uppercase gap-1 py-4 xmd:flex-col xmd:items-start bg-white w-full -z-50 xmd:absolute transition-all duration-1000 ease-in-out ${
            nav ? "top-14" : "top-[-440px]"
          }`
        )}
      >
        {menuItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            label={item.label}
            hasDropdown={item.hasDropdown}
            dropdownItems={item.dropdownItems}
            handleNav={handleNav}
          />
        ))}
      </ul>
    </header>
  );
};

export default NavBar;
