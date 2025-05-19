import { RiArrowRightFill } from "react-icons/ri"
import { TbHelpCircle } from "react-icons/tb"

function Hero() {
    return (
        <div className="my-12 px-4 animate-container">
            <div className="mx-auto p-2.5 rounded-lg shadow-lg w-24 border border-blue-800/10 drop-shadow-blue-800/75 drop-shadow-sm mb-6 animate-child">
                <img className="bg-[#0e1c29] p-2 rounded-sm" src="https://framerusercontent.com/images/Vw4SxE2qkEuKYpt0YYdU2kV6Irg.png" alt="Logo" loading="lazy" />
            </div>
            <p className="hidden md:block text-7xl text-center mb-4 animate-child">
                Automate. Engage. Convert. <br />Powered by AI.
            </p>
            <p className="block md:hidden text-4xl text-center mb-4 animate-child">
                Automate. Engage. <br/>Convert. Powered by AI.
            </p>
            <p className="text-center animate-child">Your journey to AI-powered marketing starts here</p>
            <div className="flex justify-center gap-x-12 mt-10 font-semibold animate-child">
                <button className="px-4 py-3 bg-violet-600 shadow-lg shadow-violet-600/50 text-white rounded-sm flex items-center space-x-2">
                <p>Get Started</p>
                <RiArrowRightFill/>
                </button>
                <button className="px-4 py-3 bg-slate-800 shadow-lg shadow-slate-800/50 text-white rounded-sm flex items-center space-x-2">
                <TbHelpCircle/>
                <p>Learn More</p>
                </button>
            </div>
            <img className="mt-8" src="https://framerusercontent.com/images/Qs4fMRAik4VFOt3fiZeT875RV4.png" alt="What we do images" loading="lazy" />
        </div>
    )
}

export default Hero