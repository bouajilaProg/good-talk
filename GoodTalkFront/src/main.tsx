import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FriendList from './pages/FriendList'
import Home from './pages/Home'
import Messages from './pages/Messages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Friends" element={<FriendList />} />
        <Route path="messages/:id" element={<Messages />} />


      </Routes>


    </BrowserRouter>

  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
