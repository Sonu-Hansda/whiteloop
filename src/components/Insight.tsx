import { BiSolidSearchAlt2 } from "react-icons/bi"
import { BsBarChartFill } from "react-icons/bs"
import { GoPulse } from "react-icons/go"

function Insight() {
  return (
     <div className="p-0 rounded-2xl text-center">
            <button className="flex mx-auto items-center justify-center bg-white rounded-2xl px-4 py-2 border border-gray-300 gap-x-1.5 mb-4">
                <BiSolidSearchAlt2/>
                <span className="text-sm">Live Oversight</span>
            </button>
            <div className="mb-4">
              <p className="text-5xl mb-3">Comprehensive Insights</p>
              <p className="text-lg">Track every campaign and customer interaction to refine engagement strategies</p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 text-left">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                <img className="shadow-lg rounded-lg" src="https://framerusercontent.com/images/5UvqBQ5n4pQcYeXTayuwjKufJ0.svg" alt="insight-1" />
                    <div className="flex items-center space-x-2.5 text-2xl my-2">
                        <GoPulse className="text-violet-700"/>
                        <h2 className="font-semibold">Real-Time Insights</h2>
                    </div>
                    <p>Monitor your campaigns in real time to ensure maximum effectiveness and identify areas for improvement</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                <img className="shadow-lg rounded-lg" src="https://framerusercontent.com/images/2pl18v1iDnPJHjcAuGIAPUrtYU.png?scale-down-to=1024" alt="insight-1" />
                    <div className="flex items-center space-x-2.5 text-2xl my-2">
                        <BsBarChartFill className="text-violet-600"/>
                        <h2 className="font-semibold">Actionable Data</h2>
                    </div>
                    <p>Leverage analytics to enhance workflows, boost engagement, and make informed marketing decisions</p>
                </div>
                </div>
        </div>
  )
}

export default Insight