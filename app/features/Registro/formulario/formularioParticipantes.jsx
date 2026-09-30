import useRegistro from "../hooks/useRegistro.js";
import {useState} from "react";
import {CAPACIDAD_MAXIMA} from "../constants/registro.constants.js";
import {FORMULARIO_TEXT} from "../constants/formulario.constants.js";

export default function FormularioParticipantes({count, setCount, personas, setPersonas}){

    const {handleSubmit} = useRegistro(setCount, personas, setPersonas);

    const [nombre, setNombre] = useState("");
    const [error, setError] = useState("");

    const handleSend = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            setError(FORMULARIO_TEXT.ERROR_TEXT);
            return;
        }

        setError("");
        e.currentTarget.reset();
        handleSubmit(nombre);
        setNombre("");
    }
    return (
        <>
            <h2>Formulario de registro</h2>
            <form onSubmit={count < CAPACIDAD_MAXIMA ? handleSend: null}>
                <input type="text" placeholder={FORMULARIO_TEXT.NAME_PLACEHOLDER} onChange={(e)=>setNombre(e.target.value)}/>
                <input type="submit" value={FORMULARIO_TEXT.SUBMIT_PLACEHOLDER} disabled={count >= CAPACIDAD_MAXIMA}/>
                {error && <p style={{color: FORMULARIO_TEXT.ERROR_COLOR}}>{error}</p>}
            </form>
        </>
    )
}