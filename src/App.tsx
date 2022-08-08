import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userSlice } from './store/userSlice'
import { Store } from '@reduxjs/toolkit'
import './index.scss'


import Home from './pages/home'
import Chat from '././pages/Chat'
import NavBar from './components/NavBar'
import Signup from './pages/Signup'
import store from './store'


function App() {
  useEffect(() => {

    console.log(store.getState())
  })

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
