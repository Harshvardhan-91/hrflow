import { motion } from "framer-motion";
import { 
    Clock, 
    Calendar, 
    DollarSign, 
    BarChart2, 
    Users, 
    Shield, 
    Zap, 
    TrendingUp 
} from "lucide-react";

const FeatureSection = () => {
    const features = [
        {
            icon: Clock,
            title: "Intelligent Attendance Tracking",
            description: "AI-powered system automatically logs and verifies employee time with high accuracy.",
            capabilities: [
                "Real-time tracking",
                "Predictive absence detection",
                "Automated timesheet generation"
            ]
        },
        {
            icon: Calendar,
            title: "Smart Leave Management",
            description: "Optimize leave allocation and approval with intelligent recommendation algorithms.",
            capabilities: [
                "Predictive leave patterns",
                "Balanced team coverage",
                "Automated approval workflows"
            ]
        },
        {
            icon: DollarSign,
            title: "Automated Payroll Processing",
            description: "Streamline payroll calculations with AI-driven precision and compliance.",
            capabilities: [
                "Instant salary computations",
                "Tax and deduction optimization",
                "Transparent financial reporting"
            ]
        },
        {
            icon: BarChart2,
            title: "Shift Scheduling Optimization",
            description: "Dynamic scheduling that maximizes workforce efficiency and employee satisfaction.",
            capabilities: [
                "Demand-based staffing",
                "Skills and preference matching",
                "Conflict resolution"
            ]
        }
    ];

    const metricHighlights = [
        { 
            icon: Users, 
            value: "95%", 
            label: "Employee Satisfaction" 
        },
        { 
            icon: Zap, 
            value: "40%", 
            label: "Productivity Increase" 
        },
        { 
            icon: Shield, 
            value: "99.9%", 
            label: "Compliance Accuracy" 
        },
        { 
            icon: TrendingUp, 
            value: "$50K", 
            label: "Annual Cost Savings" 
        }
    ];

    return (
        <div className="bg-gray-950 text-white py-20 px-6" id= "features">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
                >
                    AI-Powered HR Capabilities
                </motion.h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <feature.icon className="w-12 h-12 text-indigo-400 mb-4" />
                            <h3 className="text-2xl font-bold text-indigo-300 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 mb-4">
                                {feature.description}
                            </p>
                            <ul className="text-gray-400 space-y-2 pl-4">
                                {feature.capabilities.map(cap => (
                                    <li key={cap} className="list-disc">
                                        {cap}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                    <h3 className="text-3xl font-bold text-center mb-10 text-indigo-300">
                        Performance Impact
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {metricHighlights.map((metric) => (
                            <div 
                                key={metric.label} 
                                className="text-center bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                            >
                                <metric.icon className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                                <div className="text-4xl font-bold text-indigo-300 mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-gray-400">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FeatureSection;