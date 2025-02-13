import { motion, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Sparkles,
  ArrowRight,
  Play,
  Shield,
  ChartSpline,
  Zap,
} from "lucide-react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Advanced analytics and predictive modeling for workforce optimization",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with global standards",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
    },
    {
      icon: ChartSpline,
      title: "Smart Analytics",
      description: "Real-time dashboards and customizable reporting tools",
      gradient: "from-teal-600 via-emerald-600 to-green-600",
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Streamline workflows with intelligent process automation",
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-32 bg-zinc-950 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <motion.div
          style={{ y, opacity }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 300], [0, -100]), opacity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTh2MmgtMnYtMmgyem0tNCAwdi0yaC00djJoNHptMCA0di0yaC00djJoNHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L2c+PC9zdmc+')] opacity-40" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-800 cursor-pointer group">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-zinc-300 to-zinc-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
              NEXT-GEN HR PLATFORM
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-zinc-100">Your</span>
            <span className="relative mx-2">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {" "}
                HR Operations{" "}
              </span>
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 blur-xl"
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
            <span className="text-zinc-100">with AI</span>
          </h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Experience the future of HR management with our AI-powered platform.
            Streamline operations, gain actionable insights, and empower your
            workforce with intelligent automation.
          </motion.p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-xl font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 cursor-pointer flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-700 to-teal-700"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-xl font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all duration-300">
            <span className="flex cursor-pointer items-center gap-2">
              <Play className="w-4 h-4" />
              Watch Demo
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 mb-16">
          {[
            { label: "Active Users", value: "50K+" },
            { label: "Global Companies", value: "1,000+" },
            { label: "Data Points", value: "10M+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative p-6 bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-zinc-800/50 transition-all duration-300">
              {/* Gradient hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
              />

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-zinc-800/80 group-hover:bg-zinc-800 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-16 border-t border-zinc-900">
          <p className="text-center text-sm text-zinc-500 mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {["ACME Corp", "Globex Inc", "Hooli", "Initech", "Umbrella"].map(
              (company) => (
                <motion.div
                  key={company}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer">
                  <span className="text-xl font-semibold bg-gradient-to-r from-zinc-500 to-zinc-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-400 group-hover:to-cyan-400">
                    {company}
                  </span>
                  <motion.div className="absolute -inset-x-6 -inset-y-3 bg-zinc-900/50 rounded-lg opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
