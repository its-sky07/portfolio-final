import { useState } from 'react'

import './App.css'
import Header from './component/header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Nav from './component/header/Header.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default App;
