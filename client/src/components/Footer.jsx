import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const quickLinks = [
        { title: "Features", to: "features" },
        { title: "How It Works", to: "how-it-works" },
        { title: "Contact", to: "contact" }
    ];

    return (
        <footer className="bg-gray-950 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                        AI HR Management
                    </h3>
                    <p className="text-gray-400">
                        Transforming workforce management through intelligent AI automation.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-indigo-300 mb-4">Quick Links</h4>
                    {quickLinks.map((link) => (
                        <ScrollLink 
                            key={link.title}
                            to={link.to}
                            smooth={true}
                            duration={600}
                            offset={-80} // Adjust offset to match navbar height
                            className="block text-gray-400 hover:text-indigo-300 mb-2 cursor-pointer"
                        >
                            {link.title}
                        </ScrollLink>
                    ))}
                </div>

                <div>
                    <h4 className="font-bold text-indigo-300 mb-4">Legal</h4>
                    <a href="/privacy" className="block text-gray-400 hover:text-indigo-300 mb-2">Privacy Policy</a>
                    <a href="/terms" className="block text-gray-400 hover:text-indigo-300 mb-2">Terms of Service</a>
                    <a href="/compliance" className="block text-gray-400 hover:text-indigo-300 mb-2">Compliance</a>
                </div>

                <div>
                    <h4 className="font-bold text-indigo-300 mb-4">Connect</h4>
                    <div className="flex space-x-4">
                        {[{ icon: Twitter, href: "https://twitter.com" }, 
                          { icon: Linkedin, href: "https://linkedin.com" }, 
                          { icon: Mail, href: "mailto:contact@aihrmanagement.com" }]
                          .map((social) => (
                            <motion.a
                                key={social.href}
                                href={social.href}
                                whileHover={{ scale: 1.2 }}
                                className="text-gray-400 hover:text-indigo-300"
                            >
                                <social.icon className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
                © 2024 AI HR Management. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
