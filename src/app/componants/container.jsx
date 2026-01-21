"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Container({children, id}){
    const { ref, inView } = useInView({
        triggerOnce: true,   
        threshold: 0.1,
      });

      return (
        <motion.div ref={ref} className={`container ${inView ? "animate" : ""}`} id={id}>
          {children}
        </motion.div>
      );

}
