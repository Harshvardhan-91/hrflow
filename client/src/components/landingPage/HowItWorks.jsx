import { motion } from "framer-motion";
import { 
    Database, 
    Upload, 
    Bot, 
    TrendingUp, 
    Check, 
    Settings 
} from "lucide-react";

const HowItWorks = () => {
    const workflowSteps = [
        {
            icon: Database,
            title: "Data Integration",
            description: "Centralize employee data from various sources into a unified platform.",
            color: "text-blue-400"
        },
        {
            icon: Upload,
            title: "AI Model Training",
            description: "Machine learning models analyze historical data to understand patterns.",
            color: "text-green-400"
        },
        {
            icon: Bot,
            title: "Intelligent Prediction",
            description: "AI generates insights, recommendations, and automated suggestions.",
            color: "text-purple-400"
        },
        {
            icon: TrendingUp,
            title: "Continuous Optimization",
            description: "System learns and improves recommendations based on feedback and results.",
            color: "text-indigo-400"
        },
        {
            icon: Check,
            title: "Automated Execution",
            description: "Implement AI recommendations with human oversight and approval.",
            color: "text-teal-400"
        },
        {
            icon: Settings,
            title: "Scalable Infrastructure",
            description: "Cloud-based architecture ensures flexibility and performance.",
            color: "text-orange-400"
        }
    ];

    return (
        <div className="bg-gray-950 text-white py-20 px-6" id='how-it-works'>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
                >
                    How Our AI HR System Works
                </motion.h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 120
                            }}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <step.icon className={`w-12 h-12 ${step.color} mb-4`} />
                            <h3 className="text-xl font-bold text-indigo-300 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-300">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;