import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react';


function App() {

  const apiKey= "470d086";

  const[movie, setMovie]=useState({});

  const getMovie = async (searchTerm) => {
    try{
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    console.log(response);
    const data = await response.json();
    console.log(data);
    setMovie(data);
}
    catch(error){console.error(error)}
}

      useEffect(()=>{
        const movies=["Donnie Darco", "Princess Mononoke", "I, robot", "Eternal Sunshine of the Spotless Mind", "The Knight Before Christmas", "Home Alone"]
        getMovie(movies[Math.floor(Math.random()*movies.length)])
      },[])

  return (
    <div className="App">
        <Form moviesearch={getMovie}/>
        <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
