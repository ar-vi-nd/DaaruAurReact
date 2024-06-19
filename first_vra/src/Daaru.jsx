import React from 'react'
import { useState } from 'react'

// this will give error while importing

// const daaru = () => {
//   return (
//     <div>peg ready</div>
//   )
// }

// export default daaru



// correct code


const Daaru = () => {

    const quantity = "30ml"

    const [counter,setCounter] = useState(0)


    const incrementByOne=()=>{
        setCounter(counter+1)
    }
    const decrementByOne = ()=>{
        // even with multiple setCounter it will only decrement by one
        setCounter(counter-1)
        setCounter(counter-1)
        setCounter(counter-1)
    }

    const incrementByFive=()=>{
        setCounter((prevCount)=>(prevCount+1))
        console.log(counter)
        setCounter((prevCount)=>(prevCount+1))
        setCounter((prevCount)=>(prevCount+1))
        setCounter((prevCount)=>(prevCount+1))

        // even this time out will first look for latest value of count and then increment it by one
        // but for this settimeout the previous settimeouts (ie ones that have less time) will run first and change the value of count
        setTimeout(() => {
            setCounter((prevCount)=>(prevCount+1))
            }, 5000);
        setCounter((prevCount)=>(prevCount+1))

        // the below statement will change it back to 1 as it will have counter = 1 in its closure
        setTimeout(() => {
            setCounter(counter+1)
        }, 2000);


        // now it will look for latest count state and then increment it by one

        setTimeout(() => {
        setCounter((prevCount)=>(prevCount+1))
        }, 3000);
    }

    const decrementByFive = ()=>{
        setCounter((prevCount)=>(prevCount-5))
    }
  return (
    <>

    // this quantity is not javascript but an evaluated expression 
    // so you cannot just write if else just evaluated expressions
    <div>Daaru Ready {quantity}</div>

    <div>
        <button onClick={incrementByFive}>INC BY FIVE {counter}</button>
        <button onClick={incrementByOne}>INC BY ONE {counter}</button>
        <button onClick={decrementByOne}>DEC BY ONE{counter}</button>
        <button onClick={decrementByFive}>DEC BY FIVE {counter}</button>
    </div>
    </>

)
}

export default Daaru