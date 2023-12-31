import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./App.css";

function App() {
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    setBirthdays(data);
  }, []);

  const clearBirthdays = () => {
    setBirthdays([]);
  };

  return (
    <div className="App">
      <div className="list">
        <h2>{birthdays.length} birthdays today</h2>
        <div className="cards">
          {birthdays.map((person, index) => (
            <div className="card" key={index}>
              <img src={person.image} alt={person.name} className="avatar" />
              <div className="person">
                <h3>{person.name}</h3>
                <p>{person.age} years</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={clearBirthdays} className="clear-btn">
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
