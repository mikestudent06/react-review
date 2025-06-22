// import React, { useEffect, useRef, useState } from 'react'

// const TypingTracker = () => {
//     const [text, settext] = useState("")
//     const [typingCountShowed, settypingCountShowed] = useState(false)
//     const inputRef = useRef<HTMLInputElement>(null)
//     const typingCount = useRef(0)
//     const handleChange = (e) => {
//         settext(e.target.value)
//         typingCount.current++
//     }

//     useEffect(() => {
//         if (inputRef.current)
//             inputRef.current.focus()
//     }, [])

//     const showTypingCount = () => {
//         settypingCountShowed(true)
//     }

//     return (
//         <div>
//             <p>TYpe whatever you need</p>
//             <input ref={inputRef} type="text" onChange={handleChange} onMouseOut={showTypingCount} /><br />
//             <span> {text}</span><br />
//             <span>the current text length is {text.length}</span>
//             {typingCountShowed && (
//                 <span> You typed {typingCount.current} times</span>)}
//         </div>
//     )
// }

// export default TypingTracker

import React, { useEffect, useRef, useState } from 'react'

const TypingTracker = () => {
    const [text, settext] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const changeCountRef = useRef(0)

    const handleChange = (e) => {
        settext(e.target.value)
        changeCountRef.current += 1
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <div>
            <p>Type whatever you need</p>
            <input ref={inputRef} type="text" onChange={handleChange} /><br />
            <span>{text}</span><br />
            <span>Text length: {text.length}</span><br />
            <span>Input changed {changeCountRef.current} times</span>
        </div>
    )
}

export default TypingTracker
