import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import JokesMain from './components/Jokes/jokesMain.jsx'

createRoot(document.getElementById('root')).render(
  
    // <App />
    <JokesMain/>
   
)
