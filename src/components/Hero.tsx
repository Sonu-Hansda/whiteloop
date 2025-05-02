import { RiArrowRightFill } from "react-icons/ri"
import { TbHelpCircle } from "react-icons/tb"

function Hero() {
    return (
        <div className="mt-20">
            <div className="mx-auto p-2.5 rounded-lg shadow-lg w-24 border border-blue-800/10 drop-shadow-blue-800/75 drop-shadow-sm mb-6">
                <img className="bg-[#0e1c29] p-2 rounded-sm" src="https://framerusercontent.com/images/Vw4SxE2qkEuKYpt0YYdU2kV6Irg.png" alt="Logo" />
            </div>
            <p className="text-7xl text-center mb-4">
                Automate. Engage. Convert. <br />Powered by AI.
            </p>
            <p className="text-center">Your journey to AI-powered marketing starts here</p>
            <div className="flex justify-center gap-x-12 mt-10 font-semibold">
                <button className="px-4 py-3 bg-violet-600 shadow-lg shadow-violet-600/50 text-white rounded-sm flex items-center space-x-2">
                <p>Get Started</p>
                <RiArrowRightFill/>
                </button>
                <button className="px-4 py-3 bg-slate-800 shadow-lg shadow-slate-800/50 text-white rounded-sm flex items-center space-x-2">
                <TbHelpCircle/>
                <p>Learn More</p>
                </button>
            </div>
        </div>
    )
}

export default Hero