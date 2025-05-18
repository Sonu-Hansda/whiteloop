import { BsGraphUpArrow } from "react-icons/bs"
import { FaGear, FaRobot } from "react-icons/fa6"
import { PiHandshake, PiPlugLight, PiRocketDuotone, PiShieldCheckDuotone, PiSpeedometerDuotone } from "react-icons/pi"
import { RiUploadCloud2Fill } from "react-icons/ri"
import { SiMoleculer } from "react-icons/si"

function Features() {
  return (
     <div className="bg-[#d8dfe5] px-4 py-12 rounded-2xl text-center mb-12">
            <button className="flex mx-auto mb-4 items-center justify-center bg-white rounded-2xl px-4 py-2 border border-gray-300 gap-x-1.5">
                <RiUploadCloud2Fill/>
                <span className="text-sm">Effortless Deployment</span>
            </button>
            <div className="mb-12">
              <p className="text-4xl md:text-5xl mb-4">AI-Powered Marketing</p>
              <p className="md:text-lg">Simplify deployment for unmatched scalability and impact</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-start mb-8">
                <div className="w-full bg-[#f6fbff] p-4 rounded-xl shadow-lg">
                    <div className="bg-inherit p-4 w-1/6 md:w-1/5 rounded-lg border border-gray-200 shadow-xl mb-2.5">
                        <FaRobot className="text-2xl md:text-3xl text-violet-500"/>
                    </div>
                    <h5 className="mb-2 text-xl font-semibold">Campaign Automation</h5>
                    <p className="text-lg text-gray-600">Create and execute campaigns with ease using AI-driven automation for maximum efficiency</p>
                </div>
                <div className="w-full bg-[#f6fbff] p-4 rounded-xl shadow-lg">
                    <div className="bg-inherit p-4 w-1/6 md:w-1/5 rounded-lg border border-gray-200 shadow-xl mb-2.5">
                        <PiRocketDuotone className="text-2xl md:text-3xl text-violet-500"/>
                    </div>
                    <h5 className="mb-2 text-xl font-semibold">Personalized Outreach</h5>
                    <p className="text-lg text-gray-600">Deliver tailored messages to each customer for more impactful and engaging communication</p>
                </div>
                <div className="w-full bg-[#f6fbff] p-4 rounded-xl shadow-lg">
                    <div className="bg-inherit p-4 w-1/6 md:w-1/5 rounded-lg border border-gray-200 shadow-xl mb-2.5">
                        <FaGear className="text-2xl md:text-3xl text-violet-500"/>
                    </div>
                    <h5 className="mb-2 text-xl font-semibold">Data Optimization</h5>
                    <p className="text-lg text-gray-600">Analyze performance with detailed analytics to fine-tune campaigns and boost results</p>
                </div>
                <div className="w-full bg-[#f6fbff] p-4 rounded-xl shadow-lg">
                    <div className="bg-inherit p-4 w-1/6 md:w-1/5 rounded-lg border border-gray-200 shadow-xl mb-2.5">
                        <PiSpeedometerDuotone className="text-2xl md:text-3xl text-violet-500"/>
                    </div>
                    <h5 className="mb-2 text-xl font-semibold">Seamless Collaboration</h5>
                    <p className="text-lg text-gray-600">Seamlessly integrate with existing tools to enhance team productivity and coordination</p>
                </div>
                <div className="w-full bg-[#f6fbff] p-4 rounded-xl shadow-lg">
                    <div className="bg-inherit p-4 w-1/6 md:w-1/5 rounded-lg border border-gray-200 shadow-xl mb-2.5">
                        <SiMoleculer className="text-2xl md:text-3xl text-violet-500"/>
                    </div>
                    <h5 className="mb-2 text-xl font-semibold">Real-Time Insights</h5>
                    <p className="text-lg text-gray-600">Monitor customer interactions and adapt strategies in real time for optimal engagement</p>
                </div>
                <div className="w-full bg-[#f6fbff] p-4 rounded-xl shadow-lg">
                    <div className="bg-inherit p-4 w-1/6 md:w-1/5 rounded-lg border border-gray-200 shadow-xl mb-2.5">
                        <PiShieldCheckDuotone className="text-2xl md:text-3xl text-violet-500"/>
                    </div>
                    <h5 className="mb-2 text-xl font-semibold">Future-Proof Solutions</h5>
                    <p className="text-lg text-gray-600">Stay ahead with continuous updates, and built-in adaptability for evolving needs.</p>
                </div>
            </div>
            <span className="flex flex-wrap justify-center items-center w-full mb-3">
                <span className="hidden md:flex-1 border-b border-dotted border-4 border-gray-400"></span>
                <span className="shrink-0 px-4 text-gray-700 flex items-center">
                    <PiHandshake className="mr-2 text-3xl"/>
                    Expert Collaboration</span>
                <span className="hidden md:flex-1 border-b border-dotted border-4 border-gray-400"></span>
                <span className="shrink-0 px-4 text-gray-700 flex items-center">
                    <PiPlugLight className="mr-2 text-3xl"/>
                    Seamless Integration</span>
                <span className="hidden md:flex-1 border-b border-dotted border-4 border-gray-400"></span>
                <span className="shrink-0 px-4 text-gray-700 flex items-center">
                    <BsGraphUpArrow className="mr-2 text-3xl"/>
                    Scalable Solutions</span>
                <span className="hidden md:flex-1 border-b border-dotted border-4 border-gray-400"></span>
            </span>
        </div>
  )
}

export default Features