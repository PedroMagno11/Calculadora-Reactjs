import "./visor.css";

export default function Visor(props){
    return(
        <div className="visor">
            <input id="visor" type="text" value={props.value} onChange={props.setValue}/>
        </div>
    )
}