import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'

import Home from './pages/home'
import Chat from '././pages/Chat'
import NavBar from './components/NavBar'
import Signup from './pages/Signup'


function App() {
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
