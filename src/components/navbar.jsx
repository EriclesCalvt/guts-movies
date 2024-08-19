import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <ul className="flex gap-8">
      <Link to={"/"}>
      <li>Filmes</li>
      </Link>
      <Link to={"/"}>
      <li>Series</li>
      </Link>
      <Link to={"/"}>
      <li>Pessoas</li>
      </Link>
      <Link to={"/"}>
      <li>Mais</li>
      </Link>
    </ul>
  )
}