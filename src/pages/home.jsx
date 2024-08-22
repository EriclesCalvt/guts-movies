import CardMovie from '../components/cardmovie'
import skyrimWallpaper from '../assets/skyrim.jpg'
import { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'

export default function Home(){

  const { dataMovies } = useContext(MoviesContext)
  const { results } = dataMovies  
  
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
        <p className='text-black pb-10 pt-5 font-bold text-2xl'>Tendencias</p>
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