import { BrowserRouter, Route, Routes } from "react-router-dom"
import CryptoHome from './pages/CryptoHome'
import CryptoDetail from './pages/CryptoDetail'
import Navbar from "./components/Navbar"

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}