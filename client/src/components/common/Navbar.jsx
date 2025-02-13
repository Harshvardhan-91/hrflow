import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-80px 0px 0px 0px", threshold: 0.5 }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navItems = [
        { title: "Features", href: "features" },
        { title: "How it Works", href: "how-it-works" },
        { title: "Benefits", href: "benefits" },
        { title: "Contact", href: "contact" },
    ];

    const scrollToSection = (href) => {
        const element = document.getElementById(href);
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 backdrop-blur-lg ${
                scrolling ? "bg-gray-950/90 shadow-md" : "bg-gray-950/50"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
                    >
                        AI HR
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.title}
                                onClick={() => scrollToSection(item.href)}
                                className={`text-gray-300 hover:text-indigo-400 transition-colors cursor-pointer ${
                                    activeSection === item.href ? "text-indigo-400" : ""
                                }`}
                            >
                                {item.title}
                            </button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden py-4"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.title}
                                onClick={() => {
                                    scrollToSection(item.href);
                                    setIsOpen(false);
                                }}
                                className={`block w-full text-left py-2 text-gray-300 hover:text-indigo-400 cursor-pointer ${
                                    activeSection === item.href ? "text-indigo-400" : ""
                                }`}
                            >
                                {item.title}
                            </button>
                        ))}
                        <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                            Get Started
                        </button>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;