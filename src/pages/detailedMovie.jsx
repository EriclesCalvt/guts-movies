import { useParams } from 'react-router-dom'
import JokerPoster from '../assets/joker.jpg'
import { BookMarked, Heart, LinkIcon, ListIcon, PlayIcon } from 'lucide-react';
import CardElenc from '../components/cardElenc'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'
import CardMovie from '../components/cardmovie'

//foto fundo, gradiente com opacidade por
export default function DetailedMovie(){

  const { dataMovies } = useContext(MoviesContext)
  const { results } = dataMovies  

  const { id } = useParams()
  console.log(id);
  
  return(
    <div className="text-white">
      <nav className="flex flex-col text-black">
        <ul className="flex justify-center items-center gap-10 mt-2 pb-2 border-b">
          <li>Visão geral</li>
          <li>Multimedia</li>
          <li>Fandom</li>
          <li>Partilhar</li>
        </ul>
      </nav>
      <div className="flex gap-20 pl-10 h-full p-10 bg-[url('/home/ericle/Documents/Programing/guts-movies/src/assets/joker-wallpaper.jpg')] bg-cover">
        <div className='flex items-center h-[450px] w-[300px] mb-10'>
          <img src={JokerPoster} alt="Poster_movie" className='h-full object-cover rounded-2xl'/>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-2">
            <h2 className='font-bold text-[2.4rem]'>THE JOKER</h2>
            <p className='text-[2.4rem]'>(2024)</p>
          </div>
          <div className="flex gap-2 items-center">
            <p>14/08/2024</p>
            <p className='font-bold text-xl'>-</p>
            <p> Animação, Família, Aventura, Comédia </p>
            <p className='font-bold text-xl'>-</p>
            <p>1h 40m</p>
          </div>
          <div className='flex flex-col h-full justify-around'>
          <div className='flex gap-5'>
            <button className='flex items-center h-10 w-10 p-3 text-xl rounded-full bg-primaryColor'><ListIcon /></button>
            <button className='flex items-center h-10 w-10 p-3 text-xl rounded-full bg-primaryColor'><Heart /></button>
            <button className='flex items-center h-10 w-10 p-3 text-xl rounded-full bg-primaryColor'><BookMarked /> </button>
            <button className='flex gap-1 items-center pl-1 pr-1 text-sm rounded-full bg-primaryColor'>
              <PlayIcon className='h-5'/>
              Ver trailer
            </button>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='font-extrabold text-xl'>SINOPSE:</h2>
            <span>
            <p>
              Divertida Mente 2, da Disney e da Pixar, retorna à mente da adolescente Riley, e o faz no momento em que a sala de comando   
            </p>
            <p>
              está passando por uma demolição repentina para dar lugar a algo totalmente inesperado: 
            </p>
            <p>
              novas emoções! Alegria, Tristeza, Raiva, Medo e Nojinho não sabem bem como reagir quando Ansiedade aparece, e tudo indica que ela não está sozinha.
            </p>
            </span>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <h1>Kelsey Mann</h1>
                <p>Director, Story</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h1>Meg LeFauve</h1>
                <p>Screenplay, Story</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h1>Dave Holstein</h1>
                <p>Screenplay</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='pl-8 flex justify-between'>
        <div className='flex flex-col overflow-x-auto'>
          <h2 className='text-black font-medium text-xl mt-10'>Elenco principal:</h2>
          <div className='flex gap-2 overflow-x-auto z-0'>
            {new Array(10).fill().map((_,index) => (
              <li key={index}>
              <CardElenc />
              </li>
            ))}
          </div>
        </div>
        <div className='flex text-black'>
          <div className='h-full w-96 blur mt-20 bg-white absolute z-10 right-8'></div>
          <div className='flex flex-col gap-5 pl-4 h-full w-72 z-30 pt-16 mr-16'>
            <p><LinkIcon /></p>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold'>Titulo original</h1>
              <p>Inside Out 2</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold'>Estado</h1>
              <p>Lançado</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold'>Idioma original</h1>
              <p>Inglês</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold'>Orçamento</h1>
              <p>$200,000,000.00</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold'>Bilheteira</h1>
              <p>$1,625,983,694.00</p>
            </div>
          </div>
        </div>
      </div>
        <div className='text-black pl-8 w-full flex flex-col gap-5 mt-10 font-bold text-xl'>
          <Link>
            <p className='text-black hover:text-secondaryColor hover:border-b-2 w-max'>Todo o Elenco & Equipe Técnica</p>
          </Link>
          <hr />
        </div>
        <div className='text-black pl-8 w-full flex flex-col gap-5 mt-10 font-bold text-xl'>
          <p className='text-black'>Recomendações</p>
          <div className='flex justify-start gap-5 pr-10 overflow-auto w-full pb-5 h-72 hover:h-80'>
          {results?.slice(0,10).map((movie) => (
            <p key={movie.id}>
              <CardMovie moviePoster={movie.poster_path} movieName={movie.title} movieData={movie.release_date} movieAlt={movie.title} />
            </p>
          ))}
        </div>
        </div>
    </div>
  )
}