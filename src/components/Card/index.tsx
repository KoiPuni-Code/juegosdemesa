const Card = ({name, date, cover}: {name: string, date: string, cover: string}) => {
  return (
    <div className='mb-4 w-[800px] h-[156px] bg-white mr-8 rounded-[6px] flex items-center'>
      <img src={cover} alt="Foto del lugar" className='w-[156px] h-[126px] ml-4' />
      <div className='flex-col flex'>
        <div className='flex items-end'>
          <h1 className='ml-2 mb-2 font-[grandstander] text-[2.25rem] font-semibold tracking-[-2px] leading-[85%]'>{name}</h1>
          <span className='text-[10px] mb-4 ml-2 text-gray-600'>Publicado el {date}</span>
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
  )
}

export default Card