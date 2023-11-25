import { useState } from "react";
import "./App.css";
import operations from "./hooks/operations";
import Visor from "./Components/Visor";
import Tecla from "./Components/Tecla";

export default function App(){
  
    const {backspace, calculate,clear,handleClick,result}  = operations();
  

  return(
    <>
    <div className="container">
      <Visor value={result} setValue={calculate}/>
      <div className="keypad">
        <Tecla handleFunction={clear} class="highlight" id="clear" label="Clear"/>
        <Tecla handleFunction={backspace} class="highlight" id="backspace" label="C"/>
        <Tecla handleFunction={handleClick} name="/" label="/"/>

        <Tecla handleFunction={handleClick} name="7" label="7"/>
        <Tecla handleFunction={handleClick} name="8" label="8"/>
        <Tecla handleFunction={handleClick} name="9" label="9"/>

        <Tecla handleFunction={handleClick} name="*" label="x"/>
        <Tecla handleFunction={handleClick} name="4" label="4"/>
        <Tecla handleFunction={handleClick} name="5" label="5"/>
        <Tecla handleFunction={handleClick} name="6" label="6"/>

        <Tecla handleFunction={handleClick} name="-" label="-"/>
        <Tecla handleFunction={handleClick} name="1" label="1"/>
        <Tecla handleFunction={handleClick} name="2" label="2"/>
        <Tecla handleFunction={handleClick} name="3" label="3"/>

        <Tecla handleFunction={handleClick} name="+" label="+"/>
        <Tecla handleFunction={handleClick} name="0" label="0"/>
        <Tecla handleFunction={handleClick} name="." label="."/>
        <Tecla handleFunction={calculate} class="highlight" id="result" label="="/>

      </div>
    </div>
    </>
  )
}