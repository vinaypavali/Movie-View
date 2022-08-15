import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';

 const api='http://www.omdbapi.com/?i=tt3896198&apikey=bd45516e';
function App() {

  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${api}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
    
  };

  useEffect(()=>{
    searchMovies('Batman')
  },[])

  return (
    <div className="App">

     <h1>Movie View </h1>

     <div className="search">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for movies"/>
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
}

export default App;
