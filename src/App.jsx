import { useState } from 'react'
import Login from './frontend/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './frontend/SignUp';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Login />}></Route> 
      <Route path = '/signup' element = {<Signup />}></Route> 
    </Routes>
     <Login />
    </BrowserRouter>
  )
}


export default App
