import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import DarkModeProvider from './context/DarkMode.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </BrowserRouter>,
)
