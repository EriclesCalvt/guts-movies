import Navbar from "../navbar";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import LogoCurta from '../../assets/Logo curta.svg'

export default function Header(){
  return (
    <div className="h-16 bg-primaryColor flex items-center justify-between">
      <div className="flex items-center gap-10">
        <Link to={"/"}>
          <img src={LogoCurta} alt="Logo image" className="pl-8 h-8"/>
        </Link>
        <Navbar />
      </div>
      <ul className="flex gap-10 pr-8">
        <Link to={"/login"} target="_blank">Iniciar Sessão</Link>
        <li className="text-[#0BB99A] font-bold">
          <Search />
        </li>
      </ul>
    </div>
  )
}