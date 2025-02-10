import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
    const ctaFeatures = [
        "Free initial consultation",
        "Custom AI solution design",
        "Seamless integration",
        "Ongoing support"
    ];

    return (
        <div className="bg-gradient-to-b from-gray-950 to-black text-white py-20 px-6" id='contact'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 text-center"
            >
                <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
                    Ready to Revolutionize Your HR?
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                    Transform your HR processes with intelligent AI-driven automation. Schedule a free consultation today.
                </p>
                
                <div className="flex justify-center mb-8 space-x-4">
                    {ctaFeatures.map((feature) => (
                        <div key={feature} className="flex items-center text-indigo-300">
                            <CheckCircle className="mr-2 w-5 h-5" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg font-semibold flex items-center justify-center mx-auto space-x-2 shadow-lg"
                >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2" />
                </motion.button>
            </motion.div>
        </div>
    );
};

export default CTASection;