import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '~/containers/Home'
import store from './store';
import { Context } from './store';



export default function App(props){
  return (
    <Context.Provider value={store}>
      <Home/>
    </Context.Provider>
    
  )
}