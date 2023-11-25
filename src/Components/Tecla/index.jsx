import "./tecla.css";

export default function Tecla(props){
    return(
        <>
            <button onClick={props.handleFunction} className={props.class} id={props.id} name={props.name}>{props.label}</button>
        </>
    )
}