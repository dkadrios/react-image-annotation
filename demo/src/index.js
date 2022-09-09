import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const container = document.getElementById('demo')
const root = createRoot(container)

root.render(
  <StrictMode>
    <App/>
  </StrictMode>)

registerServiceWorker()
