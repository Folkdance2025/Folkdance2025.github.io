// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

// 處理 GitHub Pages 的 404.html 導回原路徑
const redirectPath = sessionStorage.getItem('redirect-path')
if (redirectPath) {
  sessionStorage.removeItem('redirect-path')
  window.history.replaceState(null, '', redirectPath)
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
