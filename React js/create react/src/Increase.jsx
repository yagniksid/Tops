// import React, { useState, useEffect } from 'react';

// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// export default function Increase() {
//     const [count, setCount] = useState(5);
//     const [paused, setPaused] = useState(false);

//     useEffect(() => {
//         if (!paused && count > 0) {
//             const intervalId = setInterval(() => {
//                 setCount(count - 1);
//             }, 1000);

//             return () => {
//                 clearInterval(intervalId);
//             };
//         }
//     }, [paused, count]);


//     const handlePause = () => {
//         setPaused(!paused);
//     };

//     return (
//         <div>
//             {/* <div>
//                 {array.map((e) => {
//                     if (array.length > 0) {
//                         let emptyArray = array.pop()
//                         console.log("🚀 ~ {array.map ~ emptyArray:", emptyArray)
//                         console.log("🚀 ~ {array.map ~ array:", array)
//                     }
//                 })}
//             </div> */}
//             <div>{count}</div>
//             <button>Decrease</button>
//             <button onClick={handlePause}>{paused ? 'Resume' : 'Pause'}</button>
//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react'
// import { Button } from 'reactstrap'

// export default function Increase() {
//     let [count, setCount] = useState(25)
//     let [pause, setPause] = useState(false)
//     console.log("🚀 ~ Increase ~ pause:", pause)

//     useEffect(() => {
//         if (!pause) {
//             let interval = setInterval(() => {
//                 setCount(count - 1)
//             }, 1000)
//             return () => clearInterval(interval)
//         }
//     }, [pause])

//     return (
//         <div>
//             <h1>Count : {count}</h1>
//             <Button onClick={() => setCount(count - 1)}>Decrease</Button>
//             <Button onClick={() => setPause(true)}>Pause</Button>
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

export default function Increase() {
    let [count, setCount] = useState(25);
    let [pause, setPause] = useState(false);

    useEffect(() => {
        if (!pause && count > 0) {
            let interval = setInterval(() => {
                setCount(count - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [pause, count]);

    return (
        <div>
            <h1>Count : {count}</h1>
            <Button onClick={() => setCount(count - 1)}>Decrease</Button>
            <Button onClick={() => setPause(!pause)}>{pause ? "Resume" : "Pause"}</Button>
        </div>
    );
}
