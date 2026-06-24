import { useState } from 'react'
import './App.css'
import PrakitiHome from './sreens/prakitiHome'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrakitiHome/>}></Route>
    </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;