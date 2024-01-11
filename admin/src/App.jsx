import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../../admin/src/Components/HEADER/Sidebar/Sidebar"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Sidebar />
        <Routes>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
