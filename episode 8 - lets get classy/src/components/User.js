import React from "react";

const User = (aila) => {
  console.log(aila);
  return (
    <div className="user-card">
      <h2>{aila.name}</h2>
      <h3>location - Bally</h3>
      <h4>Contact - github-pallab17</h4>
    </div>
  );
};

export default User;
