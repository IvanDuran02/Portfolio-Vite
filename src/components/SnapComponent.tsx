import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const SnapComponent = ({ props }: JSX.Element) => {
  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>{props}</div>
      <motion.h2 style={{ y }}></motion.h2>
    </section>
  );
};

export default SnapComponent;
