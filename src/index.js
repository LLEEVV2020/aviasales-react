import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

import App from './components/app'
import store from './store/store'
import { fetchAllTickets } from './store/async-actions'

const root = ReactDOM.createRoot(document.getElementById('root'))
store.dispatch(fetchAllTickets())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
