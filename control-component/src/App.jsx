import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  

  return (
    <>
      <div>
        <h1>COntrol component</h1>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter name" />
          <br></br>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="Enter email " />
          <br></br>
          <button>submit</button>
          <button onClick={()=>{setName(""),setEmail("")}}>clear</button>

          <h2>{name}</h2>
          <h2>{email}</h2>
        </form>
      </div>
    </>
  );
}

export default App;
