import React from 'react'
import MicrosoftLogo from '../assets/microsoft.png'
import frontPageImage from '../assets/fontImage.webp'
import surfaceDevice from '../assets/Surface-Devices.svg'
import XboxGames from '../assets/XboxGames.svg'
import IconsAccessories from '../assets/IconsAccessories.svg'
import IconsBusiness from '../assets/IconsBusiness.svg'
import IconPC from '../assets/IconPC.svg'
import Microsoft365 from '../assets/Microsoft365.svg'
import CardCopilot from '../assets/CardCopilot.avif'
import CardSurfaceLaptop from '../assets/CardSurfaceLaptop.avif'
import Cardgamescom from '../assets/Cardgamescom.avif'
import HighlightMC from '../assets/HighlightMC.avif'
import ContentCard from '../assets/ContentCard.avif'
import ContentCardMicrosoft from '../assets/ContentCardMicrosoft.avif'
import ContentCardWindows from '../assets/ContentCardWindows.avif'
import ContentCardAzureAIBloom from '../assets/ContentCardAzureAIBloom.avif'
import ContentCardAIforScience from '../assets/ContentCardAIforScience.avif'
import ContentCardAIStudentsFight from '../assets/ContentCardAIStudentsFight.avif'
import ContentCardAIWorklab from '../assets/ContentCardAIWorklab.avif'



