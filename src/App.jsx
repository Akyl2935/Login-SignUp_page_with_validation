import { useState } from 'react'
import Login from './frontend/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {Login}></Route>
    </Routes>
     <Login />
    </BrowserRouter>
  )
}

export default App
