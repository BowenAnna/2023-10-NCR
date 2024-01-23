import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header.js';
import Home from './components/Home';
import About from './components/About';
import Stock from './components/Stock';
import stockData from './stock-data';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stocks/:symbol" element={<Stock stockData={stockData}/>}/>
        <Route path="/stocks" element={<Dashboard stockData={stockData}/>}/>
        {/* <Route
            path="/stocks/:symbol"
            render={props => <Stock stockData={stockData} {...props} />}
          />
          <Route
            path="/stocks"
            render={props => <Dashboard {...props} stockData={stockData} />} */}
        {/* <Route path="/stocks/:symbol" element={<Stock/>}/>
        <Route path="/stocks" element={<Dashboard/>}/>  */}
      </Routes>
    </div>
  );
}

export default App;