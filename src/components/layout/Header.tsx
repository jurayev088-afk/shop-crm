import { Bell, Moon, Search, Sun } from "lucide-react"
import { useLocation } from "react-router-dom"
import photo from '../../assets/img/photo.jpg'
import { useDarkMode } from "../../context/DarkMode"

export default function Header() {

  const pageTitle = {
    '/dashboard': "Dashboard",
    '/order': "Order Management",
    '/customers': "Customers",
    '/categories': "Categories",
    '/addProduct': "Add Products",
  }

  const { pathname } = useLocation()
  const {isSun, setIsSun} = useDarkMode()
  console.log(isSun);
  document.body.classList.toggle("dark-mode", isSun)

  const currentTitle = pageTitle[pathname] || "Dashboard"
  return (
    <div className={`fixed left-65 right-0 z-1 flex min-w-0 items-center justify-between bg-black shrink-0 p-[24px_44px_24px_24px] ${isSun ? "bg-black text-white shadow-[0_3px_4px_-1px_gray]" : "bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"}`}>
      <h1 className="font-bold text-[22px]">{currentTitle}</h1>
      <div className="flex gap-8 items-center">
        <div className="flex bg-[#F9FAFB] p-[15px_33px] rounded-[30px] w-102 items-center justify-between">
          <input type="text" placeholder="Search data, users, or reports" className={`outline-0 ${isSun ? "text-black" : "text-black"}`} />
          <Search className={`${isSun ? "text-black" : "text-black"}`} />
        </div>
        <Bell />
        <div className="bg-[#EAF8E7] p-2 w-20 rounded-full flex gap-1">
          {
            isSun ?
              <Moon onClick={() => setIsSun(!isSun)} size={30} className={`bg-white cursor-pointer p-1 rounded-full ${isSun ? "text-black" : "text-black"}`} /> :
              <Sun onClick={() => setIsSun(!isSun)} size={30} className="bg-white cursor-pointer p-1 rounded-full" />
          }
        </div>
        <img className='w-10 h-10 shrink-0 rounded-full object-cover' src={photo} alt="" />
      </div>
    </div>
  )
}
