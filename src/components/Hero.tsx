import { RiArrowRightFill } from "react-icons/ri"
import { TbHelpCircle } from "react-icons/tb"

function Hero() {
  return (
    <div className="my-12 px-4">
      <div data-aos="fade-up" className="mx-auto p-2.5 rounded-xs shadow-lg w-24 border-8 border-gray-800 drop-shadow-gray-800/75 drop-shadow-lg mb-6">
        <img
          className="p-2 rounded-lg"
          src="/logo.png"
          alt="Logo"
          loading="lazy"
        />
      </div>
      <p data-aos="fade-up" data-aos-delay="100" className="hidden md:block text-7xl text-center mb-4">
        Automate. Engage. Convert. <br /> Powered by AI.
      </p>
      <p data-aos="fade-up" data-aos-delay="150" className="block md:hidden text-4xl text-center mb-4">
        Automate. Engage. <br /> Convert. Powered by AI.
      </p>
      <p data-aos="fade-up" data-aos-delay="200" className="text-center">
        Your journey to AI-powered marketing starts here
      </p>
      <div data-aos="fade-up" data-aos-delay="250" className="flex justify-center gap-x-12 mt-10 font-semibold">
        <button className="px-4 py-3 bg-violet-600 shadow-lg shadow-violet-600/50 text-white rounded-sm flex items-center space-x-2">
          <p>Get Started</p>
          <RiArrowRightFill />
        </button>
        <button className="px-4 py-3 bg-slate-800 shadow-lg shadow-slate-800/50 text-white rounded-sm flex items-center space-x-2">
          <TbHelpCircle />
          <p>Learn More</p>
        </button>
      </div>
      <img
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-8"
        src="https://framerusercontent.com/images/Qs4fMRAik4VFOt3fiZeT875RV4.png "
        alt="What we do images"
        loading="lazy"
      />
    </div>
  );
}

export default Hero