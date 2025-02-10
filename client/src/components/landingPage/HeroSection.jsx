import { motion } from "framer-motion";
import { Cpu, Users, Clock } from "lucide-react";

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.4 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const features = [
        { icon: Cpu, title: "AI Insights", description: "Advanced workforce analytics." },
        { icon: Users, title: "Team Management", description: "Optimize scheduling." },
        { icon: Clock, title: "Time Tracking", description: "Automated payroll management." }
    ];

    return (
        <div className="relative w-full h-[70vh] bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center text-center text-white px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "tween" }}
                className="absolute inset-0 bg-indigo-500/10 backdrop-blur-xl rounded-3xl w-[95%] max-w-6xl mx-auto mt-20 p-12 shadow-2xl border border-white/10"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 space-y-8"
                >
                    {/* Title */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex gap-4 justify-center items-center"
                    >
                        {["AI", "HR", "Management"].map((text) => (
                            <motion.h1
                                key={text}
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
                            >
                                {text}
                            </motion.h1>
                        ))}
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Transform workforce management with intelligent AI automation.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center space-x-5"
                    >
                        {["Get Started", "Learn More"].map((btn) => (
                            <button 
                                key={btn}
                                className="px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                                style={{
                                    background: btn === "Get Started" 
                                        ? 'linear-gradient(to right, #6366f1, #8b5cf6)' 
                                        : 'transparent',
                                    color: btn === "Get Started" ? 'white' : '#a5b4fc',
                                    border: btn === "Learn More" ? '2px solid rgba(99, 102, 241, 0.3)' : 'none'
                                }}
                            >
                                {btn}
                            </button>
                        ))}
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-3 gap-6 max-w-4xl mx-auto"
                    >
                        {features.map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -10, 
                                    scale: 1.1,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                className="bg-white/10 p-6 rounded-2xl border border-white/10 transition-all duration-300"
                            >
                                <feature.icon className="w-10 h-10 text-indigo-400 mb-3 mx-auto" />
                                <h3 className="text-lg font-bold text-indigo-300 mb-2 text-center">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm text-center">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
