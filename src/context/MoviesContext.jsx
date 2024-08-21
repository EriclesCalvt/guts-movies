import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const MoviesContext = createContext();


// eslint-disable-next-line react/prop-types
export const MoviesProvider = ({children}) => {

  const [dataMovies, setDataMovies] = useState({})

  useEffect(() => {
    const configApi = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        //Analisar depois uma forma de colocar o .env de forma que nao fique cortando a connection com a API
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2UxODZkM2U2MzM5OWI1ZmNhMjk0ZjMzYmZmMjdhNCIsIm5iZiI6MTcyNDE4ODEzOC42MDUzNDMsInN1YiI6IjY2YzUwNGFkMTMyN2IxY2I4YzM5NWM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruy4RZuGBBd20bc2YaUlqeruR7ve63DpDaXseg-2qOo'
      }
    };
    axios.get(import.meta.env.VITE_REACT_APP_API_URL, configApi)
    .then((response) => setDataMovies(response.data))
    .catch((err) => console.error(err, "Error occurred in called to api"))
  }, [])

  return(
    <MoviesContext.Provider value={{dataMovies, setDataMovies}}>
      {children}
    </MoviesContext.Provider>
  )
}