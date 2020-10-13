import React from 'react'

function Tile({result}) {
    return (
        <div>
        {result.Poster && <img src={result.Poster} alt="poster" />}
            {result.Title &&<span> <h3>Title: </h3>{result.Title} - {result.Actors}</span>}
            {result.Title &&<span><h3>Director: </h3>{result.Director} </span>}
            {result.Title &&<span><h3>Genre: </h3>{result.Genre} - ({result.Year})</span>}

            {result.Title &&<span><h3>Plot: </h3>{result.Plot} </span>}
            
            {result.Title &&<span><h3>IMDB Rating: </h3>{result.imdbRating} </span>}
            
            
        </div>
    )
}

export default Tile
