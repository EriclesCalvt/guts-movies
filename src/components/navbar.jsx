import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <ul className="flex gap-8">
      <Link to={"/"}>
      <li className="hover:text-secondaryColor hover:text-xl transition-all">Filmes</li>
      </Link>
      <Link to={"/"}>
      <li className="hover:text-secondaryColor hover:text-xl transition-all">Series</li>
      </Link>
      <Link to={"/"}>
      <li className="hover:text-secondaryColor hover:text-xl transition-all">Pessoas</li>
      </Link>
      <Link to={"/"}>
      <li className="hover:text-secondaryColor hover:text-xl transition-all">Mais</li>
      </Link>
    </ul>
  )
}