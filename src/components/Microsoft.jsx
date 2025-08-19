import React from "react";
import MicrosoftLogo from "../assets/microsoft.png";
import frontPageImage from "../assets/fontImage.webp";
import surfaceDevice from "../assets/Surface-Devices.svg";
import XboxGames from "../assets/XboxGames.svg";
import IconsAccessories from "../assets/IconsAccessories.svg";
import IconsBusiness from "../assets/IconsBusiness.svg";
import IconPC from "../assets/IconPC.svg";
import Microsoft365 from "../assets/Microsoft365.svg";
import CardCopilot from "../assets/CardCopilot.avif";
import CardSurfaceLaptop from "../assets/CardSurfaceLaptop.avif";
import Cardgamescom from "../assets/Cardgamescom.avif";
import HighlightMC from "../assets/HighlightMC.avif";
import ContentCard from "../assets/ContentCard.avif";
import ContentCardMicrosoft from "../assets/ContentCardMicrosoft.avif";
import ContentCardWindows from "../assets/ContentCardWindows.avif";
import ContentCardAzureAIBloom from "../assets/ContentCardAzureAIBloom.avif";
import ContentCardAIforScience from "../assets/ContentCardAIforScience.avif";
import ContentCardAIStudentsFight from "../assets/ContentCardAIStudentsFight.avif";
import ContentCardAIWorklab from "../assets/ContentCardAIWorklab.avif";
import HighlightCreatorsGreater from "../assets/HighlightCreatorsGreater.avif";

