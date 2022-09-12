import React, { useRef, useState } from 'react'

const UseRef = () => {
    const inputRef = useRef();
    const [ph, setPh] = useState("");


    const handleFocus = () => { 
        inputRef.current.focus();
     }

  return (
    <div>
        
        <input type="text" placeholder={ph} ref={inputRef}/>
        <button onClick={handleFocus}>Click to Focus</button>

    </div>
  )
}

export default UseRef