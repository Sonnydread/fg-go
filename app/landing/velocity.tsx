"use client";

import { motion, useScroll, useTransform } from "framer-motion";
// import { cn } from "@/lib/utils";

interface ScrollVelocityContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollVelocityContainer({
  children,
 
}: ScrollVelocityContainerProps) {
  return (
    <>
   
      {children}
   
    </>
  );
}

interface ScrollVelocityRowProps {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: 1 | -1;
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 10,
  direction = 1,
}: ScrollVelocityRowProps) {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, (v) => v * baseVelocity * direction);

  return (
    <motion.div style={{ x }} className="flex w-max">
      {children}
    </motion.div>
  );
}
