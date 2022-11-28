export default function Search(props){
    return(<>
    <label>Cerca memino: </label>
    <input type='text' onChange={props.input}/>
    </>)
}