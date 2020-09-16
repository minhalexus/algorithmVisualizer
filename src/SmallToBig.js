import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './SmallToBig.css';
import SortingPage from './SortingPage';


function SmallToBig({ sortType="" }) {
    const [fullScreen, setFullScreen] = useState(false);
    const toggleFullScreen = (event) => {
      event.stopPropagation();
      setFullScreen(prevState => !prevState)
    };

    const content = () => {
      if (fullScreen){
        return (
          <SortingPage sortType={sortType} />
        )
      }
      
      return (
        <span>{sortType} Sort</span>
      )
    }
  
  
    return (
      <div className="SmallToBig">        
        <Flipper flipKey={fullScreen}>
          <Flipped flipId="square">
            <div
              className={fullScreen ? 'full-screen-square' : 'square'}
              onClick={toggleFullScreen}
            > {content()} </div>
          </Flipped>
        </Flipper>
  
      </div>
    );
  }
  
  export default SmallToBig;
  