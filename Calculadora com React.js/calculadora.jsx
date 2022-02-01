import React, { useState } from 'react'
import "./calculadora.css"
import Container from '@mui/material/Container'
import {Box} from "@mui/system"

export default function Calculadora()
{
    const[num, setNum] = useState(0);
    const[numAntigo, setnumAntigo] = useState(0);
    const[operador, setOperador] = useState(0);

    function inputNum(valor)
    {
        var input =  valor.target.value;
        if (num === 0)
        {
            setNum(input)
        }
        else{
            setNum(num + input);
        }
        
    }
    function limpar(valor)
    {
        setNum(0);
    }

    function porcetagem(valor)
    {
        setNum(num/100);
    }

    function mudarSinal()
    {
        if (num>0)
        {
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }
    function operadores(valor)
    {
        var operadorInput= valor.target.value;
        setOperador(operadorInput);
        setnumAntigo(num);
        setNum(0);
    }

    function calcular ()
    {
        if(operador === "/")
        {
            setNum(parseFloat(numAntigo)  / parseFloat(num)); 
        }

        if(operador === "X")
        {
            setNum(parseFloat(numAntigo)  * parseFloat(num)); 
        }

        if(operador === "-")
        {
            setNum(parseFloat(numAntigo)  - parseFloat(num)); 
        }

        if(operador === "+")
        {
            setNum(parseFloat(numAntigo)  + parseFloat(num)); 
        }
    }
    return(
        <div>
           <Box m={10}/>
       
                <Container maxWidth="xs">
                    <div className='wrapper'>
                    <Box m={12}/>
                    <h1 class="resultado">{num}</h1>
                    <button className="cinzaClaro" onClick={limpar}>AC</button>
                    <button className="cinzaClaro" onClick={mudarSinal}>+/-</button>
                    <button className="cinzaClaro" onClick={porcetagem}>%</button>
                    <button className="laranja" onClick={operadores} value={"/"}>/</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={7}>7</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={8}>8</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={9}>9</button>
                    <button className="laranja" onClick={operadores} value={"X"}>X</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={4}>4</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={5}>5</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={6}>6</button>
                    <button className="laranja" onClick={operadores} value={"-"}>-</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={1}>1</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={2}>2</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={3}>3</button>
                    <button className="laranja" onClick={operadores} value={"+"}>+</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={0}>0</button>
                    <button className="cinzaEscuro" onClick={inputNum} value={"."}>.</button>
                    <button className="cinzaEscuro" style={{visibility: "hidden"}}>,</button>
                    <button className="laranja" onClick={calcular}>=</button>
                </div>
             </Container>
           </div>
    );
}