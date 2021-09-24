import './entrada.css'

function Entrada(props){
    return (<>
        <input className="entrada" vaue={props.value} id={props.id}/>
    </>)
}

export default Entrada