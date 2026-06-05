import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

  useEffect(()=>{
    callOnce()
  },[data])

  function callOnce(){
    console.log("called")
  }
  

  return (
    <>
     <div>
      <h1>Use Effect</h1>
      <button onClick={()=>setCount(count+1)}>count{count}</button>
      <button onClick={()=>setData(data+1)}>data count{data}</button>
     </div>
    </>
  )
}

export default App
