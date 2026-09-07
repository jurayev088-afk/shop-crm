import { useDarkMode } from "../../context/DarkMode";
import Context from "./Context";
import Header from "./Header";


export default function Main() {
    const {isSun} = useDarkMode()
  return (
    <main className={`ml-65 flex min-w-0 w-[calc(100%-260px)] flex-none flex-col ${isSun ? "bg-black text-white" : "bg-[#F9FAFB] "}`}>
        <Header/>
        <Context/>
    </main>
  )
}
