import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import { setArt } from './redux/GimliArtSlice'

await fetch('/GimliArt.json')
    .then(response => response.json())
    .then(data => {
        store.dispatch(setArt(data))
            ? console.log('Good fetch')
            : console.log('Bad fetch')
    })
    .catch(e => {
        console.error('Error: ', e)
    })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
    <App />
      </Provider>
  </BrowserRouter>
);


