import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
// import logo from "../../assets/matopeda-logo.svg";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [bridalDropdown, setBridalDropdown] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  const clearDropdowns = () => {
    setAboutDropdown(false);
    setBridalDropdown(false);
    setShopDropdown(false);
  };

  //stop body scroll when mobile menu is open
  menu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <header className="flex justify-between bg-black md:bg-transparent w-full items-start md:px-8 lg:px-16 py-4 md:py-8 fixed top-0 w-full text-white z-10 px-8 md:px-20 ">
      <Link
        to="/"
        className="cursor-pointer text-lg md:text-sm lg:text-lg font-Noto"
      >
        {/* <img src={logo} alt="logo" className="h-auto w-24" /> */}
        Matopeda Atelier
      </Link>
      <div className="md:hidden">
        {menu ? (
          <IoClose size="24" onClick={showMenu} />
        ) : (
          <HiMenu size="24" onClick={showMenu} />
        )}
      </div>
      <nav
        className={`md:flex-row bg-black md:bg-transparent w-full md:w-auto px-8 md:px-0 h-screen md:h-auto flex flex-col gap-4 md:gap-2 lg:gap-6 md:justify-center align-center absolute top-16 left-0 md:static transition-all duration-500 ease-in ${
          menu ? "top-12" : "top-[-990px]"
        }`}
      >
        <NavLink
          to="/tour"
          className="font-Noto text-lg md:text-sm lg:text-lg mt-4 md:mt-0"
        >
          Book a Tour
        </NavLink>
        <div className="dropdown flex flex-col">
          <button
            type="button"
            className="font-Noto outline-none flex justify-between items-center gap-2 text-lg md:text-sm lg:text-lg"
            onClick={() => {
              clearDropdowns();
              setAboutDropdown(!aboutDropdown);
            }}
          >
            About Us
            {aboutDropdown ? <BsChevronUp /> : <BsChevronDown />}
          </button>
          {aboutDropdown && (
            <ul
              className={`dropdown-content relative md:absolute md:top-16 text-sm transition-all duration-500 ease-in`}
            >
              <li className="mb-2 mt-4 md:mt-1">
                <NavLink to="/matopeda-designer" className="font-Inter ">
                  Meet the Designer
                </NavLink>
              </li>
              <li className="mb-2 mt-4 md:mt-1">
                <NavLink to="/matopeda-team" className="font-Inter ">
                  Meet the Team
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="dropdown flex flex-col ">
          <button
            type="button"
            className="font-Noto outline-none flex justify-between items-center gap-2 text-lg md:text-sm lg:text-lg"
            onClick={() => {
              clearDropdowns();
              setBridalDropdown(!bridalDropdown);
            }}
          >
            Bridal Atelier
            {bridalDropdown ? <BsChevronUp /> : <BsChevronDown />}
          </button>
          {bridalDropdown && (
            <ul className="dropdown-content relative md:absolute md:top-16 text-sm">
              <li className="mb-2 mt-4 md:mt-1">
                <NavLink to="/matopeda-designer" className="font-Inter ">
                  Custom Wedding Dress
                </NavLink>
              </li>
              <li className="mb-2 mt-4 md:mt-1">
                <NavLink to="/matopeda-team" className="font-Inter ">
                  Bridal 2022
                </NavLink>
              </li>
              <li className="mb-2 mt-4 md:mt-1">
                <NavLink to="/matopeda-team" className="font-Inter ">
                  Bridal 2021
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="dropdown flex flex-col ">
          <button
            type="button"
            className="font-Noto outline-none flex justify-between items-center gap-2 text-lg md:text-sm lg:text-lg"
            onClick={() => {
              clearDropdowns();
              setShopDropdown(!shopDropdown);
            }}
          >
            Shop
            {shopDropdown ? <BsChevronUp /> : <BsChevronDown />}
          </button>
          {shopDropdown && (
            <ul className="dropdown-content relative md:absolute md:top-16 text-sm">
              <li className="mb-2 mt-4 md:mt-1">
                <NavLink to="/matopeda-shop" className="font-Inter ">
                  Headbands
                </NavLink>
              </li>
              <li className="mb-2 mt-4 md:mt-1">
                <Link to="/matopeda-shop" className="font-Inter ">
                  T-shirts
                </Link>
              </li>
              <li className="mb-2 mt-4 md:mt-1">
                <Link to="/matopeda-shop" className="font-Inter ">
                  Linen Collection
                </Link>
              </li>
              <li className="mb-2 mt-4 md:mt-1">
                <Link to="/matopeda-shop" className="font-Inter ">
                  Adire Collection
                </Link>
              </li>
              <li className="mb-2 mt-4 md:mt-1">
                <Link to="/matopeda-shop" className="font-Inter ">
                  Silk Print Collection
                </Link>
              </li>
              <li className="mb-2 mt-4 md:mt-1">
                <Link to="/wrap-dresses" className="font-Inter ">
                  Wrap Dresses
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link
          to="contact-us"
          className="font-Noto outline-none text-lg md:text-sm lg:text-lg"
        >
          Contact
        </Link>
        <Link
          to="/sign-up"
          className="flex items-center font-Noto text-lg md:text-sm lg:text-lg mr-3 cursor-pointer"
        >
          <FaShoppingBag size="20" className="mr-1" />
          Cart
        </Link>
        <Link
          to="/sign-in"
          className="flex items-center font-Noto outline-none text-lg md:text-sm lg:text-lg cursor-pointer"
        >
          <BiSolidUserCircle size="20" className="mr-1" />
          Log In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
