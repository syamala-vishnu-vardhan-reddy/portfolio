import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store' // Import your Redux store
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found!')
}

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
