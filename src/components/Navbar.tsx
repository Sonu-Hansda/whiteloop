import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100;
      const progress = Math.min(scrollY / maxScroll, 1);
      
      setScrollProgress(progress);
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#changelog" },
    { name: "Contact", href: "#contact" },
  ];

  const glassOpacity = 0.7 + scrollProgress * 0.2;
  const blurIntensity = 8 + scrollProgress * 4;
  const shadowIntensity = scrollProgress * 0.15;

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`w-full max-w-5xl transition-all duration-700 ease-out rounded-full
            ${isScrolled ? 'py-2' : 'py-3'}`}
          style={{
            backdropFilter: `blur(${blurIntensity}px)`,
            WebkitBackdropFilter: `blur(${blurIntensity}px)`,
            backgroundColor: `rgba(255, 255, 255, ${glassOpacity})`,
            boxShadow: isScrolled 
              ? `0 4px 30px rgba(0, 0, 0, ${shadowIntensity})` 
              : '0 4px 20px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Animated gradient border bottom */}
          <div 
            className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"
            style={{
              opacity: scrollProgress,
              transform: `scaleX(${scrollProgress})`,
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            }}
          />

          <div className="px-6">
            <div className="flex justify-between items-center">
              {/* Logo with hover animation */}
              <div className="flex-shrink-0 group cursor-pointer">
                <img
                  className="h-8 w-14 md:w-16 transition-transform duration-300 group-hover:scale-105"
                  src="/logo.png"
                  alt="Logo"
                  loading="lazy"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                    onMouseEnter={() => setActiveLink(link.name)}
                    onMouseLeave={() => setActiveLink("")}
                  >
                    {link.name}
                    {/* Animated underline */}
                    <span 
                      className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gray-800 transform origin-left transition-transform duration-300 ease-out
                        ${activeLink === link.name ? 'scale-x-100' : 'scale-x-0'}`}
                    />
                  </a>
                ))}
              </div>

              {/* CTA Button with hover animation */}
              <div className="hidden md:block">
                <button className="group relative overflow-hidden bg-black text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  {/* Button content */}
                  <div className="relative flex items-center space-x-2">
                    <span>Book Appointment</span>
                    <FaArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative p-2 transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  <div className="relative z-10">
                    {isMenuOpen ? (
                      <FaTimes size={20} className="text-gray-700" />
                    ) : (
                      <FaBars size={20} className="text-gray-700" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Separate from pill navbar */}
        <div
          className={`md:hidden absolute left-4 right-4 top-full mt-2 transition-all duration-500 ease-in-out overflow-hidden rounded-2xl
            ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block transform transition-all duration-300 hover:translate-x-2"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center space-x-3 text-gray-700 hover:text-gray-900">
                  <span className="text-lg font-medium">{link.name}</span>
                </span>
              </a>
            ))}
            
            {/* Mobile CTA */}
            <div
              className="transform transition-all duration-500"
              style={{
                transitionDelay: '200ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <button className="w-full group relative overflow-hidden bg-black text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Book Appointment</span>
                <FaArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;