const Microsoft = () => {
  return (
    <div>
      <nav className='h-24 flex justify-around items-center w-154'>
        <div className='flex gap-6 items-center'>
          <div><i class="fa-solid fa-bars fa-2xl" style={{ fontSize: "2rem" }}></i></div>
          <div><i class="fa-solid fa-magnifying-glass" style={{ fontSize: "1rem" }}></i></div>
        </div>
        <div className='flex items-center gap-3'>
          <img src={MicrosoftLogo} alt="Microsoft" />
          <h1 className='text-3xl font-bold text-gray-500'>Microsoft</h1>
        </div>
        <div className='flex items-center gap-10'>
          <div><i class="fa-solid fa-cart-shopping fa-2xl" ></i ></div>
          <h1>shami</h1>
        </div>
      </nav>
      {/* first session */}
      <div className='h-28 bg-green-200 w-154'>
        <h2 className='text-2xl text-center font-semibold pt-5 '>Get school tech for less.If you don't love it, return it,</h2>
        <h2 className='text-2xl text-center font-semibold'>with 60-day free returns.</h2>
      </div>
      {/* font image */}
      <div className='w-154'>
        <img src={frontPageImage} alt="" />
      </div>

      <div className='p-3 w-154'>
        <h1 className='text-[35px] font-semibold'>Students get 3 free months of Microsoft 363</h1>
        <p className='text-2xl my-5'>Save for a limited on Microsoft 365 Personal with Copilot -featuring premium apps,cloud storage, and more -when you sign up with your college email address.</p>
        <button className='bg-blue-800 text-2xl py-3 px-4 text-white'>Learn more</button>

        <hr className='border-t border-black my-5 w-150' />
        {/* symbols */}
        <div className='w-90 flex items-center justify-around mx-auto my-15 '>
          <i class="fa-regular fa-circle-pause fa-2xl"></i>
          <i class="fa-solid fa-less-than fa-2xl"></i>
          <button className='h-5 w-5 border border-black rounded-full'></button>
          <button className='h-5 w-5 border border-black rounded-full bg-black'></button>
          <i class="fa-solid fa-greater-than fa-2xl"></i>
        </div>

        {/* Shopping */}
        <div className='grid grid-cols-2  w-140 mx-auto gap-2'>
          <div className='flex flex-col justify-center items-center'>
            <img src={surfaceDevice} alt="surface Device" className='w-16 text-center' />
            <p className='text-lg text-blue-600 underline font-bold'>Shop Surface device</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={XboxGames} alt="surface Device" className='w-16' />
            <p className='text-lg text-blue-600 underline font-bold'>Shop Xbox games and consoles</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={IconsAccessories} alt="surface Device" className='w-16' />
            <p className='text-lg text-blue-600 underline font-bold'>Shop for accessories</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={IconsBusiness} alt="surface Device" className='w-16' />
            <p className='text-lg text-blue-600 underline font-bold'>Shop for business</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={IconPC} alt="surface Device" className='w-16' />
            <p className='text-lg text-blue-600 underline font-bold'>Find your next PC</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={Microsoft365} alt="surface Device" className='w-16' />
            <p className='text-lg text-blue-600 underline font-bold'>Choose your Microsoft 365</p>
          </div>
        </div>

        {/* shoping image */}
        <div className='w-140 my-10 mx-auto border border-gray-300 shadow-xl'>
          <img src={CardCopilot} alt="CardCopilot" className='w-full' />
          <div className='ml-6'>
            <h1 className='text-3xl font-semibold my-2'>Copilot is your AI companion</h1>
            <h1 className='text-xl'>Always by your side, ready to support you whenever and</h1>
            <h1 className='text-xl'>whener you need it</h1>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Download the Copilot app</button>
          </div>
        </div>

        {/* CardSurfaceLaptop */}
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={CardSurfaceLaptop} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-2'>
            <p className='text-3xl font-semibold my-3'>Trade in and get up to $500 cash back</p>
            <p className='text-xl'>
              Get extra cah back , plus a 3-month trial of Microsoft 365 when you purchase a select new Surface
              Laptop,Copilot+ PC and trade in an eligible device. Offer ends 9/30.
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Shop Surface Laptop,Copilot+ PCs</button>
            <div className='flex items-center gap-3'>
              <p className='text-2xl text-blue-500'>Learn more about trade-ins </p>
              <i class="fa-solid fa-greater-than fa-sm text-blue-600"></i>
            </div>
          </div>
        </div>

        {/* Games */}
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={Cardgamescom} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-2'>
            <p className='text-3xl font-semibold my-3'>Save the date for gamescom 2025</p>
            <p className='text-xl'>
              Join us onsite and broadcasting live August 20-24 from Cologne,Germany as we explore games
              coming to Xbox,PC and Games Pass.
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Learn more</button>
          </div>
        </div>

        {/* Sports */}
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={HighlightMC} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-2'>
            <p className='text-3xl font-semibold my-3'>EA SPORTS<sup className='text-lg'>TM</sup> Madden NFL 26</p>
            <p className='text-xl'>
              Join us onsite and broadcasting live August 20-24 from Cologne,Germany as we explore games
              coming to Xbox,PC and Games Pass.
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Learn more</button>
          </div>
        </div>

        {/* Bussiness */}
        <p className='text-4xl font-semibold ml-4 mt-20'>For business</p>
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={ContentCard} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-3'>
             <button className='bg-amber-400 my-2 text-2xl font-semibold py-2 px-3'>Now available with 5G</button>
            <p className='text-3xl font-semibold my-2'>Surface Laptop for Business,Copilot+ PC, 13.8 and 15-inch|Intel</p>
            <p className='text-xl'>
              Uncompromising power,all-day battery life,*unique AI experiences -featuring Intel <span className='text-2xl'>&reg;</span>
              Core <sup>TM</sup> Ultra processors (Series 2).Now available with optional 5G connectivity.**
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Pre-order now</button>
          </div>
        </div>

       {/* Copilot */}
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={ContentCardMicrosoft} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-2'>
            <p className='text-3xl font-semibold my-3'>Microsoft 365 Copilot</p>
            <p className='text-xl'>
             Save time and focus on the things that matter most with AI in Microsoft 365 for business
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Learn more</button>
          </div>
        </div>

       {/* Window */}
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={ContentCardWindows} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-2'>
            <p className='text-3xl font-semibold my-3'>Windows 11 for business</p>
            <p className='text-xl'>
             Designed for hybrid work.Powerful for employees.
             Consistent for IT.Secure for all.
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Learn more</button>
          </div>
        </div>

       {/*era of AI */}
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={ContentCardAzureAIBloom} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-2'>
            <p className='text-3xl font-semibold my-3'>Join the era of AI</p>
            <p className='text-xl'>
             Create, communicate, and code with the latest Microsoft AI solutions.
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Explore AI solutions</button>
          </div>
        </div>

       {/* AI and copilot */}
       <p className='text-3xl font-semibold ml-4'>Explore more about AI and Copilot</p>
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={ContentCardAIforScience} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-2'>
            <p className='text-3xl font-semibold my-3'>5 ways AI is revolutionizing science</p>
            <p className='text-xl'>
             From healthcare to quantum computing,Microsoft is helping the scientific community move faster and turn complex research into real-world solutions.
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Learn more</button>
          </div>
        </div>

       {/* cyberCrime */}
  
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={ContentCardAIStudentsFight} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-2'>
            <p className='text-3xl font-semibold my-3'>Tapping students to fight cybercrime</p>
            <p className='text-xl'>
             Learn how universities are training students on Microsoft security tools and AI to protect against cyberthreats.
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Uncover the details</button>
          </div>
        </div>

       {/* work easier */}
        <div className='w-140 mx-auto shadow-xl border border-gray-300 my-10'>
          <img src={ContentCardAIWorklab} alt="" className='w-full ' />
          <div className='w-130 mx-auto my-2'>
            <p className='text-3xl font-semibold my-3'>How AI makes hard work easier</p>
            <p className='text-xl'>
             Dive into the surprising ways that Copilot reduce the mental effort of complex tasks and enhances quality of work.
            </p>
            <button className='bg-blue-600 text-2xl py-3 px-4 text-white my-6'>Uncover the details</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Microsoft
