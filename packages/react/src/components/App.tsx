import React, { useState } from 'react'
import { Core } from '@feedback-otter/core'

type Props = {
  value?: number
}

const core = new Core()
export const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)

  const onMinus = () => {
    setCounter((prev) => prev - 1)
  }

  const onPlus = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>
      <h1>
        {core.name}: {counter}
      </h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  )
}

export default MyCounter
