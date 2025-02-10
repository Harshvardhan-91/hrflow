import { motion } from "framer-motion";
import { 
    DollarSign, 
    Clock, 
    TrendingUp, 
    Shield, 
    Users, 
    Star 
} from "lucide-react";

const BenefitsSection = () => {
    const benefits = [
        {
            icon: DollarSign,
            title: "Cost Reduction",
            description: "Minimize administrative overhead and optimize resource allocation through intelligent automation.",
            impact: "Up to 40% cost savings"
        },
        {
            icon: Clock,
            title: "Time Efficiency",
            description: "Automate repetitive HR tasks, freeing up team to focus on strategic initiatives.",
            impact: "50% time saved"
        },
        {
            icon: TrendingUp,
            title: "Performance Optimization",
            description: "Data-driven insights improve workforce productivity and employee engagement.",
            impact: "25% productivity increase"
        },
        {
            icon: Shield,
            title: "Compliance & Accuracy",
            description: "Ensure regulatory compliance and minimize human error in HR processes.",
            impact: "99.9% accuracy"
        },
        {
            icon: Users,
            title: "Employee Experience",
            description: "Personalized and responsive HR interactions enhance overall workplace satisfaction.",
            impact: "95% employee satisfaction"
        },
        {
            icon: Star,
            title: "Continuous Innovation",
            description: "Machine learning models continuously adapt and improve HR strategies.",
            impact: "Always evolving"
        }
    ];

    return (
        <div className="bg-gray-950 text-white py-20 px-6" id = "benefits">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
                >
                    Transform Your HR with AI
                </motion.h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
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
                            <benefit.icon className="w-12 h-12 text-indigo-400 mb-4" />
                            <h3 className="text-xl font-bold text-indigo-300 mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-300 mb-2">
                                {benefit.description}
                            </p>
                            <div className="text-lg font-semibold text-indigo-200">
                                {benefit.impact}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;