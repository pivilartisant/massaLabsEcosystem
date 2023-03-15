import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Ecosystem } from './Pages/Ecosystem/Ecosystem'

function App() {
  return (
    <div className="App">
      {/* app router */}
      <Router>
        <Routes>
          <Route path='/' element={<Ecosystem/>}></Route>
          {/* allows me to redirect path, is used in Navigator.jsx */}
          <Route path='/:id' element={<Ecosystem/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
