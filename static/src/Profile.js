import React from 'react';
import Profile from './Views/Profile';
import { UserContextProvider } from "./Context/AddUserContext";
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './App.css';
import HeaderLoggedUser from './Components/HeaderLoggedUser.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <><HeaderLoggedUser loc="profile" />
   <UserContextProvider>
   <Profile />
   </UserContextProvider>
        </>



);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


