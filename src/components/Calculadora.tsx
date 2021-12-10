import React, { useState } from "react";
import './Calculadora.css'
import {useStyles} from './Calculadora.styles'
import Button from '@material-ui/core/Button'




export const Calculadora:React.FC = ()=>{
    const styles = useStyles();
    const [valor1,setValor1]= useState(0)
    const [valor2,setValor2]= useState(0)
    const [resultado,setResultado]= useState(' ')

    const somar = () =>{
        const a = Number(valor1);
        const b = Number(valor2);
        const result = a+b;
        setResultado(String(result))
        return result;
    }
    const mudar = (e: any)=>{
        setValor1(e.target.value)
    }
    const mudar2 = (e: any)=>{
        setValor2(e.target.value)
    }
    return(
        <>
        <input className="Input" type="number" value={valor1} onChange={(e: any)=>mudar(e)}></input>
        <input className="Input" type="number" value={valor2} onChange={(e: any)=>mudar2(e)}></input>
        <br/>
        <Button className={styles.Button} variant="contained" color="primary" onClick={somar}>
          +
        </Button>
        <h1>{resultado}</h1>
        </>
    )
} 

export default Calculadora;