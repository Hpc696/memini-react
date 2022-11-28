import { useState, useEffect } from "react"
import Button from './Button'
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
    
    const [ins , setIns] = useState("")

    const handleChange = event => {
        setIns(event.target.value)
    
        console.log('value is:', event.target.value)
      }
    const handleClick = event => {event.preventDefault()
        setIns(event.target.value)
    }
        
    return(
        <ul>
            {/* dati.map((elemento)=>(<li className='list' key={elemento.id}><Images url={elemento.url} alt={elemento.name}/></li>)) */}
            {filteredDati.map((elemento) =>
                <li className='list' key={elemento.id}>{/*elemento.name*/}<h2 className="scritta">{ins}</h2><Images url={elemento.url} alt={elemento.name}/>
                <input type='text' placeholder='fatti il meme' onChange={handleChange} value={ins}/>
                <Button id={elemento.id} action={handleClick}/>
                </li>
            )}
        </ul>
    
    )
}