import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppSelector } from './hooks'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './services/firebase'
import './assets/index.scss'
import Home from './pages/home'
import Chat from '././pages/Chat'
import NavBar from './components/NavBar'
import Signup from './pages/Signup'


initializeApp(firebaseConfig)

function App() {
  const users = useAppSelector(state => state.users)

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
