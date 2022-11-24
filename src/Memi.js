import Images from "./Images";
import { useEffect, useState } from "react";

export default function Memi(){
    const [dati , setDati] = useState([])

    useEffect(()=>{fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((json) => setDati(json.data.memes))}, [])
    

    return (
        <div>
        {dati.map((elemento)=>(<li className='list' key={elemento.id}><Images className='images' url={elemento.url} alt={elemento.name}/></li>))}
        </div>
    )
}