// Should be imported first
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import WebApp from '@twa-dev/sdk'

import { App } from './App.tsx'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
