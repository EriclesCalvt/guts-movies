import ElencActor from '../assets/elenco.webp'
export default function CardElenc(){
  return (
    <div className="h-56 w-44 rounded-xl mt-10 mb-32 text-black border shadow drop-shadow-2xl">
      <img src={ElencActor} alt="photo elenc" className='object-cover rounded-t-xl'/>
      <div className='flex flex-col items-center border shadow drop-shadow-2xl pt-2 pb-5'>
        <p>Lewis Black</p>
        <p>Anger (voice)</p>
      </div>
    </div>
  )
}