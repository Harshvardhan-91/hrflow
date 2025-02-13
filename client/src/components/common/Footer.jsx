import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  Twitter,
  Linkedin,
  Mail,
  Sparkles,
  Globe,
  Shield,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { title: "Features", to: "features" },
    { title: "How It Works", to: "how-it-works" },
    { title: "Benefits", to: "benefits" },
    { title: "Contact", to: "contact" },
  ];

  const resourceLinks = [
    { title: "Documentation", href: "/docs" },
    { title: "API Reference", href: "/api" },
    { title: "Case Studies", href: "/cases" },
    { title: "Support Center", href: "/support" },
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Compliance", href: "/compliance" },
    { title: "Security", href: "/security" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@aihrmanagement.com", label: "Email" },
    { icon: Globe, href: "https://aihrmanagement.com", label: "Website" },
  ];

  return (
    <footer className="relative bg-zinc-950 pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-teal-600/10 group-hover:from-blue-600/20 group-hover:via-cyan-600/20 group-hover:to-teal-600/20 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                HRFlow
              </span>
            </motion.a>
            <p className="text-zinc-400">
              Transforming workforce management through intelligent AI
              automation and data-driven insights.
            </p>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-zinc-400">
                SOC 2 Type II Certified
              </span>
            </div>
            <div className="flex items-center gap-1">
              <HeartHandshake className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-zinc-400">
                99.9% Customer Satisfaction
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.title}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                    {link.title}
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <motion.li
                  key={link.title}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <motion.li
                  key={link.title}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 group"
                    aria-label={social.label}>
                    <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative py-8 px-6 md:px-8 mb-12 bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800/50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-zinc-400">
                Get the latest updates on product features and HR insights.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-gradient-to-r cursor-pointer from-blue-600 via-cyan-600 to-teal-600 rounded-lg font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/50 text-center">
          <p className="text-zinc-500 text-sm">
            © 2025 HRFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
