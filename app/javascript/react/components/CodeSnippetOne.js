import React from 'react';
import Snippet1 from '../../../assets/images/Snippet1.png';

const CodeSnippetOne = props => {
  return(
    <div id="code">
      <h1 className="sub-head">Code</h1>
      <div className="snippet">
        <img src={Snippet1} alt="snippet1" />
      </div>
    </div>
  )
}

export default CodeSnippetOne;
