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
