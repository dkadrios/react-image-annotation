import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

export default (props) => (
  <SyntaxHighlighter language='jsx' style={prism}>
    {props.children}
  </SyntaxHighlighter>  
)
