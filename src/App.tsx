import { useEffect } from "react"
import { useDarkMode } from "./context/DarkMode"
import AppRoute from "./routes/AppRoute"

export default function App() {
  const { isSun, setIsSun } = useDarkMode()
  
  useEffect(() => {
    localStorage.setItem('myKey', JSON.stringify(isSun))
  }, [isSun])
  return (
    <div><AppRoute /></div>
  )
}
