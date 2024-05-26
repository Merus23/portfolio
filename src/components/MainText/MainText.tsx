'use client';
import { motion } from 'framer-motion';

// Definindo a interface para os props do componente
interface MainTextProps {
  text: string;
}

/**
 * @description The MainText component displays a heading with a fade-in animation on scroll
 * @param text - The text to be displayed inside the heading
 * @returns The MainText component
 */
export default function MainText({ text }: MainTextProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="h-480 w-full flex justify-center items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      variants={itemVariants}
    >
      <h1 className="w-full text-4xl md:text-7xl font-semibold leading-relaxed md:leading-loose">
        {text}
      </h1>
    </motion.div>
  );
}
