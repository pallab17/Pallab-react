import React, { useState } from "react";

const User = (aila) => {
  const[count]=useState(0);
  console.log(aila);
  return (
    <div className="user-card">
    <h1>Count = {count}</h1>
      <h2>{aila.name}</h2>
      <h3>location - Bally</h3>
      <h4>Contact - github-pallab17</h4>
    </div>
  );
};

export default User;
