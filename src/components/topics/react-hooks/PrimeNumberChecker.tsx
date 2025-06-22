import React, { useMemo, useState } from 'react'

const PrimeNumberChecker = () => {
    const [number, setNumber] = useState(0)
    const [otherInput, setOtherInput] = useState('')
    
    // 1. Simulate an expensive prime checker
    function isPrime(n) {
        console.log("Running expensive check..."); // to prove useMemo works
        if (n < 2) return false
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false
        }
        return true
    }
    // 2. Memoize the expensive computation
    const isNumberPrime = useMemo(() => isPrime(number), [number])
    // ⚠️ Without useMemo:
    // Every key press, even in another field, would re - run isPrime() = bad for performance.
    return (
        <div>
            <h2>🧮 Prime Number Checker</h2>

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                placeholder="Enter number"
            /><br />

            <p>{number} is {isNumberPrime ? 'a Prime' : 'not a Prime'} number.</p>

            <hr />

            <input
                value={otherInput}
                onChange={(e) => setOtherInput(e.target.value)}
                placeholder="Try typing here too"
            />
            <p>This won't trigger recalculation!</p>
        </div>
    )
}

export default PrimeNumberChecker