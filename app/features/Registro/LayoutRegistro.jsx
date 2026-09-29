import FormularioParticipantes from "./formulario/formularioParticipantes.jsx";
import {useState} from "react";
import ContadorParticipantes from "./contador/contadorParticipantes.jsx";
import ListaPersonas from "./lista/listaPersonas.jsx";

export function LayoutRegistro() {
    const [count, setCount] = useState(0);
    const [personas, setPersonas] = useState([]);
    return (
        <>
            <FormularioParticipantes  count={count} setCount={setCount} setPersonas={setPersonas} personas={personas}/>
            <ContadorParticipantes count={count}/>
            <ListaPersonas personas={personas}/>
        </>
    )

}