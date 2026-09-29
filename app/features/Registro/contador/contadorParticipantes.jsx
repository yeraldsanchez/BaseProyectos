import {CAPACIDAD_MAXIMA} from "../constants/registro.constants.js";
import {CONTADOR_TEXT} from "../constants/contador.constants.js";
export default function ContadorParticipantes({count}) {

    const Restantes = CAPACIDAD_MAXIMA - count;
    return (
        <>
            <h2>{CONTADOR_TEXT.TOTAL_TEXT} {count}</h2>
            <h2>{CONTADOR_TEXT.RESTANTES_TEXT}{Restantes}</h2>
        </>
    )
}