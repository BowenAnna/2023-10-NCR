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
      <ul className="display">
       
          {starships.map((starship, index) => {
                 const { name } = starship;
                 return (
                   <li className="starship">
                   <Link className="ship-display" key={index} to={`/starship/${name}`}>
                     <p className="ship-display">{name}</p>
                   </Link>
                   </li>
                 );
               })}
             </ul>

      {/* <ul className="display1">
      {starships.map((starship)=> {
        const{name}=starship;
             return(         
            <Link to={`/starship/${name}`}>
              <h1>{name}</h1>
            </Link>
          )
      })}
      </ul> */}
    </div>
    );
}

export default StarShipCard;

// import React, { useState, useEffect } from "react";
// import AllStarships from "../services/sw-api";
// import { Link, useParams } from "react-router-dom";

// function StarShipCard() {
//   const [starships, setStarships] = useState([]);
//   const [nextPage, setNextPage]=useState(null);
//   const [previousPage, setPreviousPage]=useState(null);
//   const {url}=useParams();

//   const fetchData = async (url) => {
//         try {
//           const starshipsData = await AllStarships(url);
//           console.log(starshipsData);
//           setStarships(starshipsData.results);
//           console.log(starshipsData.results);
//           setNextPage(starshipsData.next);
//           setPreviousPage(starshipsData.previous);
//         } catch (error) {
//           console.error("Error fetching starships:", error);
//         }
//       };
  
//   useEffect(()=>{fetchData()
//   },[])

//   const paginatation=(url)=>{if(url) fetchData(url)}
  
//   return (
//     <div className="starshipcard">
//       <h1>Star Wars StarShips</h1>
//       <ul className="display">
       
//       {starships.map((starship, index) => {
//           const { name } = starship;
//           return (
//             <li className="starship">
//             <Link className="ship-display" key={index} to={`/starship/${name}`}>
//               <p className="ship-display">{name}</p>
//             </Link>
//             </li>
//           );
//         })}
//       </ul>
//      <button onClick={()=>paginatation(previousPage)}>Previous</button>
//      <button onClick={()=>paginatation(nextPage)}>Next</button>
//     </div>
//     );
// }

// export default StarShipCard;