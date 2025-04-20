import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // how much of the element is in view to trigger
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