const Microsoft = () => {
  return (
    <div>
      <nav
        className="h-24 flex justify-around items-center w-154 
      md:w-254 md:justify-between md:px-10 "
      >
        <div className="flex gap-6 items-center">
          <div>
            <i class="fa-solid fa-bars fa-2xl" style={{ fontSize: "2rem" }}></i>
          </div>
          <div>
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ fontSize: "1rem" }}
            ></i>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={MicrosoftLogo} alt="Microsoft" />
          <h1 className="text-3xl font-bold text-gray-500">Microsoft</h1>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <i class="fa-solid fa-cart-shopping fa-2xl"></i>
          </div>
          <h1 className="md:text-2xl">shami</h1>
        </div>
      </nav>
      {/* first session */}
      <div className="h-28 bg-green-200 w-154 md:w-254">
        <h2 className="text-2xl text-center font-semibold pt-5 md:text-3xl">
          Get school tech for less.If you don't love it, return it,
        </h2>
        <h2 className="text-2xl text-center font-semibold md:text-3xl">
          with 60-day free returns.
        </h2>
      </div>

      <div>
        {/* font image */}
        <div className="w-154 md:w-254">
          <img src={frontPageImage} alt="" className="w-full" />
        </div>

        <div className="p-3 w-154 md:w-230 md:mx-auto ">
          <h1 className="text-[35px] font-semibold md:text-5xl">
            Students get 3 free months of Microsoft 363
          </h1>
          <p className="text-2xl my-5 md:text-3xl">
            Save for a limited on Microsoft 365 Personal with Copilot -featuring
            premium apps,cloud storage, and more -when you sign up with your
            college email address.
          </p>
          <button className="bg-blue-800 text-2xl py-3 px-4 text-white md:text-4xl">
            Learn more
          </button>
        </div>

        <hr className="border-t border-black my-5 w-150 md:w-254" />

        {/* symbols */}
        <div
          className="w-90 flex items-center justify-around mx-auto my-15 
                        md:w-150 "
        >
          <i class="fa-regular fa-circle-pause fa-2xl"></i>
          <i class="fa-solid fa-less-than fa-2xl"></i>
          <button className="h-5 w-5 border border-black rounded-full"></button>
          <button className="h-5 w-5 border border-black rounded-full bg-black"></button>
          <i class="fa-solid fa-greater-than fa-2xl"></i>
        </div>

        {/* Shopping */}
        <div className="grid grid-cols-2  w-140 mx-auto gap-1 md:w-250 md:grid-cols-3 md:space-y-7 md:mt-25">
          <div className="flex flex-col justify-center items-center">
            <img
              src={surfaceDevice}
              alt="surface Device"
              className="w-16 text-center md:w-25"
            />
            <p className="text-lg text-blue-600 underline font-bold md:text-3xl md:font-semibold">
              Shop Surface device
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={XboxGames}
              alt="surface Device"
              className="w-16 md:w-25"
            />
            <p className="text-lg text-blue-600 underline font-bold md:text-3xl md:font-semibold">
              Shop Xbox games and consoles
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={IconsAccessories}
              alt="surface Device"
              className="w-16 md:w-25"
            />
            <p className="text-lg text-blue-600 underline font-bold md:text-3xl md:font-semibold">
              Shop for accessories
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={IconsBusiness}
              alt="surface Device"
              className="w-16 md:w-25"
            />
            <p className="text-lg text-blue-600 underline font-bold md:text-3xl md:font-semibold">
              Shop for business
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={IconPC} alt="surface Device" className="w-16 md:w-25" />
            <p className="text-lg text-blue-600 underline font-bold md:text-3xl md:font-semibold">
              Find your next PC
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={Microsoft365}
              alt="surface Device"
              className="w-16 md:w-25"
            />
            <p className="text-lg text-blue-600 underline font-bold md:text-3xl md:font-semibold">
              Choose your Microsoft 365
            </p>
          </div>
        </div>

        {/* md copilot */}

        <div className="md:flex md:justify-around md:gap-2 md:w-254 md:mx-auto">
          {/* shoping image */}
          <div className="w-140 my-10 mx-auto border border-gray-300 shadow-xl md:w-120 md:space-y-5">
            <img src={CardCopilot} alt="CardCopilot" className="w-full" />
            <div className="ml-6">
              <h1 className="text-3xl font-semibold my-2 md:text-4xl">
                Copilot is your AI companion
              </h1>
              <h1 className="text-xl md:text-2xl">
                Always by your side, ready to support you whenever and
              </h1>
              <h1 className="text-xl">whener you need it</h1>
              <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6">
                Download the Copilot app
              </button>
            </div>
          </div>

          {/* CardSurfaceLaptop */}
          <div className="w-140 mx-auto shadow-xl border border-gray-300 my-10 md:w-120 ">
            <img src={CardSurfaceLaptop} alt="" className="w-full " />
            <div className="w-130 mx-auto my-2 md:px-5 md:space-y-3">
              <p className="text-3xl font-semibold my-3 md:text-4xl">
                Trade in and get up to $500 cash back
              </p>
              <p className="text-xl md:text-2xl md:w-110">
                Get extra cah back , plus a 3-month trial of Microsoft 365 when
                you purchase a select new Surface Laptop,Copilot+ PC and trade
                in an eligible device. Offer ends 9/30.
              </p>
              <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-[25px] md:w-2/3 md:px-[15px] md:text-start">
                Shop Surface Laptop, Copilot+ PCs
              </button>
              <div className="flex items-center gap-3 md:items-center md:mb-10">
                <p className="text-2xl text-blue-500 md:text-3xl">
                  Learn more about trade-ins{" "}
                </p>
                <i class="fa-solid fa-greater-than fa-lg text-blue-600"></i>
              </div>
            </div>
          </div>
        </div>

        {/* md: save the date */}
        <div className="md:flex md:justify-around md:gap-2 md:w-254 md:mx-auto">
          {/* Games */}
          <div className="w-140 mx-auto shadow-xl border border-gray-300 my-10 md:w-120 md:">
            <img src={Cardgamescom} alt="" className="w-full " />
            <div className="w-130 mx-auto my-2 md:w-110">
              <p className="text-3xl font-semibold my-3 md:text-4xl">
                Save the date for games com 2025
              </p>
              <p className="text-xl md:text-2xl">
                Join us onsite and broadcasting live August 20-24 from
                Cologne,Germany as we explore games coming to Xbox,PC and Games
                Pass.
              </p>
              <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-3xl">
                Learn more
              </button>
            </div>
          </div>

          {/* Copilot */}
          <div className="w-140 mx-auto shadow-xl border border-gray-300 my-10 md:w-120">
            <img src={ContentCardMicrosoft} alt="" className="w-full " />
            <div className="w-130 mx-auto my-2 md:w-110">
              <p className="text-3xl font-semibold my-3 md:text-4xl">
                Microsoft 365 Copilot
              </p>
              <p className="text-xl md:text-2xl">
                Save time and focus on the things that matter most with AI in
                Microsoft 365 for business
              </p>
              <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-3xl">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Sports */}
        <div className="w-140 mx-auto shadow-xl border border-gray-300 my-10 md:w-254 md:space-y-15">
          <img src={HighlightMC} alt="" className="w-full " />
          <div className="w-130 mx-auto my-2 md:w-220 space-y-10">
            <p className="text-3xl font-semibold my-3 md:text-6xl py-10">
              EA SPORTS<sup className="text-lg">TM</sup> Madden NFL 26
            </p>
            <p className="text-xl md:text-4xl ">
              Join us onsite and broadcasting live August 20-24 from Cologne,
              Germany as we explore games coming to Xbox, PC and Games Pass.
            </p>
            <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-4xl">
              Learn more
            </button>
          </div>
        </div>

        {/* for business md */}

        <div className="md:flex md:justify-around md:items-center md:w-254 md:mx-auto md:my-40">
          {/* Bussiness */}
          <div className="w-140 mx-auto md:w-120">
            <p className="text-4xl font-semibold md:text-5xl">For business</p>
            <div className="w-full shadow-xl border border-gray-300 my-5">
              <img src={ContentCard} alt="" className="w-full " />
              <div className="w-130 mx-auto my-3 md:w-110">
                <button className="bg-amber-400 my-2 text-2xl font-semibold py-2 px-3 md:text-3xl">
                  Now available with 5G
                </button>
                <p className="text-3xl font-semibold my-2 md:text-4xl">
                  Surface Laptop for Business,Copilot+ PC, 13.8 and
                  15-inch|Intel
                </p>
                <p className="text-xl md:text-2xl">
                  Uncompromising power,all-day battery life,*unique AI
                  experiences -featuring Intel{" "}
                  <span className="text-2xl">&reg;</span>
                  Core <sup>TM</sup> Ultra processors (Series 2).Now available
                  with optional 5G connectivity.**
                </p>
                <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-3xl">
                  Pre-order now
                </button>
              </div>
            </div>
          </div>

          {/* Window */}
          <div className="w-140 mx-auto shadow-xl border border-gray-300 my-10 md:w-120 md:h-190 md:relative">
            <img src={ContentCardWindows} alt="" className="w-full " />
            <div className="w-130 mx-auto my-2 md:w-110">
              <p className="text-3xl font-semibold my-3 md:text-4xl">
                Windows 11 for business
              </p>
              <p className="text-xl md:text-2xl">
                Designed for hybrid work.Powerful for employees. Consistent for
                IT.Secure for all.
              </p>
              <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-3xl md:absolute md:bottom-5">
                Learn more
              </button>
            </div>
          </div>
        </div>
        {/* md:era of AI */}

        <div className="md:flex md:justify-around md:items-center md:w-254 md:mx-auto">

          {/*era of AI */}
          <div className="w-140 mx-auto shadow-xl border border-gray-300 my-10 md:w-120 md:h-165">
            <img src={ContentCardAzureAIBloom} alt="" className="w-full " />
            <div className="w-130 mx-auto my-2 md:w-110">
              <p className="text-3xl font-semibold my-3 md:text-4xl">Join the era of AI</p>
              <p className="text-xl md:text-2xl">
                Create, communicate, and code with the latest Microsoft AI
                solutions.
              </p>
              <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-3xl">
                Explore AI solutions
              </button>
            </div>
          </div>

          {/* AI and copilot */}
          <div className="w-140 mx-auto md:w-120">
            <p className="text-3xl font-semibold">
              Explore more about AI and Copilot
            </p>
            <div className="shadow-xl border border-gray-300 my-5">
              <img src={ContentCardAIforScience} alt="" className="w-full " />
              <div className="w-130 mx-auto my-2 md:w-110">
                <p className="text-3xl font-semibold my-3 md:text-4xl">
                  5 ways AI is revolutionizing science
                </p>
                <p className="text-xl md:text-2xl">
                  From healthcare to quantum computing,Microsoft is helping the
                  scientific community move faster and turn complex research
                  into real-world solutions.
                </p>
                <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-3xl">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* cyberCrime */}

        <div className="w-140 mx-auto shadow-xl border border-gray-300 my-10 md:w-254">
          <img src={ContentCardAIStudentsFight} alt="" className="w-full " />
          <div className="w-130 mx-auto my-2 md:w-220">
            <p className="text-3xl font-semibold my-3 md:text-5xl md:py-5">
              Tapping students to fight cybercrime
            </p>
            <p className="text-xl md:text-3xl">
              Learn how universities are training students on Microsoft security
              tools and AI to protect against cyberthreats.
            </p>
            <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-3xl">
              Uncover the details
            </button>
          </div>
        </div>

        {/* work easier */}
        <div className="w-140 mx-auto shadow-xl border border-gray-300 my-10 md:w-254">
          <img src={ContentCardAIWorklab} alt="" className="w-full " />
          <div className="w-130 mx-auto my-2 md:w-220 md:py-5">
            <p className="text-3xl font-semibold my-3 md:text-5xl">
              How AI makes hard work easier
            </p>
            <p className="text-xl md:text-3xl">
              Dive into the surprising ways that Copilot reduce the mental
              effort of complex tasks and enhances quality of work.
            </p>
            <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-3xl">
              Uncover the details
            </button>
          </div>
        </div>

        {/* Teamwork */}
        <div className="w-140 mx-auto shadow-xl border border-gray-300 my-10 md:w-254">
          <img src={HighlightCreatorsGreater} alt="" className="w-full " />
          <div className="w-130 mx-auto my-2 md:w-220">
            <p className="text-3xl font-semibold my-3 md:text-5xl md:py-5">
              Teamwork and tech power Tomorrow Academies
            </p>
            <p className="text-xl md:text-3xl">
              By tranforming its technology footprint with Microsoft tools, the
              Greater Austin YMCA met a critical need for child care in the
              community.
            </p>
            <button className="bg-blue-600 text-2xl py-3 px-4 text-white my-6 md:text-3xl">
              Read the story
            </button>
          </div>
        </div>

        {/* symbols */}
        <div className="w-90 flex items-center justify-around mx-auto my-15 ">
          <i class="fa-regular fa-circle-pause fa-2xl"></i>
          <i class="fa-solid fa-less-than fa-2xl"></i>
          <button className="h-5 w-5 border border-black rounded-full"></button>
          <button className="h-5 w-5 border border-black rounded-full bg-black"></button>
          <i class="fa-solid fa-greater-than fa-2xl"></i>
        </div>

        {/* follow Microsoft */}
        <div className="relative h-25 md:my-30 md:h-35 md:w-254 md:px-30">
          <div className="flex items-center gap-5 absolute left-2 md:absolute md:left-10">
            <p className="text-2xl md:text-4xl">Follow Microsoft</p>
            <i class="fa-brands fa-facebook-f fa-xl md:fa-2xl"></i>
            <i class="fa-brands fa-x-twitter fa-xl"></i>
            <i class="fa-brands fa-linkedin fa-xl"></i>
          </div>
          <button className="text-2xl bg-gray-300 py-3 px-5 absolute right-4 bottom-0 md:text-4xl md:px-10 md:py-6">
            <i class="fa-solid fa-arrow-up"></i>Back to top
          </button>
        </div>

        {/* footer */}
        <div className="w-140 bg-gray-200 mt-20 p-10 m-0 md:w-254">
         {/* md:responsive */}
          <div className="md:grid md:grid-cols-3">
             {/* new */}
          <div className="py-3">
            <p className="text-3xl text-gray-700 font-semibold py-3 md:text-4xl">
              What's new
            </p>
            <ul className="space-y-1 text-lg text-gray-500 md:text-2xl md:space-y-4">
              <li>Surface Pro</li>
              <li>Surface Laptop</li>
              <li>Surface Laptop Studio2</li>
              <li>Copilot for organizaions</li>
              <li>Copilot for Personal</li>
              <li>AI in Windows</li>
              <li>Explore Microsoft products</li>
              <li>Windows 11 apps</li>
            </ul>
          </div>
          {/* Microsoft Store */}
          <div className="py-3">
            <p className="text-3xl text-gray-700 font-semibold py-3 md:text-4xl">
              Microsoft Store
            </p>
            <ul className="space-y-1 text-lg text-gray-500 md:text-2xl md:space-y-4">
              <li>Account profile</li>
              <li>Download Center</li>
              <li>Microsoft Store support</li>
              <li>Returns</li>
              <li>Order tracking</li>
              <li>Certified Refurbished</li>
              <li>Microsoft Store Promise</li>
              <li>Flexible Payments</li>
            </ul>
          </div>

          {/* Educations */}
          <div className="py-3 ">
            <p className="text-3xl text-gray-700 font-semibold py-3 md:text-4xl">
              Education
            </p>
            <ul className="space-y-1 text-lg text-gray-500 md:text-2xl md:space-y-1">
              <li>Microsoft in education</li>
              <li>Devices for education</li>
              <li>Microsoft Teams for Education</li>
              <li>Microsoft 365 Education</li>
              <li>How to buy for your school</li>
              <li>Educator training and development</li>
              <li>Deals for students and parents</li>
              <li>AI for education</li>
            </ul>
          </div>

          {/* Business */}
          <div className="py-3">
            <p className="text-3xl text-gray-700 font-semibold py-3 md:text-4xl">
              Business
            </p>
            <ul className="space-y-1 text-lg text-gray-500 md:text-2xl md:space-y-3">
              <li>Microsoft Cloud</li>
              <li>Microsoft Security</li>
              <li>Dynamics 365</li>
              <li>Microsoft 365</li>
              <li>Microsoft Power Platform</li>
              <li>Microsoft Teams</li>
              <li>Microsoft 365 Copilot</li>
              <li>Small Business</li>
            </ul>
          </div>

          {/* Developer & IT */}
          <div className="py-3">
            <p className="text-3xl text-gray-700 font-semibold py-3 md:text-4xl">
              Developer & IT
            </p>
            <ul className="space-y-1 text-lg text-gray-500 md:text-2xl md:space-y-3">
              <li>Azure</li>
              <li>Microsoft Developer</li>
              <li>Microsoft Learn</li>
              <li>Support for AI marketplace apps</li>
              <li>Microsoft Tech Community</li>
              <li>Azure Marketplace</li>
              <li>AppSource</li>
              <li>Visual Studio</li>
            </ul>
          </div>

          {/* Company */}
          <div className="py-3">
            <p className="text-3xl text-gray-700 font-semibold py-3 md:text-4xl">Company</p>
            <ul className="space-y-1 text-lg text-gray-500 md:text-2xl md:space-y-3">
              <li>Careers</li>
              <li>About Microsoft</li>
              <li>Company news</li>
              <li>Privacy at Microsoft</li>
              <li>Investors</li>
              <li>Diversity and inclusion</li>
              <li>Accessibility</li>
              <li>Sustainability</li>
            </ul>
          </div>
          </div>
          {/* down section */}

          <div className="mt-8">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-earth-americas fa-2xl"></i>
              <p className="text-xl text-gray-700 ">English (united States)</p>
            </div>
            <div className="py-2 flex gap-x-3 mt-2 items-center">
              <div className="h-7 w-16 border-3 border-blue-500 rounded-2xl flex items-center">
                <button className="h-full w-1/2">
                  <i class="fa-solid fa-check text-blue-500"></i>
                </button>
                <button className="h-full w-1/2 bg-blue-500 rounded-r-2xl">
                  <i class="fa-solid fa-xmark text-white"></i>
                </button>
              </div>
              <p className="text-xl text-gray-700">Your Privacy Choices</p>
            </div>
            <p className="text-xl text-gray-700 mt-5">
              Consumer Health Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microsoft;
