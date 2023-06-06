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

  const getRandomNumber = (prevNumber, stopNumber) => {
    // Generate a random number up to stopNumber
    return Math.floor(Math.random() * (stopNumber + 1));
  };

  return (
    <div className="statistics-container">
      <div className="stat">
        <p className="stat-number">{numbers[0]}</p>
        <h3 className="stat-title">MENTEES SIGNED UP</h3>
      </div>
      <div className="stat">
        <p className="stat-number">{numbers[1]}</p>
        <h3 className="stat-title">MENTORS ACROSS THE GLOBE</h3>
      </div>
      <div className="stat">
        <p className="stat-number">{numbers[2]}</p>
        <h3 className="stat-title">EMPLOYEES WORLDWIDE</h3>
      </div>
      <div className="stat">
        <p className="stat-number">{numbers[3]}</p>
        <h3 className="stat-title">HOURS OF HARD WORK</h3>
      </div>
    </div>
  );
}

export default Statistics;
