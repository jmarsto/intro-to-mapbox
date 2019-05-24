import React from 'react';
import Snippet3a from '../../../assets/images/Snippet3a.png';
import Snippet3b from '../../../assets/images/Snippet3b.png';

const CodeSnippetThree = props => {
  return(
    <div id="code">
      <h1 className="sub-head">Code</h1>
      <div className="snippet">
        <img src={Snippet3a} alt="snippet3a" />
        <img src={Snippet3b} alt="snippet3b" />
      </div>
    </div>
  )
}

export default CodeSnippetThree;
