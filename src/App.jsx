import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ListaDeFavoritos } from './pages/ListaDeFavoritos'
import { Navbar } from './components/Navbar'
import { FavoritesContextProvider } from './context/favoritosContext'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <FavoritesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListaDeFavoritos" element={<ListaDeFavoritos />} />
        </Routes>
      </FavoritesContextProvider>
    </BrowserRouter>
  )
}

export default App
