import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UseStateComponent from './demo/useState.tsx'

// !为非空断言
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <UseStateComponent />
  </React.StrictMode>,
)
