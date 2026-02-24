import React from 'react';
import { motion } from 'framer-motion';
import { Code, GraduationCap, FlaskConical, Smartphone } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-primary-500 mb-2">CONHEÇA MAIS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">Sobre Mim</h3>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-400 rounded-xl z-0"></div>
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="João Pedro Plinta"
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold text-dark dark:text-white mb-4">
              Estudante de Ciência da Computação e Desenvolvedor
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Sou estudante de Bacharelado em Ciência da Computação no IFPR - Campus Pinhais, 
              atualmente no 7º período. Desde cedo, tenho fascínio por tecnologia e como ela pode 
              transformar a sociedade.
            </p>
            <p className='text-gray-700 dark:text-gray-300 mb-8 leading-relaxed'>
              Atualmente, sou estagiário na Celepar (Companhia de Tecnologia da Informação e Comunicação do Paraná), onde tenho a oportunidade de aplicar meus conhecimentos em projetos reais, 
              colaborando com uma equipe talentosa e aprendendo constantemente sobre as melhores práticas 
              de desenvolvimento de software.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Já atuei como estagiário na Polícia Científica do Paraná, onde apliquei meus 
              conhecimentos em desenvolvimento de software para criar soluções que auxiliam 
              nas atividades forenses e também atuei no suporte de sistemas. Essa experiência me proporciou um entendimento 
              valioso sobre como a tecnologia pode ser aplicada em contextos complexos e de 
              alta responsabilidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg">
                  <Code size={20} className="text-primary-500" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1 dark:text-white">Desenvolvimento Web</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">React, Node.js, TypeScript</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg">
                  <Smartphone size={20} className="text-primary-500" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1 dark:text-white">Desenvolvimento Mobile</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">React Native, Expo</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg">
                  <FlaskConical size={20} className="text-primary-500" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1 dark:text-white">Análise de Dados</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Python, Pandas, SQL</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg">
                  <GraduationCap size={20} className="text-primary-500" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1 dark:text-white">Formação Acadêmica</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Bacharelado em Ciência da Computação</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;