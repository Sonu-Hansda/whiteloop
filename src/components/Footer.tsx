import { PiInstagramLogo, PiLinkedinLogo, PiTwitterLogo, PiYoutubeLogo } from "react-icons/pi"

function Footer() {
    return (
        <div className="px-8">
            <div className="flex flex-col-reverse  md:flex-col border-b border-gray-400 mb-6">

            <div className="flex flex-col md:flex-row md:justify-between mb-6">
                <img className="h-8 w-14 md:w-16 object-contain mb-6" src="/logo.png" loading="lazy" />
                <ul className="flex text-2xl space-x-4 text-gray-600">
                    <li>
                        <PiInstagramLogo />
                    </li>
                    <li>
                        <PiLinkedinLogo />
                    </li>
                    <li>
                        <PiYoutubeLogo />
                    </li>
                    <li>
                        <PiTwitterLogo />
                    </li>
                </ul>
            </div>
            <ul className="flex flex-col md:flex-row space-x-4 space-y-4 pb-8 text-gray-600">
                <li>Features</li>
                <li>Changelog</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className="text-sm flex flex-col-reverse md:flex-row justify-between">
                <span className="mb-4">© 2025 TheWhiteLoop</span>
                <span className="mb-4">Made by <a className="underline">Sonu-Hansda</a></span>
            </div>
        </div>
    )
}

export default Footer