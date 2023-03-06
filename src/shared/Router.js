import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Under_todo from '../pages/Under_todo'
import Home from '../pages/Home'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Home/:id' element={<Under_todo/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default Router