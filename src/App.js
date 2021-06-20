import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Student from './pages/Student';
import Section from './pages/section';
import Drop from './pages/drop';



function App() {
  return (
    <>
        <Section />
        <Student />
      
        
        
    </>
  );
}

export default App;
