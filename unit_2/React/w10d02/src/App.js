import ConditionalClasses from './pages/ConditionalClasses';
import ConditionalRendering from './pages/ConditionalRendering';
import StyledComponents from "./pages/StyledComponents"
import "./App.css"

function App() {
  return (
    <div className="App">
      hi
      <StyledComponents/>
      <ConditionalRendering number={12}/>
      <ConditionalClasses visible={true}/>
    </div>
  );
}


export default App;
