import React from 'react';
import Snippet7a from '../../../assets/images/Snippet7a.png';
import Snippet7b from '../../../assets/images/Snippet7b.png';
import Snippet7c from '../../../assets/images/Snippet7c.png';

const CodeSnippetSeven = props => {
  return(
    <div id="code">
      <h1 className="sub-head">Code</h1>
      <div className="snippet">
        <img style={{display: "block"}} src={Snippet7a} alt="snippet7a" />
        <img style={{display: "block"}} src={Snippet7b} alt="snippet7b" />
        <img style={{display: "block"}} src={Snippet7c} alt="snippet7c" />
      </div>
    </div>
  )
}

export default CodeSnippetSeven;
