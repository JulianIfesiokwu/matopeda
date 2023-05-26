import React from 'react';
import deliverySvg from "../assets/delivery-svg.svg";
import worldDeliverySvg from "../assets/world-svg.svg";
import secureSvg from "../assets/secure-svg.svg";

function Homepage() {
  return (
    <>
    <section className='w-full bg-hero-pattern bg-black bg-center bg-top bg-no-repeat h-screen'>
        <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50">
            <span className="uppercase text-white text-3xl md:text-6xl font-Noto tracking-wider font-bold w-1/2 text-center ">
                Where Fashion meets Luxury
            </span>
            <div className='mt-8 text-white text-2xl'>
                <button className='border-2 border-white rounded px-12 py-4 hover:bg-blue-400 hover:border-blue-400 transition-all duration-300 ease-in'>Shop Now</button>
            </div>
        </div>
    </section>
    <section className=''>
        <div className='bg-black flex flex-col sm:flex-row justify-between px-8 sm:px-12 md:px-20 py-4'>
            <article className='flex items-center mb-4 justify-start'>
                <div className='mr-2'>                    
                    <img className="h-auto max-w-full" src={deliverySvg} alt="free delivery in US" />
                </div>
                <div className='text-white'>
                    <h3 className='font-Noto text-base'>Free Shipping</h3>
                    <p className='font-Inter text-sm'>On your first order (available in US only)</p>
                </div>
            </article>
            <article className='flex items-center mb-4 justify-start'>
                <div className='mr-2'>
                    <img className="h-auto max-w-full" src={worldDeliverySvg} alt="worldwide delivery" />
                </div>
                <div className='text-white'>
                    <h3 className='font-Noto text-base'>Worldwide Delivery</h3>
                    <p className='font-Inter text-sm'>Your order comes to you</p>
                </div>
            </article>
            <article className='flex items-center mb-4 justify-start'>
                <div className='mr-2'>
                    <img className="h-auto max-w-full" src={secureSvg} alt="secure payments" />
                </div>
                <div className='text-white'>
                    <h3 className='font-Noto text-base'>Secure Checkout</h3>
                    <p className='font-Inter text-sm'>Your information is secure</p>
                </div>
            </article>
        </div>
        <div className=''>
            
        </div>
    </section>
    </>
  )
}

export default Homepage