import React, { useState } from "react";

const User = (aila) => {
  const[count,setCount]=useState(0);
  const[count2]=useState(0);
  console.log(aila);
  return (
    <div className="user-card">
    <h1>Count = {count}</h1>
    <button onClick={()=>{
      
      setCount(count+1);
    }}
    >CountIncrease</button>
    <button onClick={()=>{
      
      setCount(count-1);
    }}
    >CountDecrease</button>
    <button onClick={()=>{
      
      setCount(0);
    }}
    >CountNeutral</button>
    {/* <h1>Count2 = {count2}</h1> */}
      <h2>{aila.name}</h2>
      <h3>location - Bally</h3>
      <h4>Contact - github-pallab17</h4>
    </div>
  );
};

export default User;
