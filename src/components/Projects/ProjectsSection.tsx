import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const uniqueTechnologies = [...new Set(
    projects.flatMap(project => project.technologies)
  )];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.includes(activeFilter)
      );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-primary-500 mb-2">MEUS TRABALHOS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">Projetos Recentes</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto pb-4">
            Aqui estão alguns projetos em que trabalhei sendo eles academicos ou pessoais. Cada um deles reflete minha paixão por desenvolvimento e minha busca constante por aprendizado e inovação.
          </p>
          
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-10 gap-3">
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === 'all' 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Todos
          </motion.button>
          
          {uniqueTechnologies.slice(0, 5).map((tech) => (
            <motion.button
              key={tech}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tech
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveFilter(tech)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;