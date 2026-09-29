import {LISTA_TEXT} from "../constants/lista.constants.js";

export default function ListaPersonas({personas}) {
    return (
        <ul>
            {personas.map((persona, index)=>(
                <li key={index}>{persona}</li>
            ))}
        </ul>
    )
}