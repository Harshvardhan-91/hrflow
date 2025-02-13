import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Bell,
  Search,
  User,
} from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Features", href: "features", badge: "New" },
    { title: "Solutions", href: "solutions" },
    { title: "Resources", href: "resources", submenu: true },
    { title: "Pricing", href: "pricing" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolling
          ? "py-3 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-zinc-950/50"
          : "py-5 bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:via-cyan-600/20 group-hover:to-purple-600/20 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              HRFlow
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Search Bar */}
            <div className="relative group">
              <div
                className={`flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-lg border ${
                  searchFocused ? "border-blue-500/50" : "border-zinc-800/50"
                } transition-all duration-300`}>
                <Search className="w-4 h-4 text-zinc-400 group-hover:text-zinc-300" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 bg-transparent text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
            </div>

            {/* Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="relative group">
                <span className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  {item.title}
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.submenu && (
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:rotate-90" />
                  )}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </Link>
            ))}

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
                <Bell className="w-5 h-5 text-zinc-400" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
                <User className="w-5 h-5 text-zinc-400" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer px-5 py-2.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-lg font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                Get Started
                <ChevronRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-all duration-300" />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden absolute left-0 right-0 mt-4 p-6 bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-zinc-950/50">
              {/* Mobile Search */}
              <div className="mb-6">
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                  <Search className="w-5 h-5 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Mobile Navigation Items */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-zinc-400 hover:text-white transition-colors py-2 cursor-pointer">
                    <span className="flex items-center gap-2">
                      {item.title}
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {item.submenu && <ChevronRight className="w-5 h-5" />}
                  </Link>
                ))}

                <div className="pt-4 mt-4 border-t border-zinc-800/50">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full cursor-pointer px-5 py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-lg font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
