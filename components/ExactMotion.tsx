"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(7px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.065 } }
      }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.975 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] as const } }
};

export function StaggerCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.article className={className} variants={itemVariants}>{children}</motion.article>;
}

export function StaggerCell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={itemVariants}>{children}</motion.div>;
}
