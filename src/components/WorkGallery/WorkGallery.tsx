import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

// Definindo a interface para o item de trabalho
interface WorkItem {
  href: string;
  src: string | StaticImageData;
  company: string;
  description: string;
}

// Definindo a tipo para as propriedades do componente
type Props = {
  works: WorkItem[];
};

/**
 * @description The WorkGallery component displays a grid of work items with hover effects and animations
 * @param works - Array of work items to be displayed
 * @returns The WorkGallery component
 */
export default function WorkGallery({ works }: Props) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 2xl:gap-36">
      {works.map((work, index) => (
        <motion.div
          key={index}
          className={`block ${index % 2 === 1 ? 'md:mt-64' : ''}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          variants={itemVariants}
        >
          <Link href={work.href}>
            <div className="relative w-full h-96 md:h-640 xl:h-screen overflow-hidden transition-transform duration-700 transform hover:scale-95 rounded-3xl">
              <div className="absolute inset-0 transition-transform duration-700 transform hover:scale-110">
                <Image
                  src={work.src}
                  alt={work.company}
                  height={1000}
                  width={1000}
                  className="rounded-3xl object-cover w-full h-full"
                  priority={index === 0} // Adiciona prioridade apenas para o primeiro item
                />
              </div>
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <div className="font-bold text-xl 2xl:text-3xl leading-tight">
                {work.company}
              </div>
              <div className="text-gray-600 2xl:text-2xl leading-relaxed">
                {work.description}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
