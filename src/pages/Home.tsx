import koipunicodeLogo from '../components/TopNav/assets/KoiPuniLogo.png'
import cafeFoto from '../components/TopNav/assets/cafePlace.png'
import React from 'react';
import '@fontsource/grandstander';



const Home: React.FC = () => {
  return (
    <div className="bg-[#DDD5C4] min-h-screen p-8">
      <div className='flex justify-center'>
        <div className='flex justify-between'>
          <div className='w-[800px] h-[156px] bg-white mr-8 rounded-[6px] flex items-center'>
            <img src={cafeFoto} alt="Foto del lugar" className='w-[156px] h-[126px] ml-4' />
            <div className='flex-col flex'>
              <div className='flex items-end'>
                <h1 className='ml-2 mb-2 font-[grandstander] text-[2.25rem] font-semibold tracking-[-2px] leading-[85%]'>Juntada en Cafe Con Ciencia</h1>
                <span className='text-[10px] mb-4 ml-2 text-gray-600'>Publicado el 30/9/2024</span>
              </div>
              <div className='flex'>
                <div className='mb-2 ml-2 mr-8 flex flex-col'>
                  <span className='font-bold tracking-[-1px] text-[1rem] leading-[95%]'>Juegos disponibles</span>
                </div>
                <div className='mb-2 ml-2 flex flex-col'>
                  <span className='font-bold tracking-[-1px] text-[1rem] leading-[95%]'>Dia a juntarse</span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[200px] h-[520px] bg-white justify-between flex-col flex rounded-[6px]'>
            <div className='text-[#ac854f] m-4'>
              <h2 className='font-bold text-[1.5rem] tracking-[-1px] leading-[110%]'>Acerca de Nosotros</h2>
              <p className='leading-[105%] mt-3 text-[1rem]'>Somos una <b>comunidad</b> que conecta a apasionados de los <b>juegos de mesa</b>. Nuestro objetivo es crear un espacio para compartir <b>experiencias</b>, <b>descubrir</b> nuevos juegos y hacer nuevas <b>amistades</b>.</p>
            </div>
            <div className='m-4 flex flex-col justify-center'>
              <p className='text-[0.75rem] self-center'>Desarollado por:</p>
              <img className='w-[114px] h-[26px] self-center' src={koipunicodeLogo} alt="KoiPuniCode Logo" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;