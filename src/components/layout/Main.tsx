import { useDarkMode } from "../../context/DarkMode";
import Context from "./Context";
import Header from "./Header";


export default function Main() {
    const {isSun, setIsSun} = useDarkMode()
  return (
    <main className={`ml-65 flex flex-1 flex-col ${isSun ? "bg-black text-white" : "bg-[#F9FAFB] "}`}>
        <Header/>
        <Context/>
    </main>
  )
}
