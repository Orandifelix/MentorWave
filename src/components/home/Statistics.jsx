import React, { useState, useEffect } from "react";
import './Stats.css'

function Statistics() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
  const stopNumbers = [10000, 7000, 200, 5000]; // Stop values for each statistic

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers(
        numbers.map((number, index) =>
          getRandomNumber(number, stopNumbers[index])
        )
      );
    }, 5000);

    // Check if any number has reached the stop value
    const hasReachedStopNumbers = numbers.map(
      (number, index) => number >= stopNumbers[index]
    );
    if (hasReachedStopNumbers.every((reached) => reached)) {
      clearInterval(interval);
    }

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [numbers]);

  const getRandomNumber = (stopNumber) => {
    // Generate a random number up to stopNumber
    return Math.floor(Math.random() * (stopNumber + 1));
  };

  return (

    <div className="ui segment"  style={{backgroundColor:"#269DCC", padding:"20px", margin:"10px"}}>
    <div className="ui four column stackable grid">
      <div className="column">
        <h1>{numbers[0]}+</h1>
        <h3>Mentees Signed Up</h3>
      </div>
      <div className="column">
        <h1>{numbers[1]}+</h1>
        <h3>Mentors Across the Globe</h3>
      </div>
      <div className="column">
        <h1>{numbers[2]}+</h1>
        <h3>Employees Worldwide</h3>
      </div>
      <div className="column">
        <h1>{numbers[3]}+</h1>
        <h3>Hours of Mentoring</h3>
      </div>
    </div>
  </div>
  
  );
}

export default Statistics;
