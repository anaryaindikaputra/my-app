import React, { useState, useEffect } from 'react'

function CounterBlock() {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        document.getElementById("counter-text").innerText = `You clicked ${counter} times.`;
    });

    return (
        <div>
            <p id="counter-text">You clicked {counter} times.</p>
            <button onClick={() => setCounter(counter + 1)}>Click Me</button>
        </div>
    )
}

export default CounterBlock;