import {LISTA_TEXT} from "../constants/lista.constants.js";

export default function ListaPersonas({personas}) {
    return (
        <>
            <h2>{LISTA_TEXT.TITULO}</h2>
            <ul>
                {personas.map((persona, index)=>(
                    <li key={index}>{persona}</li>
                ))}
            </ul>
        </>
    )
}