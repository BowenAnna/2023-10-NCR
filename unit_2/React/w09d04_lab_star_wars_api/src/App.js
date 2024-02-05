import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllStarships } from './services/api';
import StarShipCard from './components/StarShipCard';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships().then(data => setStarships(data.results));
  }, []);

  return (
    <div className="App">
    <Nav />
    <div className="ships">
     {starships.map(starship => (
      <StarShipCard key={starship.name} starship={starship} />
     ))}
     </div>
     <Routes>
     
        <Route path="/starships/:starshipname"/>
     </Routes>
    </div>
  );
}

export default App;
