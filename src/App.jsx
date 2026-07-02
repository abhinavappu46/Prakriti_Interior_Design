import { useState } from 'react'
import './App.css'
import PrakitiHome from './sreens/prakitiHome'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  

  return (
    <>
     <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    draggable
    theme="dark"
/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrakitiHome/>}></Route>
    </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;