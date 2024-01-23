import { Link } from "react-router-dom";
import React from "react";
// import stockData from '../stock-data';

// console.log(stockData);

export default function Dashboard(props) {
    let stockData = props.stockData.map((d, i) => {
      return <Link key={i} to={`/stocks/${d.symbol}`}>
          <li >{d.name}</li>
        </Link>
    });
    return <ul>{stockData}</ul>;
  }
