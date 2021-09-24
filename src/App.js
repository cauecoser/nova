import './App.css'
import './reset.css'
import Barra from './pastabarra/barra.js'
import Botao from './pastabotao/botao.js'
import Entrada from './pastaentrada/entrada'


function App() {
  return (<>
  <Barra titulo='CALCULADORA'/>
  <div className='areacalculo'>
    <div className='entradas'>
      <Entrada id='input1'/>
      <Entrada id='input2'/>
    </div>
    <div className="botoes">
        <Botao nome='SOM' quandoclicar={soma}/>
        <Botao nome='SUB' quandoclicar={subt}/>
        <Botao nome='MULT' quandoclicar={mult}/>
        <Botao nome='DIVI' quandoclicar={divi}/>
    </div>
    <div className='res'>

    </div>
  </div>
  </>)
}

function soma() {
  let so = Number(document.querySelector('#input1').value) + Number(document.querySelector('#input2').value)
  let res = document.querySelector('.res')
  res.innerHTML = so 
}

function subt() {
  let su = Number(document.querySelector('#input1').value) - Number(document.querySelector('#input2').value)
  let res = document.querySelector('.res')
  res.innerHTML = su
}

function mult() {
  let mu = Number(document.querySelector('#input1').value) * Number(document.querySelector('#input2').value)
  let res = document.querySelector('.res')
  res.innerHTML = mu 
}

function divi() {
  let di = Number(document.querySelector('#input1').value) / Number(document.querySelector('#input2').value)
  let res = document.querySelector('.res')
  res.innerHTML = di 
}

export default App