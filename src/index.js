import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Materi/Routings/components/home';
// import About from './Materi/Routings/components/about';
// import Category from './Materi/Routings/components/category';
// import Home from './Materi/Routings/components/home';
// import About from './Materi/Routings/components/about';
// import Category from './Materi/Routings/components/category';
import Homes from './Task/Routing/components/home';
import Abouts from './Task/Routing/components/about';
import Profile from './Task/Routing/components/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='home' element={<Homes />}/>
          <Route path='about' element={<Abouts />}/>
          <Route path='profile' element={<Profile />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Path itu properti dan elemen adalah komponen yang di tuju
