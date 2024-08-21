/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import avengersWallpaper from '../assets/avengers.jpg'

export default function CardMovie({movieName, movieData, moviePoster, movieAlt}){
  return (
    <div className="h-44 w-36 rounded-xl hover:h-56 hover:w-52 transition-all">
      <Link to={`/movie/{id}`}>
        <img src={moviePoster == undefined  ?  moviePoster : avengersWallpaper} alt={movieAlt}
        className='object-cover scale-100 h-full w-full rounded-xl'/>
        <p className='font-bold text-black pt-5'>{movieName}</p>
        {
          movieData.length < 15 ?
          <p className='font-bold text-black'>{movieData}</p> :
          <p className='font-bold text-black'>{movieData.slice(0,15)}...</p>
        }
      </Link>
    </div>
  )
}
{/* <img loading="lazy" class="poster w-full" src="https://media.themoviedb.org/t/p/w220_and_h330_face/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg" srcset="https://media.themoviedb.org/t/p/w220_and_h330_face/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg 2x" alt="Twisters"></img> */}