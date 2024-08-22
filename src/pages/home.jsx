import CardMovie from '../components/cardmovie'
import skyrimWallpaper from '../assets/skyrim.jpg'
import { useContext, useState } from 'react'
import { MoviesContext } from '../context/MoviesContext'

export default function Home(){

  const { dataMovies } = useContext(MoviesContext)
  const { results } = dataMovies  

  const [today, setToday] = useState(true)
  
  const handleToggleFilterMovies = () => {
    setToday((prevState) => !prevState)    
  }  

  return (
    <div>
      <span className='absolute z-10 pt-40 pl-8'>
        <p className='font-bold text-[3.0rem]'>Bem-vindo(a).</p>
        <p className='font-bold text-3xl'>Milhões de filmes, series e</p>
        <p className='font-bold text-3xl'>pessoas para descobrir. Explore ja!</p>
        <form className='h-12 w-[1200px] mt-5 bg-white flex justify-between items-center rounded-3xl pl-3'>
          <input 
          type="text" 
          placeholder='Pesquise por um filme, uma serie televisiva, uma pessoa...' 
          className='w-full outline-none text-black'
          />
          <button 
          type='submit' 
          className='text-white font-bold h-full w-32 flex items-center justify-center bg-gradient-to-r from-[#312e81] to-[#0BB99A] 
          rounded-2xl pr-1 hover:bg-secondaryColor transition-all'
          >
            Buscar
          </button>
        </form>
      </span>
      <div className='h-screen w-full z-20 pl-8 absolute bg-white mt-96 flex flex-col'>
        <div className='flex gap-5 items-center mt-10 mb-10 '>
          <p className='text-black font-bold text-3xl pl-8'>Tendências</p>
          <div className='text-black text-lg font-bold flex justify-between gap-5 items-center border border-primaryColor w-72 rounded-3xl'>
            <p onClick={!today ? handleToggleFilterMovies : <></>}
            className={` ${today ? 'bg-primaryColor transition-all' : 'bg-white transition-all'} 
            flex justify-center text-[#0BB99A] p-1 pl-1 rounded-3xl w-24`}>Hoje</p>
            <p onClick={today ? handleToggleFilterMovies : <></>}
            className={` ${today ? 'bg-white transition-all' : 'bg-primaryColor transition-all'} 
            flex justify-center text-[#0BB99A] p-1 pr-1 rounded-3xl w-44`}>Esta semana</p>
          </div>
        </div>
        <div className='flex justify-center gap-5 pr-10 overflow-auto w-full pb-5 h-72 hover:h-80'>
          {results?.slice(0,11).map((movie) => (
            <li key={movie.id}>
              <CardMovie moviePoster={movie.poster_path} movieName={movie.title} movieData={movie.release_date} movieAlt={movie.title} />
            </li>
          ))}
        </div>
      </div>
      <img src={skyrimWallpaper} alt="Wallpaper" className='saturate-[.2] z-0 w-full '/>
    </div>
  )
}