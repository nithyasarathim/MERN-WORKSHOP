import React from 'react'
import { useState } from 'react'


const App = () => {
  
  const [count,setcount]=useState(0);
  const handleclick=()=>setcount(count+1);
  return (
    <div>
      <button onClick={handleclick}>{count}</button>
    </div>
  )
}

export default App
