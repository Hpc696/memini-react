import Memi from './Memi'
import Search from './Search'
import {useState} from 'react'

function App() {

  const [input, setInput] = useState("") //e poi funz x trasformare in lowercase
    
  let inputChanger = (elemento) =>{
      let lowercase = elemento.target.value.toLowerCase()
      setInput(lowercase)
  }

  return (<>
      <Search input={input} />
      <Memi onChange={inputChanger}/>
    </>
  );
}

export default App;
