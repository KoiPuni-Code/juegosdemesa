import React, { useEffect, useState } from 'react';
import '@fontsource/grandstander';
import Card from '../components/Card';



const Home: React.FC = () => {

  const [events, setEvents] = useState<{name: string, date: string, cover: string}[]>([])
  
  useEffect(() => {
    fetch('/events.json').then(response => response.json()).then(data => setEvents(data.data))
  }, [])
  
  return (
    <div className="bg-[#DDD5C4] min-h-screen p-8">
      <div className='flex justify-center'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            {events.map(event => <Card name={event.name} date={event.date} cover={event.cover} />)}
          </div>
          <div className='w-[200px] h-[520px] bg-white justify-between flex-col flex rounded-[6px]'>
            <div className='text-[#ac854f] m-4'>
              <h2 className='font-bold text-[1.5rem] tracking-[-1px] leading-[110%]'>Acerca de Nosotros</h2>
              <p className='leading-[105%] mt-3 text-[1rem]'>Somos una <b>comunidad</b> que conecta a apasionados de los <b>juegos de mesa</b>. Nuestro objetivo es crear un espacio para compartir <b>experiencias</b>, <b>descubrir</b> nuevos juegos y hacer nuevas <b>amistades</b>.</p>
            </div>
            <div className='m-4 flex flex-col justify-center'>
              <p className='text-[0.75rem] self-center'>Desarollado por:</p>
              <img className='w-[114px] h-[26px] self-center' src={'/assets/KoiPuniLogo.png'} alt="KoiPuniCode Logo" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;