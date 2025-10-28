import  { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route patg="/" element={<HomePage />} />
      <Route patg="checkout" element={<div>Test checkout page</div>} />
    </Routes>
  )
}

export default App
