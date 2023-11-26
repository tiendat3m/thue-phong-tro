import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import reduxStore from './redux'
import { BrowserRouter } from 'react-router-dom'
import '~/index.css'
const { store, persistor } = reduxStore()
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
