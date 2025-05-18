import { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa6";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center transition-all duration-500 ease-in-out ${
        isScrolled
          ? "fixed top-4 left-0 right-0 w-2xl mx-auto bg-white rounded-lg shadow-md z-50"
          : "relative w-full bg-transparent mb-12"
      } px-4 py-3`}
    >
      <img
        className="h-8"
        src="https://framerusercontent.com/images/on7xUpJ1SM94eAeiyf04v5F4rjQ.png "
        alt="Logo"
      />
      <ul className="flex space-x-8 text-gray-700">
        <li>Features</li>
        <li>Pricing</li>
        <li>Changelog</li>
        <li>Contact</li>
      </ul>
      <div className="bg-gray-800 shadow-blue-950/50 shadow-lg py-2.5 px-4 rounded-lg text-white font-bold flex items-center space-x-2">
        <FaCrown />
        <p>Get Template</p>
      </div>
    </nav>
  );
}

export default Navbar;