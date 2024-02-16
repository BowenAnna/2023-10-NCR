function AllStarships(){
  return(
      fetch("https://swapi.dev/api/starships/")
      .then(response=>response.json())
      .then(data=>data.results)
     
      // .then(data=>{
      //     console.log(data.results)
      //     const dataObj=data.results;
      // })
  )
}

export default AllStarships;


// function AllStarships(){
//     return(
//         fetch(`https://swapi.dev/api/starships/?page=2`)
//         .then(response=>response.json())
//         .then(data=>data.results)
       
//         // .then(data=>{
//         //     console.log(data.results)
//         //     const dataObj=data.results;
//         // })
//     )
// }

// export default AllStarships;

//  async function AllStarships(url = 'https://swapi.dev/api/starships/') {
//     return fetch(url)
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         return data;
//       })
//       .catch(error=>console.log("Error fetching starship data", error));
//   }
//   export default AllStarships;
