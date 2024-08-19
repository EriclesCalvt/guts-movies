/* eslint-disable react/prop-types */
import avengersWallpaper from '../assets/avengers.jpg'

export default function CardMovie({movieName, movieData}){
  return (
    <div className="h-56 w-36 rounded-xl hover:h-80 transition-all">
      <img src={avengersWallpaper} alt="wallpaper movie" className='object-cover scale-100 h-full w-full rounded-xl'/>
      <p className='font-bold text-black pt-5'>{movieName}</p>
      {
        movieData.length < 15 ?
        <p className='font-bold text-black'>{movieData}</p> :
        <p className='font-bold text-black'>{movieData.slice(0,15)}...</p>
      }
    </div>
  )
}