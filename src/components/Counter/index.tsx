import { useState } from 'react'
import './style.css'

type Counterprops = {
  count: number
  setCount: (count: number) => void,
}


export default function Counter ({ count, setCount }: Counterprops) {
  const onIncrease = () => {
    setCount(count + 1)
  }

  const onDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className="countLabel">{count}</div>
      <button className="countBtn" onClick={onIncrease}>+</button>
      <button className="countBtn" onClick={onDecrease}>-</button>
    </>
  )
}
