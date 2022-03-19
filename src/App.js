import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from "react";

function App() {

  const [mode, setMode] = useState('light') //checks if dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
    
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
  }

  return (
    <>
      <Navbar title = "TextUtils"
        aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode}/>

      <div className="container my-3">
        <TextForm heading = "Enter Text to Analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
