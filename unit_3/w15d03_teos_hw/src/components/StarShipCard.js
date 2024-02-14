import React, { useState, useEffect } from "react";
import AllStarships from "../services/sw-api";
import { Link } from "react-router-dom";

function StarShipCard() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const starshipsData = await AllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div>
      <h1>Star Wars StarShips</h1>
      <ul className="display1">
      {starships.map((starship)=> {
        const{name}=starship;
             return(         
            <Link to={`/starship/${name}`}>
              <h1>{name}</h1>
            </Link>
          )
      })}
      </ul>
    </div>
    );
}

export default StarShipCard;