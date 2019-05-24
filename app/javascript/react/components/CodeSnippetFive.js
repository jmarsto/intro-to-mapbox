import React from 'react';
import Snippet5a from '../../../assets/images/Snippet5a.png';
import Snippet5b from '../../../assets/images/Snippet5b.png';

const CodeSnippetFive = props => {
  return(
    <div id="code">
      <h1 className="sub-head">Code</h1>
      <div className="snippet">
        <img src={Snippet5a} alt="snippet5a" />
        <img src={Snippet5b} alt="snippet5b" />
      </div>
    </div>
  )
}

export default CodeSnippetFive;
