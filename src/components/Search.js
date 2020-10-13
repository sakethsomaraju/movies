import React,{useState} from 'react'
import Axios from 'axios'
import Tile from './Tile'
import './search.css'

function Search() {
    const [name,setName] = useState('')
    const [results,setResults]=useState({})

    const search = ()=>{
        const url = `http://www.omdbapi.com/?apikey=43167631&t=${name}`
        var results1 
        Axios.get(url)
            .then(response=>{
                results1=response.data
                
                setResults(results1)
                
            })
            
            .catch(err => console.log(err))
            
    }
    return (
        <div className="container">
        <h2 >Search for a Movie or a TV Series...</h2>
        <input
            className="title"
            placeholder="Enter a  title"
            value={name}
            onChange={(e)=>setName(e.target.value)}
        ></input>
        <button onClick={search}>Search</button>
        
        { <Tile result={results}/>}
    
        
        </div>
    )
}

export default Search
