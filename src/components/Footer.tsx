import { PiInstagramLogo, PiLinkedinLogo, PiTwitterLogo, PiYoutubeLogo } from "react-icons/pi"


function Footer() {
  return (
    <div>
        <div className="flex justify-between mb-6">
         <img className="h-8" src="https://framerusercontent.com/images/on7xUpJ1SM94eAeiyf04v5F4rjQ.png"/>
        <ul className="flex text-2xl space-x-2.5 text-gray-600">
            <li>
                <PiInstagramLogo/>
            </li>
            <li>
                <PiLinkedinLogo/>
            </li>
            <li>
                <PiYoutubeLogo/>
            </li>
            <li>
                <PiTwitterLogo/>
            </li>
        </ul>
        </div>
        <ul className="flex space-x-4 border-b border-gray-400 pb-8 mb-6 text-gray-600">
            <li>Features</li>
            <li>Changelog</li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
        <div className="text-sm flex justify-between">
            <span>© whiteloop</span>
            <span>Made by <a>Sonu-Hansda</a></span>
        </div>
    </div>
  )
}

export default Footer