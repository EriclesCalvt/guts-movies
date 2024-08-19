import CardMovie from '../components/cardmovie'
import skyrimWallpaper from '../assets/skyrim.jpg'
export default function Home(){
  return (
    <div>
      <span className='absolute z-10 pt-40 pl-8'>
        <p className='font-bold text-[3.0rem]'>Bem-vindo(a).</p>
        <p className='font-bold text-3xl'>Milhões de filmes, series e</p>
        <p className='font-bold text-3xl'>pessoas para descobrir. Explore ja</p>
        <form className='h-12 w-[1200px] mt-5 bg-white flex justify-between items-center rounded-3xl pl-3'>
          <input 
          type="text" 
          placeholder='Pesquise por um filme, uma serie televisiva, uma pessoa...' 
          className='w-full outline-none text-black'
          />
          <button 
          type='submit' 
          className='text-white font-bold h-full w-32 flex items-center justify-center bg-primaryColor 
          rounded-2xl pr-1 hover:bg-secondaryColor transition-all'
          >
            Buscar
          </button>
        </form>
      </span>
      <div className='h-screen w-full z-20 pl-8 absolute bg-white mt-96 flex flex-col'>
        <p className='text-black pb-10 font-bold text-2xl'>Tendencias</p>
        <div className='flex justify-center gap-5 pr-10 overflow-auto w-full pb-5 h-full'>
          {new Array(10).fill().map((_, index) => (
            <li key={index}>
              <CardMovie movieName={"Avengers"} movieData={"18 de Agosto de 2024"}/>
            </li>
          ))}
        </div>
      </div>
      <img src={skyrimWallpaper} alt="avengersWallpaper" className='saturate-[.2] z-0 '/>
    </div>
  )
}