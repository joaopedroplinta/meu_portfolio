import React from 'react';
import { motion } from 'framer-motion';
import skills from '../../data/skills';
import SkillsCategory from './SkillsCategory';

const SkillsSection: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryTitles: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Banco de Dados",
    tools: "Ferramentas",
    languages: "Linguagens de Programação"
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-primary-500 mb-2">COMPETÊNCIAS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">Minha Stack</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto pb-4">
            Aqui estão as tecnologias e ferramentas que utilizo no meu dia a dia como desenvolvedor.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
            <SkillsCategory
              key={category}
              title={categoryTitles[category]}
              skills={categorySkills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;