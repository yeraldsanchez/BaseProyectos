import { useState } from "react"
import { CONTADOR_TEXT } from "./constants/contador.constants"
import { CONTADOR_LIMITS } from "./constants/contador.constants"
import { CONTADOR_STEPS } from "./constants/contador.constants"
    

export function LayoutContador() {
  const [count, setCount] = useState(0)


  function handleIncrement() {
    setCount(prev => prev + CONTADOR_STEPS.INCREMENT)
  }

  function handleDecrement() {
    setCount(actual => actual - CONTADOR_STEPS.DECREMENT)
  }

  return (
    <>
      <h2>{CONTADOR_TEXT.TITLE}</h2>
      <p>{count}</p>
      <button onClick={count < CONTADOR_LIMITS.MAX && handleIncrement}>{CONTADOR_TEXT.INCREMENT}</button>
      <button onClick={count > CONTADOR_LIMITS.MIN ? handleDecrement : null}>{CONTADOR_TEXT.DECREMENT}</button>
    </>
  )
}

