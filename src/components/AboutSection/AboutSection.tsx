'use client';
import { motion } from 'framer-motion';
import Team from '../Team/Team';

// Definindo a interface para os props do componente
interface ExperienceSectionProps {
  title: string;
  paragraphs: string[];
}

/**
 * @description The ExperienceSection component displays a section with a title and multiple paragraphs, with a fade-in animation on scroll
 * @param title - The title to be displayed
 * @param paragraphs - An array of paragraphs to be displayed in the section
 * @returns The ExperienceSection component
 */
export default function ExperienceSection({
  title,
  paragraphs,
}: ExperienceSectionProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="py-[4vh] box-border w-full md:max-w-[780px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      variants={itemVariants}
    >
      <main>
        <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight mt-14 mb-10">
          {title}
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-light text-base md:text-lg lg:text-xl leading-snug mb-10"
          >
            {paragraph}
          </p>
        ))}
        <Team />
      </main>
    </motion.div>
  );
}
