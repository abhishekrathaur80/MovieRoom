import React,{useEffect,useState} from 'react'
import SearchIcon  from './search.svg'
import './App.css';
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7ed15960';


const App = () => {
const [searchTerm ,setSearchTerm] = useState('');
const [movies,setMovies] = useState([]);

useEffect(()=>{
//searchMovies('Batman')

} , [searchTerm])

const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
}
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchTerm);
        }
    };


  return (
    <div className='app'>
    <h1>MovieLand</h1>

    <div className='search'>
        <input  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value) } placeholder='Search for movies'  onKeyDown={handleKeyPress}/>
        <img
       src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        
        />
    </div>
{movies?.length >0? (
    <div className='container'>{
    movies.map((movie)=>(
        <MovieCard movie={movie}/>
    ))}</div>
):(

    <div className='empty'>

        <h2>No movies found</h2>
    </div>
)}
     
    </div>
  )
}

export default App
