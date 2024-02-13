import React, { useState, useEffect } from "react";
import AllStarships from "../services/sw-api";

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
      {starships.map(starship => (
        <div key={starship.name}>
          {starship.name}
        </div>
      ))}
    </div>
  );
}

export default StarShipCard;