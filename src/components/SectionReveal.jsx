import { motion } from "framer-motion";

function SectionReveal({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.995 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default SectionReveal;





