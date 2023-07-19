import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from 'react-redux'
// import CounterProvider from './context/counter.tsx'
// import ProductProvider from './context/ProductContext.tsx'
import store from '@/store/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <ProductProvider>
  // <CounterProvider>
  //   <App />
  // </CounterProvider>
  // </ProductProvider>
  <Provider store={store}>
    <App />
  </Provider>
)
