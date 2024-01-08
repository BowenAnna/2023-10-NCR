import { Link } from "react-router-dom";
import React from "react";

export default function Dashboard(props) {
    let stockData = props.stockData.map((d, i) => {
      return <Link key={i} to={`/stocks/${d.symbol}`}>
          <li >{d.name}</li>
        </Link>
    });
    return <ul>{stockData}</ul>;
  }
