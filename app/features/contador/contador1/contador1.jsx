import { CONTADOR_TEXT } from "../constants/contador.constants"
import { CONTADOR_LIMITS } from "../constants/contador.constants"
import useContador from "../hooks/useContador"

export function Contador1({count, setCount}) {
    const {handleIncrement, handleDecrement} = useContador(setCount)

    return (
        <>
            <h2>{CONTADOR_TEXT.TITLE}</h2>
            <p>{count}</p>
            <button onClick={count < CONTADOR_LIMITS.MAX && handleIncrement}>{CONTADOR_TEXT.INCREMENT}</button>
            <button onClick={count > CONTADOR_LIMITS.MIN ? handleDecrement : null}>{CONTADOR_TEXT.DECREMENT}</button>
        </>
    )
}
