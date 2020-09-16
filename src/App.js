import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SortingPage from './SortingPage';
import SmallToBig from './SmallToBig';


function App() {
  return (
    <div className="app">
      <SmallToBig sortType="Selection" />
      <SmallToBig sortType="Bubble" />
    </div>
  );
}

export default App;
