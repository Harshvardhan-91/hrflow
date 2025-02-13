import { motion, useScroll, useTransform } from "framer-motion";
import {
  Database,
  Upload,
  Bot,
  TrendingUp,
  Check,
  Settings,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  const workflowSteps = [
    {
      icon: Database,
      title: "Data Integration",
      description:
        "Centralize employee data from various sources into a unified platform.",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Upload,
      title: "AI Model Training",
      description:
        "Machine learning models analyze historical data to understand patterns.",
      gradient: "from-cyan-600 to-teal-600",
    },
    {
      icon: Bot,
      title: "Intelligent Prediction",
      description:
        "AI generates insights, recommendations, and automated suggestions.",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimization",
      description:
        "System learns and improves recommendations based on feedback and results.",
      gradient: "from-cyan-600 to-teal-600",
    },
    {
      icon: Check,
      title: "Automated Execution",
      description:
        "Implement AI recommendations with human oversight and approval.",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Settings,
      title: "Scalable Infrastructure",
      description:
        "Cloud-based architecture ensures flexibility and performance.",
      gradient: "from-cyan-600 to-teal-600",
    },
  ];

  return (
    <div
      className="relative bg-zinc-950 py-32 px-4 overflow-hidden"
      id="how-it-works">
      {/* Background Effects */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-800 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-zinc-400">
              INNOVATIVE PROCESS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-zinc-100">How Our</span>
            <span className="relative mx-2">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI HR System
              </span>
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg"
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
            <span className="text-zinc-100">Works</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Experience a seamless integration of AI technology with your HR
            processes, delivering intelligent automation and data-driven
            insights.
          </p>
        </motion.div>

        {/* Workflow Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center">
                  <span className="text-sm font-medium text-zinc-400">
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.gradient} bg-opacity-10 mb-6`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400">{step.description}</p>

                {/* Learn More Link */}
                <div className="mt-6 flex items-center gap-2 text-blue-400 group/link cursor-pointer">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r cursor-pointer from-blue-600 via-cyan-600 to-teal-600 rounded-xl font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
            Start Implementation
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
