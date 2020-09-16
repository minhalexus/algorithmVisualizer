import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './SmallToBig.css';
import SortingPage from './SortingPage';
import { CodeBlock, dracula } from "react-code-blocks";
import { bubbleSortContent } from "./static_data";
import CloseIcon from '@material-ui/icons/Close';


function SmallToBig({ sortType = "", ffullScreen=false }) {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = (event) => {
    event.stopPropagation();
    setFullScreen(prevState => !prevState)
  };

  const content = () => {
    if (fullScreen) {
      return (
        <div onClick={event => event.stopPropagation()} className="fullScreen_content">
          <SortingPage sortType={sortType} />
          <CodeBlock className="codeblock"
            text={bubbleSortContent}
            language="javascript"
            showLineNumbers={true}
            theme={dracula}
          />

        </div>
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
          > 
          {fullScreen && (<CloseIcon className="closeIcon" fontSize="large" />)}
          {content()} 
          </div>
        </Flipped>
      </Flipper>

    </div>
  );
}

export default SmallToBig;
