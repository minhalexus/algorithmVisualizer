import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SortingPage from './SortingPage';
import SmallToBig from './SmallToBig';
import Button from '@material-ui/core/Button';



function App() {
  const [fullScreenBubbleSort, setFullScreenBubbleSort] = useState(false);
  const [fullScreenSelectionSort, setFullScreenSelectionSort] = useState(false);


  return (
    <div className="app">
      <div className="description">
        <h2>Sorting Algorithm Visualizer</h2>
        <div>
          <pre>
            This project explores animation techniques in ReactJS and CSS to visualize various algorithms.
            <br />
            Click on one of the algorithm containers below to check out how they work.
            <br/>
            <br/>
            Check out the github page for source code.
          </pre>
        </div>
        <Button variant="contained" 
          color="primary" 
          href="https://github.com/minhalexus/algorithmVisualizer"> 
          View on Github 
        </Button>
      </div>
      <div className="sortAlgos">
        <SmallToBig sortType="Selection" fullScreen={fullScreenSelectionSort} />
        <SmallToBig sortType="Bubble" fullScreen={fullScreenBubbleSort} />
      </div>

      <div className="signature">
        <p>Minhal Shanjer</p>
        <hr/>
        <img src ="https://uwaterloo.ca/brand/sites/ca.brand/files/universityofwaterloo_logo_horiz_rev_rgb.png" alt="UWaterloo CS" />
      </div>
      
      
    </div>
  );
}

export default App;
