import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className="App">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <button onClick={() => alert("Hello " + firstName + ' ' + lastName + '😀' + '!')}>GREET ME</button>
      

    </div>
  );
};

export default App;
