import ListMemi from './ListMemi'
import Search from './Search'
import {useState} from 'react'

function App() {

  const [input, setInput] = useState("") //e poi funz x trasformare in lowercase
    
  let inputChanger = (elemento) =>{
      let lowercase = elemento.target.value.toLowerCase()
      setInput(lowercase)
  }

  return (<>
      <Search input={inputChanger}/>
      <ListMemi input={input}/>
    </>
  );
}

export default App;
