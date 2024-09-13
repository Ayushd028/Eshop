// import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alert from './Components/Alert.jsx';
import About from './Components/About.jsx';
import Navbar from './Components/Navbar.jsx';
import TextForms from './Components/TextForms.jsx';
import useAdditional from "./Components/Additional.jsx";


function App() {

  const { mode, alert, toggleMode, showAlert } = useAdditional();

  return (
    <BrowserRouter>
      <Navbar title="Case Converter" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForms textArea="Enter Your Text Below" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;