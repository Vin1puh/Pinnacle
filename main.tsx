import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss'
import App from './App.tsx'
import Header from './Header/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path='/' index element={<App />}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
