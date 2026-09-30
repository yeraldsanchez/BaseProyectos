import useContador from "../hooks/useContador";
import {PERSONAS_FORM_TEXT} from "../constants/personas.contants.js";

export function Personas({setCount}) {
    const {handleIncrement} = useContador(setCount);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleIncrement();
    };

    return (
        <>
            <h2>Personas</h2>
            <form onSubmit={handleSubmit}>
                <input type={"text"} placeholder={PERSONAS_FORM_TEXT.NAME_PLACEHOLDER}/>
                <input type={"number"} placeholder={PERSONAS_FORM_TEXT.AGE_PLACEHOLDER} />
                <input type={"submit"} value={PERSONAS_FORM_TEXT.SAVE_PLACEHOLDER}/>
            </form>
        </>
    );
}