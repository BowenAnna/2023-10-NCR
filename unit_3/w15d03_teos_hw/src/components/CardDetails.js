import AllStarships from "../services/sw-api";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function CardDetails(){
    const { name } = useParams();
    const [starship, setStarship] = useState({});
  
    useEffect(() => {
      const fetchStarshipDetails = async () => {
        try {
          const starshipData = await AllStarships();
          const foundStarship = starshipData.find(starship => starship.name === name);
          setStarship(foundStarship);
        } catch (error) {
          console.error("Error fetching starship details:", error);
        }
      };
      fetchStarshipDetails();
    }, [name]);

//   if (!starship) {
//     return <div>Loading...</div>;
//   }

    console.log(starship);
    const{model, manufacturer, cost_in_credits, cargo_capacity, length, crew, passengers}=starship;

    return (
      <div>
        {starship ? (
          <div>
            <h1>{name}</h1>
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Length: {length}</p>
            <p>Price: {cost_in_credits}</p>
            <p>Capacity: {cargo_capacity}</p>
            <p>Crew: {crew}</p>
            <p>Passengers: {passengers}</p>
          </div>
           ) : (
          <p>Loading...</p>
        )}     
      </div>
    )
        }
export default CardDetails;




// import AllStarships from "../services/sw-api";
// import { useState, useEffect} from "react";
// import { useParams } from "react-router-dom";

// function CardDetails() {
//   const { name } = useParams();
//   const [starship, setStarship] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const starshipsData = await AllStarships();
//         const selectedStarship = starshipsData.results[0]//find(
//         //   (starship) => starship.name === name
//         // );
//         setStarship(selectedStarship);
//         console.log(selectedStarship);
//       } catch (error) {
//         console.error("Error fetching starships:", error);
//       }
//     };
//     fetchData();
//   }, [name]);

// //   if (!starship) {
// //     return <div>Loading...</div>;
// //   }

//     const{model, manufacturer, cost_in_credits, cargo_capacity, length, crew, passengers}=starship;

//     return (
//       <div>
//         {starship ? (
//           <div>
//             <h1>{name}</h1>
//             <p>Model: {model}</p>
//             <p>Manufacturer: {manufacturer}</p>
//             <p>Length: {length}</p>
//             <p>Price: {cost_in_credits}</p>
//             <p>Capacity: {cargo_capacity}</p>
//             <p>Crew: {crew}</p>
//             <p>Passengers: {passengers}</p>
//           </div>
//            ) : (
//           <p>Loading...</p>
//         )}     
//       </div>
//     )
//         }
// export default CardDetails;

