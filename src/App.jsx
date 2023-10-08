import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './layouts'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>

        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
