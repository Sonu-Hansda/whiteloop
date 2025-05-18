import { BiSolidLayer } from "react-icons/bi"

function Integration() {
  return (
    <div className="bg-[#d8dfe5] p-8 rounded-2xl text-center mb-12">
        <button className="flex mx-auto items-center justify-center bg-white rounded-2xl px-4 py-2 border border-gray-300 gap-x-1.5">
            <BiSolidLayer/>
            <span className="text-sm">Integration</span>
        </button>
        <div>
          <p className="text-5xl mb-3">Integrates with</p>
          <p className="text-lg">Seamlessly integrate with your favorite tools</p>
        </div>
    </div>
  )
}

export default Integration