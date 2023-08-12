import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'

// Removed StrictMode
// react-beautiful-dnd tends to crash with StrictMode. There's an open issue about this problem

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
