import AboutSection from '@/components/AboutSection/AboutSection';

const paragraphs = [
  "With more than a decade of remote work experience, I've engaged with a diverse range of clients, projects, startups, and full-time positions worldwide. Excelling in remote environments, I've conquered challenges through effective communication and collaboration, delivering exceptional results consistently.",
  'Embracing startups and smaller teams, I thrive on challenges and take ownership. I excel in problem-solving, driving solutions from inception to completion. With a creative and visionary mindset, I specialize in crafting visually striking and functional user interfaces, prioritizing user-centric design. My flexible design process adapts seamlessly to project requirements, encompassing research, implementation, and evaluation stages.',
  'I foster open communication and teamwork, leveraging my technical proficiency in design tools and front-end development to challenges and learn continuously. I prioritize culture alongside product, believing a supportive and collaborative environment is key to success. I excel at tackling diverse design challenges and pushing boundaries. Always learning, I seek new experiences to improve.',
];

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <AboutSection
        title="Senior product designer with 12 years of experience specializing in interface design."
        paragraphs={paragraphs}
      />
    </main>
  );
}
