import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, NotebookText, UserSearch } from 'lucide-react';
import pageLogo from './assets/logo.png'
import instagramLogo from './assets/Instagram.png'
import whatsappLogo from './assets/WhatsApp.png'

const TopNav: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  }

  return (
    <>
      <nav className="bg-[#af8a57] shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex text-white w-40 h-16 text-[20px]'>
            <img src={pageLogo} alt="Juntadas de mesa Santi" className='h-12 mt-1 mr-12' />
            <Link to='' className='flex items-center hover:text-gray-300'>
              <Home className='w-6 h-6 mr-2' />
              <span className='font-semibold mr-6'>Inicio</span>
            </Link>
            <Link to='blog' className='flex items-center hover:text-gray-300'>
              <NotebookText className='w-6 h-6 mr-2' />
              <span className='font-semibold mr-6'>Blog</span>
            </Link>
          </div>

          <div className='flex w-48 h-16 text-white '>
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault();  // Evitar que el enlace navegue a otra página
                setShowModal(true);  // Mostrar el modal
              }}
              className='flex items-center hover:text-gray-300'
            >
              <UserSearch className='w-6 h-6 mr-2' />
              <div className='font-semibold text-[20px] relative'>Contactanos</div>
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-[15%] flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackgroundClick}
          >
            <motion.div
              className="bg-white p-4 rounded-[11px] h-fit relative flex flex-col mr-40 mt-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-xl font-bold mb-4">Contáctanos!!</h2>
              <div className='flex mr-10'>
                <p className="mb-4">Siguenos por</p>
                <a href='https://www.youtube.com' rel="noopener noreferrer">
                  <img src={instagramLogo} alt="Instagram" className='w-[21px] h-[21px]' />
                </a>
              </div>
              <p>Hablanos por +911 42069</p>
              <img src={whatsappLogo} alt="whatsapp" className='w-[21px] h-[21px]' />
              <button
                onClick={() => setShowModal(false)}  // Cerrar el modal
                className="mt-4 ml-8 mr-8 p-2 bg-red-500 text-white rounded-[6px]"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export default TopNav;