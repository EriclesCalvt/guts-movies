import Navbar from "../navbar";
import Logo from '../../assets/logo.png'
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
export default function Header(){
  return (
    <div className="h-16 bg-primaryColor flex items-center justify-between">
      <img src={Logo} alt="Logo image" className="h-20 pl-8"/>
      <Navbar />
      <ul className="flex gap-10 pr-8">
        <Link to={"/login"} target="_blank">Iniciar Sessão</Link>
        <li className="text-secondaryColor font-bold">
          <Search />
        </li>
      </ul>
    </div>
  )
}