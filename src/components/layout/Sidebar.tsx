import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import tog from '../../assets/svg/toggle.svg'
import photo from '../../assets/img/photo.jpg'
import { sidebarRoutes } from '../../constants/navigate'
import { LogOut } from 'lucide-react'
import { useDarkMode } from '../../context/DarkMode'
export default function Sidebar() {
    const {isSun, setIsSun} = useDarkMode()
  return (
    <div className={`w-65 z-2 flex flex-col justify-between fixed h-screen ${isSun ? "bg-black text-white shadow-[0px_3px_4px_0px_gray]" : "bg-white text-black shadow-[0px_3px_4px_0px_#0000001F]"}`}>
      <div>
        <div className='m-5 flex items-center justify-between'>
          <Link to="/">
          <img src={logo} alt="" />
          </Link>
          <img src={tog} alt="" />
        </div>
        <h3 className='font-normal text-[15px] m-[8px_24px_12px]'>Main menu</h3>
        <div>
          <div>
            {
              sidebarRoutes.map(item => (
                <NavLink key={item.id} to={item.path} className={`flex items-center  m-[0px_14px] p-[10px_16px] gap-2.75 rounded-md`}>
                  <item.icon size="19px" />
                  <span>{item.label}</span>
                </NavLink>
              ))
            }
          </div>
        </div>
      </div>

      <NavLink to="/login" className={`flex items-center m-[0px_5px] p-[10px_5px] mb-2 gap-2.75 rounded-md`}>
        <img className='w-10 h-10 shrink-0 rounded-full object-cover' src={photo} alt="" />
        <div className='flex flex-col'>
          <strong className='text-[16px] truncate'>Abdulloh</strong>
          <span className='text-[14px] truncate'>jurayev088@icloud.com</span>
        </div>
        <LogOut />
      </NavLink>
    </div>
  )
}
