import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'

import Home from './CurdOperations/Home';
import Create from './CurdOperations/Create';
import Update from './CurdOperations/Update';
import Delete from './CurdOperations/Delete';
import Admin from './CurdOperations/Admin';
import Read from './CurdOperations/Read';

function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
        <Route path='/read/:id' element={<Read/>}/>
      </Routes>
    </>
  )
}

export default App
