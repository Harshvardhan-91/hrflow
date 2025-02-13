import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Calendar,
  MessageSquare,
  Rocket,
} from "lucide-react";

const CTASection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  const ctaFeatures = [
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "Book a personalized demo session",
    },
    {
      icon: Rocket,
      title: "Custom Solution",
      description: "Tailored to your needs",
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Dedicated success team",
    },
  ];

  return (
    <div className="bg-zinc-950 py-32 px-4 overflow-hidden" id="contact">
      {/* Background Effects */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-30" />
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative">
          {/* Main CTA Card */}
          <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-zinc-800/50 p-12 overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-800 mb-8">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-zinc-400">
                  LIMITED TIME OFFER
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-zinc-100">Ready to</span>
                <span className="relative mx-2">
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Transform
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
                <span className="text-zinc-100">Your HR?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                Experience the future of HR management with our AI-powered
                platform. Book a free consultation and see the difference.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-3 gap-6 mb-12">
              {ctaFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 bg-zinc-900/50 rounded-xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r cursor-pointer from-blue-600 via-cyan-600 to-teal-600 rounded-xl font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-xl font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  Watch Demo
                  <Sparkles className="w-4 h-4" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
