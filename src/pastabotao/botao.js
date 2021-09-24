import './botao.css'

function Botao(props) {
    return (<button id='botao' onClick={props.quandoclicar}>
        {props.nome}
    </button>)
}

export default Botao