import {FaCrown} from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex justify-between items-center">
        <img className="h-8" src="https://framerusercontent.com/images/on7xUpJ1SM94eAeiyf04v5F4rjQ.png"/>
        <ul className="flex space-x-8">
            <li>Features</li>
            <li>Pricing</li>
            <li>Changelog</li>
            <li>Contact</li>
        </ul>
        <div className="bg-gray-800 shadow-blue-950/50 shadow-lg py-2.5 px-4 rounded-lg text-white font-bold flex items-center space-x-2">
        <FaCrown/>
            <p>Get Template</p>
        </div>
    </div>
  )
}

export default Navbar