function MovieDisplay({movie}){
    return(
        <>
        <h1>{movie?.Title}</h1>
        <h2>{movie?.TGenre}</h2>
        <img src={movie?.Poster} alt={movie?.title}/>
        <h2>{movie?.Year}</h2>
</>
    )
}
export default MovieDisplay;