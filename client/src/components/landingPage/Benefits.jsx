import { motion, useScroll, useTransform } from "framer-motion";
import {
  DollarSign,
  Clock,
  TrendingUp,
  Shield,
  Users,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const BenefitsSection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description:
        "Minimize administrative overhead and optimize resource allocation through intelligent automation.",
      impact: "Up to 40% cost savings",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description:
        "Automate repetitive HR tasks, freeing up team to focus on strategic initiatives.",
      impact: "50% time saved",
      gradient: "from-blue-600 via-indigo-600 to-violet-600",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "Data-driven insights improve workforce productivity and employee engagement.",
      impact: "25% productivity increase",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    },
    {
      icon: Shield,
      title: "Compliance & Accuracy",
      description:
        "Ensure regulatory compliance and minimize human error in HR processes.",
      impact: "99.9% accuracy",
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
    },
    {
      icon: Users,
      title: "Employee Experience",
      description:
        "Personalized and responsive HR interactions enhance overall workplace satisfaction.",
      impact: "95% employee satisfaction",
      gradient: "from-pink-600 via-rose-600 to-red-600",
    },
    {
      icon: Star,
      title: "Continuous Innovation",
      description:
        "Machine learning models continuously adapt and improve HR strategies.",
      impact: "Always evolving",
      gradient: "from-cyan-600 via-sky-600 to-blue-600",
    },
  ];

  return (
    <div
      className="relative bg-zinc-950 py-32 px-4 overflow-hidden"
      id="benefits">
      {/* Background Effects */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-30" />
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
              PROVEN RESULTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-zinc-100">Transform Your HR with</span>
            <span className="relative mx-2">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                AI Innovation
              </span>
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-lg"
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
            Experience the power of AI-driven HR automation and analytics.
            Streamline processes, reduce costs, and enhance employee
            satisfaction.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.gradient} bg-opacity-10 mb-6`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 mb-4">{benefit.description}</p>

                {/* Impact Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50">
                  <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {benefit.impact}
                  </span>
                </div>

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
            Experience the Benefits
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsSection;
