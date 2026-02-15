import { PiInstagramLogo, PiLinkedinLogo, PiTwitterLogo, PiYoutubeLogo } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Footer() {
    const [email, setEmail] = useState("");

    const footerLinks = {
        "Product": [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Changelog", href: "#changelog" },
            { name: "Roadmap", href: "#roadmap" }
        ],
        "Company": [
            { name: "About", href: "#about" },
            { name: "Blog", href: "#blog" },
            { name: "Careers", href: "#careers" },
            { name: "Press", href: "#press" }
        ],
        "Resources": [
            { name: "Documentation", href: "#docs" },
            { name: "Help Center", href: "#help" },
            { name: "Community", href: "#community" },
            { name: "Status", href: "#status" }
        ],
        "Legal": [
            { name: "Privacy", href: "#privacy" },
            { name: "Terms", href: "#terms" },
            { name: "Security", href: "#security" },
            { name: "Cookies", href: "#cookies" }
        ]
    };

    const socialLinks = [
        { icon: PiInstagramLogo, href: "#", label: "Instagram" },
        { icon: PiLinkedinLogo, href: "#", label: "LinkedIn" },
        { icon: PiTwitterLogo, href: "#", label: "Twitter" },
        { icon: PiYoutubeLogo, href: "#", label: "YouTube" }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log("Newsletter signup:", email);
        setEmail("");
    };

    return (
        <footer className="bg-[#0A0A0A] text-gray-300 relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none" />
            
            {/* Main footer content */}
            <div className="relative max-w-7xl mx-auto px-8 py-16">
                {/* Top section with logo and newsletter */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 pb-16 border-b border-gray-800">
                    {/* Brand section */}
                    <div className="max-w-md">
                        <img 
                            className="h-10 w-auto mb-6 brightness-0 invert" 
                            src="/logo.png" 
                            alt="WhiteLoop" 
                            loading="lazy" 
                        />
                        <p className="text-gray-400 mb-6 text-lg">
                            Transform your workflow with modern solutions.
                        </p>
                        
                        {/* Newsletter signup */}
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-700 text-gray-300 placeholder-gray-600 transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="group px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <span>Subscribe</span>
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* Quick contact */}
                    <div className="bg-gray-900/30 p-8 w-full rounded-2xl border border-gray-800">
                        <h3 className="text-white font-semibold mb-4 text-lg">Get in touch</h3>
                        <p className="text-gray-400 mb-2">hello@whiteloop.com</p>
                        <p className="text-gray-400">+91 8989898989</p>
                        
                        {/* Social links */}
                        <div className="flex gap-4 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-xl text-gray-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Links grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-white font-semibold mb-4 text-lg">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-500">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#cookies" className="hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <span>© {new Date().getFullYear()} WhiteLoop. All rights reserved.</span>
                        <span className="hidden md:block text-gray-700">|</span>
                        <span>Made with 🤍 by <a href="https://github.com/Sonu-Hansda" target="_blank" className="text-white hover:underline">Sonu Hansda</a></span>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl" />
            <div className="absolute -top-48 -right-48 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl" />
        </footer>
    );
}

export default Footer;