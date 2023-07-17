import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CounterProvider from './context/counter.tsx'
import ProductProvider from './context/ProductContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
  <CounterProvider>
    <App />
  </CounterProvider>
  </ProductProvider>
)
