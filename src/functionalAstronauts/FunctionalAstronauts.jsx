import { useState, useEffect } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function FunctionalAstronaut() {
  const [astronauts, setAstronauts] = useState([]);

  // setting the dependencies array in useEffect to an empty array
  // ensures this fetch request only runs once instead of infinitely
  useEffect(() => {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => setAstronauts(data.people))
      .catch(err => console.error(err))
  }, []);

  // create a list node to add to the DOM
  const astronautList = astronauts.map((astronaut, index) => (
    <li key={`astro-${index}`}>
      <p>{astronaut.name} is flying in the {astronaut.craft} spacecraft</p>
    </li>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {astronautList}
        </ul>
      </header>
    </div>
  );
}

export default FunctionalAstronaut;