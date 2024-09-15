import { useState } from 'react'
import { BrowserRouter as Router, Route, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import { Router, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/" element={<HomePage />} />
        <Route path= "/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  )
}

export default App
