import './App.css';
import StarShipCard from './components/StarShipCard';
import {Routes, Route} from "react-router-dom"
import CardDetails from "./components/CardDetails"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StarShipCard/>}/>
        <Route path="/starship" element={<StarShipCard/>}/>
        <Route path="/starship/:name" element={<CardDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
