import { useCallback, useEffect, useRef, useState } from "react"

function App() {


  const [length,setLength]= useState(8)
  const [keepnum,setKeepnum]= useState(true)
  const [keepchar,setKeepchar]= useState(false)
  const [password,setPassword]= useState("")

  const passRef = useRef(null)


useEffect(
  ()=>{
    passwordgenerator()
  },[length,keepnum,keepchar]
)

const passwordgenerator = useCallback(()=>{

  let passstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numstr = "0123456789"
  let charstr = "!@#$%^&*()_+"

  if(keepnum){
    passstr = passstr+ numstr
  }

  if(keepchar){
    passstr = passstr+charstr
  }

  let pass =""

  for(let i=0;i<length;i++){
    let randomchar = passstr[Math.floor(Math.random()*passstr.length)]
    pass += randomchar
  }

  setPassword(pass)


},[length,keepchar,keepnum,password])

const copyPassword = ()=>{

  passRef.current?.select()
  passRef.current?.setSelectionRange(0,4)
  window.navigator.clipboard.writeText(password)
  
}

  return (
    <>
<h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>


  <div className="">
  <input ref={passRef} type="text" value={password} readOnly/>
  <button onClick={copyPassword}>Copy</button>
  <label htmlFor="length">Length : {length}</label><input type="range" min={6} max={12} value={length} onChange={(e)=>{ setLength(e.target.value)}}/>
  <label htmlFor="numbers">Numbers : {keepnum?"true":"false"}</label><input type="checkbox"  value={keepnum} onChange={()=>{setKeepnum(prev=>!prev)}} checked = {keepnum} />
  <label htmlFor="special characters">Special Characters : {keepchar?"true":"false"}</label><input type="checkbox" value={keepchar} onChange={()=>{setKeepchar(prev=>!prev)}} checked={keepchar}/>
    </div>

    </>
  )
}

export default App
