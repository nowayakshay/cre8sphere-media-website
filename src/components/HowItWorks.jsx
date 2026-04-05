import { motion } from "framer-motion";
import { ArrowRight, Bot, Target, Send } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function HowItWorks() {
  return (
    <section className="py-10 sm:py-20 bg-slate-50 border-y border-slate-100">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <h2 className="tracking-tight">
              How It Works
            </h2>
            <p className="mt-6 readable-text">
              Our AI automation turns single inputs into scaled digital success.
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative max-w-5xl mx-auto"
            >
              
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-px bg-slate-200 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#008080]/20 to-transparent"></div>
              </div>

              {/* Step 1 */}
              <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-[28px] bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-slate-900">1. Input Content</h3>
                <p className="mt-2 text-center max-w-[200px] subtext">
                  Provide a blog post, video, or simple text prompt.
                </p>
              </motion.div>

              {/* Arrow (Mobile) */}
              <ArrowRight className="w-6 h-6 text-slate-300 md:hidden" />

              {/* Step 2 */}
              <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-[28px] bg-[#008080] border border-[#006666] shadow-sm flex items-center justify-center text-white relative">
                  <div className="absolute inset-0 rounded-[28px] border border-white/20 opacity-40"></div>
                  <Bot className="w-8 h-8 relative z-10" />
                </div>
                <h3 className="mt-6 text-slate-900">2. AI Processing</h3>
                <p className="mt-2 text-center max-w-[200px] subtext opacity-80">
                  Our engines restructure, humanize, and optimize for platforms.
                </p>
              </motion.div>

              {/* Arrow (Mobile) */}
              <ArrowRight className="w-6 h-6 text-slate-300 md:hidden" />

              {/* Step 3 */}
              <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-[28px] bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800">
                  <Send className="w-8 h-8 text-[#008080]" />
                </div>
                <h3 className="mt-6 text-slate-900">3. Multi-platform</h3>
                <p className="mt-2 text-center max-w-[200px] subtext">
                  Outputs delivered formatted for Twitter, LinkedIn, Newsletters & more.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default HowItWorks;

