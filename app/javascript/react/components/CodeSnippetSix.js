import React from 'react';
import Snippet6a from '../../../assets/images/Snippet6a.png';
import Snippet6b from '../../../assets/images/Snippet6b.png';

const CodeSnippetSix = props => {
  return(
    <div id="code">
      <h1 className="sub-head">Code</h1>
      <div className="snippet">
        <img style={{display: "block"}} src={Snippet6a} alt="snippet6a" />
        <img src={Snippet6b} alt="snippet6b" />
      </div>
    </div>
  )
}

export default CodeSnippetSix;
