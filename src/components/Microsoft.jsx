import React from 'react'
import MicrosoftLogo from '../assets/microsoft.png'
import frontPageImage from '../assets/fontImage.webp'
import surfaceDevice from '../assets/Surface-Devices.svg'


const Microsoft = () => {
  return (
<div>
  <nav className='h-24 flex justify-around items-center'>
    <div className='flex gap-6 items-center'>
      <div><i class="fa-solid fa-bars fa-2xl" style={{fontSize:"2rem"}}></i></div>
      <div><i class="fa-solid fa-magnifying-glass" style={{fontSize:"1rem"}}></i></div>
    </div>
    <div className='flex items-center gap-3'> 
      <img src={MicrosoftLogo} alt="Microsoft"/>
      <h1 className='text-3xl font-bold text-gray-500'>Microsoft</h1>
    </div>
    <div className='flex items-center gap-10'>
      <div><i class="fa-solid fa-cart-shopping fa-2xl" ></i ></div>
      <h1>shami</h1>
    </div>
  </nav>
  {/* first session */}
  <div className='h-34 bg-green-200'>
    <h2 className='text-2xl text-center font-semibold pt-5 '>Get school tech for less.If you don't love it, return it,</h2>
    <h2 className='text-2xl text-center font-semibold'>with 60-day free returns.</h2>
  </div>
 {/* font image */}
 <div>
   <img src={frontPageImage} alt="" />
 </div>

    <div className='p-3'>
      <h1 className='text-[33px] font-semibold'>Students get 3 free months of Microsoft 363</h1>
      <p className='text-xl my-5'>Save for a limited on Microsoft 365 Personal with Copilot -featuring premium apps,cloud storage, and more -when you sign up with your college email address.</p>
      <button className='bg-blue-800 text-2xl py-3 px-4 text-white'>Learn more</button>

      <hr className='border-t border-black my-5'/>
      <div className='w-1/2 flex items-center justify-around mx-auto my-15'>
        <i class="fa-regular fa-circle-pause fa-2xl"></i>
        <i class="fa-solid fa-less-than fa-2xl"></i>
        <button className='h-5 w-5 border border-black rounded-full'></button>
        <button className='h-5 w-5 border border-black rounded-full bg-black'></button>
        <i class="fa-solid fa-greater-than fa-2xl"></i>
      </div>
      <div>
        <div>

        </div>
        <div>
          <i class="fa-solid fa-computer"></i>
        </div>
      </div>
    </div>
</div>
  )
}

export default Microsoft
