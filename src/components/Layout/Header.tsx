import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'Sobre', to: 'about' },
  { name: 'Projetos', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contato', to: 'contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent cursor-pointer"
        >
          João Plinta
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`${
                scrolled ? 'text-dark dark:text-white' : 'text-dark dark:text-white'
              } hover:text-primary-500 cursor-pointer transition-all duration-300 font-medium`}
            >
              {item.name}
            </Link>
          ))}
          
          <a
            href="/curriculo.pdf"
            download="Curriculo_Joao_Plinta.pdf"
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium hover:scale-105"
            aria-label="Download currículo"
          >
            <Download size={18} />
            <span>Currículo</span>
          </a>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="text-white" size={20} />
            ) : (
              <Moon className="text-gray-800" size={20} />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-3">
          <a
            href="/curriculo.pdf"
            download="Curriculo_Joao_Plinta.pdf"
            className="p-2 text-primary-500 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
            aria-label="Download currículo"
          >
            <Download size={20} />
          </a>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="text-white" size={20} />
            ) : (
              <Moon className="text-gray-800" size={20} />
            )}
          </button>
          
          <button
            className="text-dark dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="py-3 text-dark dark:text-white hover:text-primary-500 cursor-pointer transition-all duration-300 font-medium border-b border-gray-100 dark:border-gray-700"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/curriculo.pdf"
              download="Curriculo_Joao_Plinta.pdf"
              onClick={() => setIsOpen(false)}
              className="py-3 flex items-center space-x-2 text-primary-500 hover:text-primary-600 cursor-pointer transition-all duration-300 font-medium border-b border-gray-100 dark:border-gray-700"
            >
              <Download size={18} />
              <span>Currículo</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;