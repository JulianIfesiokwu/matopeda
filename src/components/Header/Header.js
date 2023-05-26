import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import logo from '../../assets/matopeda-logo.svg';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdMenu,MdClose } from "react-icons/md";

const Header = () => {
    const [ menu, setMenu ] = useState(false);
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
    }

    //stop body scroll when mobile menu is open
    menu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

    return (
    <header className='flex justify-between bg-black md:bg-transparent w-full items-start md:px-20 py-4 md:py-8 fixed top-0 w-full text-white z-10 px-8 md:px-20 '>
        <Link to="/" className='logo-container w-24 cursor-pointer'>
            <img src={logo} alt='logo' className='h-auto max-w-full' />
        </Link>
        <div className='md:hidden'>
            {menu ? <MdClose size='35' onClick={showMenu} /> : <MdMenu size='35' onClick={showMenu} />}
        </div>
        <nav className={`md:flex-row bg-black md:bg-transparent md:w-5/6 w-full h-screen md:h-auto flex flex-col gap-4 md:justify-center align-center absolute top-16 left-0 px-8 md:static ${menu ? 'top-16 ':'top-[-490px]'}`}>
            <Link to="/tour" className='font-Noto tracking-wide text-sm md:text-base'>Book Matopeda Tour</Link>
            <div className='dropdown flex flex-col'>
                <button type='button' className='font-Noto flex justify-between items-center gap-2 tracking-wide text-sm md:text-base' 
                onClick={() => {
                    clearDropdowns();
                    setAboutDropdown(!aboutDropdown);
                    }}>
                    About Matopeda
                    {aboutDropdown ? <BsChevronUp /> : <BsChevronDown />}
                </button>
                {aboutDropdown && <ul className={`dropdown-content relative md:absolute md:top-16 text-sm transition-all duration-500 ease-in`}>
                    <li className='mb-1'>
                        <Link to="/matopeda-designer" className='font-Inter tracking-wide'>Meet the Designer</Link>
                    </li>
                    <li className='mb-1'>
                        <Link to="/matopeda-team" className='font-Inter tracking-wide'>Meet the Team</Link>
                    </li>
                </ul>
                }
            </div>
            <div className='dropdown flex flex-col '>
                <button type='button' 
                className='font-Noto flex justify-between items-center gap-2 tracking-wide text-sm md:text-base' 
                onClick={() => {
                    clearDropdowns()
                    setBridalDropdown(!bridalDropdown)
                }}>
                    Bridal Atelier
                    {bridalDropdown ? <BsChevronUp /> : <BsChevronDown />}</button>
                {bridalDropdown && <ul className='dropdown-content relative md:absolute md:top-16 text-sm'>
                    <li className='mb-1'>
                        <Link to="/matopeda-designer" className='font-Inter tracking-wide'>Custom Wedding Dress</Link>
                    </li>
                    <li className='mb-1'>
                        <Link to="/matopeda-team" className='font-Inter tracking-wide'>Bridal 2022</Link>
                    </li>
                    <li className='mb-1'>
                        <Link to="/matopeda-team" className='font-Inter tracking-wide'>Bridal 2021</Link>
                    </li>
                </ul>
                }
            </div>
            <div className='dropdown flex flex-col '>
                <button type='button' className='font-Noto text-sm flex justify-between items-center gap-2 text-sm md:text-base' 
                onClick={() => {
                    clearDropdowns()
                    setShopDropdown(!shopDropdown)
                }}>
                    Shop by Matopeda
                    {shopDropdown ?  <BsChevronUp /> : <BsChevronDown />}</button>
                {shopDropdown && <ul className='dropdown-content relative md:absolute md:top-16 text-sm'>
                    <li className='mb-1'>
                        <Link to="/matopeda-shop" className='font-Inter tracking-wide'>Headbands</Link>
                    </li>
                    <li className='mb-1'>
                        <Link to="/matopeda-shop" className='font-Inter tracking-wide'>T-shirts</Link>
                    </li>
                    <li className='mb-1'>
                        <Link to="/matopeda-shop" className='font-Inter tracking-wide'>Linen Collection</Link>
                    </li>
                    <li className='mb-1'>
                        <Link to="/matopeda-shop" className='font-Inter tracking-wide'>Adire Collection</Link>
                    </li>
                    <li className='mb-1'>
                        <Link to="/matopeda-shop" className='font-Inter tracking-wide'>Silk Print Collection</Link>
                    </li>
                    <li className='mb-1'>
                        <Link to="/wrap-dresses" className='font-Inter tracking-wide'>Wrap Dresses</Link>
                    </li>
                </ul>
                }
            </div>            
            <Link to='contact-us' className='font-Noto tracking-wide text-sm md:text-base'>Contact Us</Link>
            <div className='sign-up flex md:hidden flex-col'>            
                <FaShoppingBag size="20" className='mb-5' />
                <Link to="/sign-in" className='font-Noto tracking-wide text-sm md:text-base'>Log In</Link>
            </div>
        </nav>
        <div className='sign-up hidden md:flex'>            
            <FaShoppingBag size="20" className='cursor-pointer mr-5' />
            <Link to="/sign-in" className='font-Noto tracking-wide text-sm md:text-base'>Log In</Link>
        </div>
    </header>
  )
};

export default Header;