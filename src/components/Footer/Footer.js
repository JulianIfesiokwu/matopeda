import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className='flex flex-col px-8 sm:px-12 md:px-20 py-8 bg-slate-200'>
      <div className='footer-main flex flex-col sm:flex-row justify-between'>
        <div className='Navigation mb-4 sm:mb-0'>
          <h2 className='font-Noto text-xl mb-2'>Tour</h2>
          <div className='flex flex-col justify-center align-center gap-4'>
            <Link to="/tour" className='font-Inter tracking-wider text-sm'>Book Matopeda Tour</Link>
          </div>
        </div>
        <div className='dropdown flex flex-col mb-4 sm:mb-0'>
            <h2 className='font-Noto flex justify-between items-center gap-2 tracking-wider text-xl mb-2'>
                About Matopeda
            </h2>
            <ul className='dropdown-content text-sm font-Inter'>
                <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                    <Link to="/matopeda-designer" className='tracking-wider'>Meet the Designer</Link>
                </li>
                <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                    <Link to="/matopeda-team" className='tracking-wider'>Meet the Team</Link>
                </li>
                <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                    <Link to="/matopeda-team" className='tracking-wider'>Terms & Conditions</Link>
                </li>
                <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                    <Link to="/matopeda-team" className='tracking-wider'>Contact Us</Link>
                </li>
            </ul>
        </div>
        <div className='dropdown flex flex-col mb-4 sm:mb-0'>
                <h2 className='font-Noto flex justify-between items-center gap-2 tracking-wider text-xl mb-2'>
                    Bridal Atelier
                </h2>
                <ul className='dropdown-content text-sm font-Inter'>
                    <li className='mb-2 hover:ml-1 transition-all duration-500 ease-in'>
                        <Link to="/matopeda-designer" className=' tracking-wider'>Custom Wedding Dress</Link>
                    </li>
                    <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                        <Link to="/matopeda-team" className=' tracking-wider'>Bridal 2022</Link>
                    </li>
                    <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                        <Link to="/matopeda-team" className=' tracking-wider'>Bridal 2021</Link>
                    </li>
                </ul>
        </div>
        <div className='shop flex flex-col mb-4 sm:mb-0'>
          <h2 className='font-Noto flex justify-between items-center gap-2 text-xl mb-2'>
            Shop by Matopeda
          </h2>
          <ul className='dropdown-content text-sm font-Inter'>
              <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                  <Link to="/matopeda-shop" className='tracking-wider'>Headbands</Link>
              </li>
              <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                  <Link to="/matopeda-shop" className='tracking-wider'>T-shirts</Link>
              </li>
              <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                  <Link to="/matopeda-shop" className='tracking-wider'>Linen Collection</Link>
              </li>
              <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                  <Link to="/matopeda-shop" className='tracking-wider'>Adire Collection</Link>
              </li>
              <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                  <Link to="/matopeda-shop" className='tracking-wider'>Silk Print Collection</Link>
              </li>
              <li className='mb-2 hover:ml-2 transition-all duration-500 ease-in'>
                  <Link to="/wrap-dresses" className='tracking-wider'>Wrap Dresses</Link>
              </li>
          </ul>
        </div>
        <div className='Contact mb-4 sm:mb-0'>
          <h2 className='text-xl font-Noto tracking-wider mb-2'>Subscribe</h2>
          <form className='flex flex-col'>
            <p className='mb-1 font-Inter text-sm'>Get updates in our bi-monthly emails.</p>
            <input type='email' placeholder='Email' className='w-100 rounded text-base border px-2 py-1 border-slate-500 mb-3' />
            <button type='button' className='cursor-pointer border rounded py-1 px-2 text-white bg-blue-600 hover:bg-blue-400 transition-all duration-300 ease-in'>Subscribe</button>
          </form>
        </div>
        </div>
        <div className='copryright text-center font-Inter border-t-2 mt-3 pt-3 border-slate-300'>
          <p className='font-Inter'> &copy; {year} Matopeda Atelier</p>
        </div>
    </footer>
  )
}

export default Footer