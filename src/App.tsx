import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'

import Home from './pages/home'
import Chat from '././pages/Chat'
import NavBar from './components/NavBar'


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
