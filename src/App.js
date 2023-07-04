
import './App.css';
import React from 'react';
import Home from './components/Home';
import Item from './components/Item';
import {Routes, Route} from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';

const NotFound = () => <h1>404 Not Found</h1>;

const App=() => {
  return (
    <>
    <Provider store = {store}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:id' element={<Item/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
    </>
    
  );
}

export default App;
