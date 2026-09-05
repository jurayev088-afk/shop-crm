import { Outlet } from "react-router-dom";
import { useDarkMode } from "../../context/DarkMode";

export default function Context() {
    const {isSun, setIsSun} = useDarkMode()
  return (
    <div className={`p-5 mt-25.5 ${isSun ? "bg-black text-white" : "bg-[#F9FAFB] "}`}>
        <Outlet/>
    </div>
  )
}
