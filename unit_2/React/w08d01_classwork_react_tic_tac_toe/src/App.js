import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
import Square from "./components/Square";
import './App.css';

function App() {
return (
  <div>
      <Header />
      <Player whichPlayer="X"/>
      <Player whichPlayer="O"/>
   </div>
   );
}

export default App;
