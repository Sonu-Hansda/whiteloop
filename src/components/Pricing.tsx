import { useState } from "react"
import { BsGraphUpArrow } from "react-icons/bs"
import { FaCrown } from "react-icons/fa6"
import { PiFire, PiHandshake, PiPlugLight } from "react-icons/pi"
import { RiUploadCloud2Fill } from "react-icons/ri"

function Pricing() {
    const [isMonth, setIsMonth] = useState<boolean>(true);
    return (
        <div className="p-8 rounded-2xl text-center mb-8">
            <button className="flex mx-auto mb-6 items-center justify-center bg-white rounded-2xl px-4 py-2 border border-gray-300 gap-x-1.5">
                <RiUploadCloud2Fill />
                <span className="text-sm">Transparent Pricing, No Surprises</span>
            </button>
            <div className="mb-12">
                <p className="text-5xl mb-3">Flexible Plans for All</p>
                <p className="text-lg">Choose a plan that fits your goals and scale as you grow</p>
            </div>
            <div className="bg-white mx-auto mb-12 w-xs p-2 rounded-xl shadow-xl shadow-blue-950/40 flex">
                <div className={`p-2 ${isMonth && 'bg-[#d8dfe5]'} rounded-lg w-1/2 cursor-pointer`} onClick={() => setIsMonth((prev) => !prev)}>Monthly</div>
                <div className={`p-2 ${!isMonth && 'bg-[#d8dfe5]'} rounded-lg w-1/2 cursor-pointer`} onClick={() => setIsMonth((prev) => !prev)}>Yearly <span className="bg-white rounded-xl px-2.5 py-0.5">Save 30%</span></div>
            </div>
            <div className="grid grid-cols-3 gap-8 text-start mb-8">
                <div className="w-full bg-[#f6fbff] p-4 rounded-xl shadow-lg">
                    <h5 className="mb-2 text-xl font-semibold">Starter</h5>
                    <h4 className="mb-8 text-4xl font-semibold">$9 <span className="text-sm font-normal">user/month</span></h4>
                    <button className="flex items-center space-x-4 justify-center bg-gradient-to-br from-[#c3cfdb] to-white w-full p-2 rounded-lg shadow-xl mb-8">
                        <FaCrown />
                        <h4>Get Started</h4>
                    </button>
                    <div className="w-full border-b border-gray-400 border-dotted border-2 mb-8"></div>
                    <div>
                        <h4>Everything in Starter Plan</h4>
                        <ul className="mx-4 mt-4 text-gray-600">
                            <li className="mb-2">✓ Unlimited AI usage here</li>
                            <li className="mb-2">✓ Premium support</li>
                            <li className="mb-2">✓ Customer care on point</li>
                            <li className="mb-2">✓ Collaboration tools</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-[#f6fbff] p-4 rounded-xl shadow-lg">
                    <h5 className="flex items-center mb-2 text-xl font-semibold">Pro <span className="ml-4 flex items-center bg-violet-600 rounded-full text-white text-sm px-2.5 py-1 space-x-1"><PiFire className="text-lg" /> <h4>Popular</h4></span></h5>
                    <h4 className="mb-8 text-4xl font-semibold">$12 <span className="text-sm font-normal">user/month</span></h4>
                    <button className="flex items-center space-x-4 justify-center bg-gradient-to-br from-[#202d48] to-[#2f3a62] w-full p-2 text-white rounded-lg shadow-xl mb-8">
                        <FaCrown />
                        <h4>Get Started</h4>
                    </button>
                    <div className="w-full border-b border-gray-400 border-dotted border-2 mb-8"></div>
                    <div>
                        <h4>Everything in Pro Plan</h4>
                        <ul className="mx-4 mt-4 text-gray-600">
                            <li className="mb-2">✓ Integrations with 3rd-party</li>
                            <li className="mb-2">✓ Advanced analytics</li>
                            <li className="mb-2">✓ Team performance tracking</li>
                            <li className="mb-2">✓ Top grade security</li>
                            <li className="mb-2">✓ Customizable Solutions</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-[#f6fbff] p-4 rounded-xl shadow-lg">
                    <h5 className="mb-2 text-xl font-semibold">Enterprise</h5>
                    <h4 className="mb-8 text-4xl font-semibold">$80 <span className="text-sm font-normal">user/month</span></h4>
                    <button className="flex items-center space-x-4 justify-center bg-gradient-to-br from-[#c3cfdb] to-white w-full p-2 rounded-lg shadow-xl mb-8">
                        <FaCrown />
                        <h4>Get Started</h4>
                    </button>
                    <div className="w-full border-b border-gray-400 border-dotted border-2 mb-8"></div>
                    <div>
                        <h4>Dedicated account manager</h4>
                        <ul className="mx-4 mt-4 text-gray-600">
                            <li className="mb-2">✓ Custom reports & dashboards</li>
                            <li className="mb-2">✓ Most performance usage</li>
                            <li className="mb-2">✓ Enterprise-grade security</li>
                            <li className="mb-2">✓ Customizable Solutions</li>
                            <li className="mb-2">✓ Dedicated account manager</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="w-xl mx-auto mb-3 bg-[#d8dfe5] text-center p-2.5 rounded-lg">We donate 2% of your membership to pediatric wellbeing</p>
        </div>
    )
}

export default Pricing