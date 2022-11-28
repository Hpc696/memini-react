import Images from "./Images";
import { useEffect, useState } from "react";


export default function Memi(props){
    const [dati , setDati] = useState([])

    useEffect(()=>{fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((json) => setDati(json.data.memes))}, [])
   

    const filteredDati = dati.filter((elemento) => {
        if (props.input === '') {
            return elemento;
        } else {
            return elemento.name.includes(props.input)
        }
    })

    return (
        <div>
        {/*dati.map((elemento)=>(<li className='list' key={elemento.id}><Images url={elemento.url} alt={elemento.name}/></li>))*/}
        {filteredDati.map((elemento) => (<li className='list' key={elemento.id}><Images url={elemento.url} alt={elemento.name}/></li>))}
        </div>
    )
}