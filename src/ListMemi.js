import { useState, useEffect } from "react"
import Images from "./Images"

export default function ListMemi(props){

    const [dati , setDati] = useState([])

    useEffect(()=>{fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((json) => setDati(json.data.memes))}, [])

    const filteredDati = dati.filter((elemento) => {
        if (props.input === '') {
            return elemento;
        } else {
            return elemento.name.toLowerCase().includes(props.input)
            }
        })


    return(
        <ul>
            {/* dati.map((elemento)=>(<li className='list' key={elemento.id}><Images url={elemento.url} alt={elemento.name}/></li>)) */}
            {filteredDati.map((elemento) =>
                <li className='list' key={elemento.id}>{elemento.name}<Images url={elemento.url} alt={elemento.name}/></li>
            )}
        </ul>
    
    )
}