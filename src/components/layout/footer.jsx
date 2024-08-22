import { Link } from 'react-router-dom'
import LogoTGM from '../../assets/Logo.svg'
export default function Footer(){
  return (
    <div className="bg-primaryColor flex items-center justify-center pt-24 pb-24 z-50 h-min">
      <div className='flex'>
        <div className="flex flex-col gap-10 items-center pt-5 pl-8">
          <img src={LogoTGM} alt="Logo TGM" />
          <button className='w-max p-3 rounded-md text-primaryColor bg-white text-xl font-bold'>
            Olá, Ericles-Duarte!
          </button>
        </div>
        <div className="flex gap-20 h-full w-full pt-5 pl-8">
          <ul>
            <li className='font-extrabold text-xl'>OS BÁSICOS</li>
            <Link>
              <li>Sobre nos</li>
            </Link>
            <Link>
              <li>Contact-nos</li>
            </Link>
            <Link>
              <li>Foruns de Suporte</li>
            </Link>
            <Link>
              <li>API</li>
            </Link>
            <Link>
              <li>System Status</li>
            </Link>
          </ul>
          <ul>
            <li className='font-extrabold text-xl'>ENVOLVA-SE</li>
            <Link>
              <li>Sobre nos</li>
            </Link>
            <Link>
              <li>Contact-nos</li>
            </Link>
            <Link>
              <li>Foruns de Suporte</li>
            </Link>
            <Link>
              <li>API</li>
            </Link>
            <Link>
              <li>System Status</li>
            </Link>
          </ul>
          <ul>
            <li className='font-extrabold text-xl'>COMUNIDADE</li>
            <Link>
            <li>Sobre nos</li>
            </Link>
            <Link>
            <li>Contact-nos</li>
            </Link>
            <Link>
            <li>Foruns de Suporte</li>
            </Link>
            <Link>
            <li>API</li>
            </Link>
            <Link>
            <li>System Status</li>
            </Link>
          </ul>
          <ul>
            <li className='font-extrabold text-xl'>LEGAL</li>
            <Link>
              <li>Sobre nos</li>
            </Link>
            <Link>
              <li>Contact-nos</li>
            </Link>
            <Link>
              <li>Foruns de Suporte</li>
            </Link>
            <Link>
              <li>API</li>
            </Link>
            <Link>
              <li>System Status</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}