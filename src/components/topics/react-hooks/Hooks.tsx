import React, { useRef, useState } from 'react'

const Hooks = () => {
    const [count, setcount] = useState(0)
    const ref = useRef(0)

    const increment = () => {
        setcount(prev => prev + 1)
    }

    const incrementRef = () => {
        ref.current++
    }
    console.log('ref.current', ref.current)
    return (
        <div>
            <b>Ref {ref.current} doesn't  change on state update</b>
            <h1>Hello display {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={incrementRef}>Increment ref</button>
            <button onClick={() => setcount(prev => prev - 1)}>Decrement</button>
        </div>
    )
}

export default Hooks
