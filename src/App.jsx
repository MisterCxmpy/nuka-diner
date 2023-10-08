import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './layouts'
import { Menu } from './sections'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Menu />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
