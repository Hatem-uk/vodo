import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.tsx';
import axios from 'axios';
import { store } from './store/store.tsx';
import { Provider } from 'react-redux';
// Ensure environment variables are correctly prefixed and used
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc3NGRhNjUwOGMwMjVlOTBjNzY0NTUwYmYzM2JjOCIsInN1YiI6IjY1MTgyMGM0ZWE4NGM3MDBhZWU5OGY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WQHVdE2waTdnOl18f1-zNeMuFihwZ0b9iJm_Bt6o6L0';

// Debugging: Check if the access token is loaded
console.log('Access Token:', accessToken);

if (!accessToken) {
  console.error('REACT_APP_ACCESS_TOKEN is not defined in your .env file');
}

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router}/>
    </Provider>
    </React.StrictMode>
);
