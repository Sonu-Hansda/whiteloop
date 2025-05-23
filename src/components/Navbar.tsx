import { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Scroll detection
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
          ? `fixed top-2 left-0 right-0 md:w-2xl max-w-screen mx-2 md:mx-auto bg-white ${isMenuOpen? 'rounded-t-lg': 'rounded-lg' } md:rounded-lg shadow-md z-50`
          : "relative w-full bg-transparent mb-12"
      } px-4 py-3`}
    >
      {/* Logo */}
      <img
        className="h-8 w-14 md:w-16"
        src="/logo.png"
        alt="Logo"
        loading="lazy"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-gray-700">
        <li>Features</li>
        <li>Pricing</li>
        <li>Changelog</li>
        <li>Contact</li>
      </ul>

      {/* CTA Button */}
      <div className="hidden md:flex bg-gray-800 shadow-blue-950/50 shadow-lg py-2.5 px-4 rounded-lg text-white font-bold items-center space-x-2 cursor-pointer">
        <FaCrown />
        <p>Get Template</p>
      </div>

      {/* Hamburger / Cross Icon (Mobile Only) */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes size={24} className="text-gray-700 cursor-pointer" />
          ) : (
            <FaBars size={24} className="text-gray-700 cursor-pointer" />
          )}
        </button>
      </div>

   {/* Mobile Menu */}
<div
 className={`fixed top-16 left-0 right-0 md:hidden max-w-screen mx-2 bg-white shadow-md z-50 px-6 pt-8 pb-20 rounded-b-lg transform transition-all duration-300 ease-linear overflow-hidden ${
  isMenuOpen 
    ? 'h-auto opacity-100' 
    : 'h-0 opacity-0 pointer-events-none'
}`}
>
  <ul className="flex flex-col space-y-6 text-gray-700 text-lg">
    <li onClick={() => setIsMenuOpen(false)}>Features</li>
    <li onClick={() => setIsMenuOpen(false)}>Pricing</li>
    <li onClick={() => setIsMenuOpen(false)}>Changelog</li>
    <li onClick={() => setIsMenuOpen(false)}>Contact</li>
    <li>
      <div
        className="bg-gray-800 shadow-blue-950/50 shadow-lg py-2.5 px-4 rounded-lg text-white font-bold flex items-center space-x-2 cursor-pointer"
        onClick={() => setIsMenuOpen(false)}
      >
        <FaCrown />
        <p>Get Template</p>
      </div>
    </li>
  </ul>
</div>
    </nav>
  );
}

export default Navbar;