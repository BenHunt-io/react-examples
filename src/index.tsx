import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RenderingElements from './pages/3RenderingElements';
import ComponentsAndProps from './pages/4ComponentsAndProps';
import StateAndLifecycle from './pages/5StateAndLifecycle';
import HandlingEvents from './pages/6HandlingEvents';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rendering-elements" element={<RenderingElements/>}/>
        <Route path="/components-and-props" element={<ComponentsAndProps/>}/>
        <Route path="/state-and-lifecycle" element={<StateAndLifecycle/>}/>
        <Route path="/handling-events" element={<HandlingEvents/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
