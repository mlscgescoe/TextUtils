import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light') //checks if dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.title = "TextUtils - Home"
    }
    
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      document.title = "TextUtils - Dark Mode"
    }
  }

  return (
    <>

      <Router>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <TextForm heading = "Enter Text to Analyze" mode={mode}/>
          </Route>
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
