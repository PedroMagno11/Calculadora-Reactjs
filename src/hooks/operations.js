import { useState } from "react";

export default function operations(){
    
    const [result, setResult] = useState("")


    const handleClick = (e)=>{
        setResult(result.concat(e.target.name))
      }
    
      const clear = () =>{
        setResult("");
      }
    
      const backspace = ()=>{
        setResult(result.slice(0, result.length - 1))
      }
    
      const calculate = () =>{
        try{
          setResult(eval(result).toString());
        }
        catch(err){
          setResult("Error")
        }
      }

      return{ result, handleClick, clear, backspace, calculate};
}