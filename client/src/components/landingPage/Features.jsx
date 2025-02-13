import { motion, useScroll, useTransform } from "framer-motion";
import {
  Clock,
  Calendar,
  DollarSign,
  BarChart2,
  Users,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const FeatureSection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  const features = [
    {
      icon: Clock,
      title: "Intelligent Attendance Tracking",
      description:
        "AI-powered system automatically logs and verifies employee time with high accuracy.",
      gradient: "from-blue-600 via-indigo-600 to-violet-600",
      capabilities: [
        "Real-time tracking with biometric verification",
        "ML-driven absence prediction and patterns",
        "Automated timesheet generation with anomaly detection",
      ],
    },
    {
      icon: Calendar,
      title: "Smart Leave Management",
      description:
        "Optimize leave allocation and approval with intelligent recommendation algorithms.",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      capabilities: [
        "AI-powered leave pattern analysis and forecasting",
        "Team coverage optimization with ML models",
        "Intelligent approval workflow automation",
      ],
    },
    {
      icon: DollarSign,
      title: "Automated Payroll Processing",
      description:
        "Streamline payroll calculations with AI-driven precision and compliance.",
      gradient: "from-cyan-600 via-teal-600 to-emerald-600",
      capabilities: [
        "Real-time salary computations with tax optimization",
        "Compliance automation with regulatory updates",
        "Advanced financial analytics and reporting",
      ],
    },
    {
      icon: BarChart2,
      title: "Shift Scheduling Optimization",
      description:
        "Dynamic scheduling that maximizes workforce efficiency and employee satisfaction.",
      gradient: "from-amber-600 via-orange-600 to-red-600",
      capabilities: [
        "AI-driven demand forecasting and staffing",
        "Smart skill matching and preference optimization",
        "Automated conflict resolution and balancing",
      ],
    },
  ];

  const metricHighlights = [
    {
      icon: Users,
      value: "95%",
      label: "Employee Satisfaction",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Zap,
      value: "40%",
      label: "Productivity Increase",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Compliance Accuracy",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      value: "$50K",
      label: "Annual Cost Savings",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="bg-zinc-950 py-24 px-4 overflow-hidden" id="features">
      {/* Background Effects */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-[50rem] h-[40rem] bg-gradient-to-bl from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[50rem] h-[40rem] bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-30" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-800 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-zinc-400">
              POWERFUL FEATURES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-zinc-100">AI-Powered</span>
            <span className="relative mx-2">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                HR Capabilities
              </span>
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Transform your HR operations with cutting-edge AI technology that
            streamlines processes, enhances decision-making, and delivers
            measurable results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-10 mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 mb-6">{feature.description}</p>

                {/* Capabilities */}
                <ul className="space-y-3">
                  {feature.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-8 flex items-center gap-2 text-blue-400 group/link cursor-pointer">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl opacity-30" />

          <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800/50 p-12">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Measurable Impact
              </span>
            </h3>

            <div className="grid md:grid-cols-4 gap-8">
              {metricHighlights.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="group relative bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                  />

                  <div className="relative text-center">
                    <metric.icon
                      className={`w-12 h-12 p-2 mx-auto mb-4 bg-gradient-to-r ${metric.gradient} text-white rounded-md opacity-85`}
                    />
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-zinc-400">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureSection;
