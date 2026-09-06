import { useDarkMode } from "../../../context/DarkMode";
import CustomersOverwiev from "../components/CustomersOverwiev";
import CustomersTable from "../components/CustomersTable";
import TotalCustomers from "../components/TotalCustomers";

export default function Customers() {
  const {isSun, setIsSun} = useDarkMode()
  return (
    <div>
      <div className="grid grid-cols-[3fr_9fr] gap-5 mb-5">
        <TotalCustomers/>
          <CustomersOverwiev/>
      </div>
      <div className={`p-5 rounded-lg ${isSun ? " bg-black shadow-[0px_1px_3px_0px_gray]" : "bg-white shadow-[0px_1px_3px_0px_#00000033]"}`}>
        <CustomersTable/>
      </div>
    </div>
  )
}
