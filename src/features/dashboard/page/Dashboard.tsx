import Tranzaction from "../components/layout/Tranzaction";
import TopProducts from "../components/layout/TopProducts";
import BestProduct from "../components/layout/BestProduct";
import AddNewProduct from "../components/layout/AddNewProduct";
import TotalDashboard from "../components/layout/TotalDashboard";
import ReportDashboard from "../components/layout/ReportDashboard";
import CountryDashboard from "../components/layout/CountryDashboard";

export default function Dashboard() {

  return (
    <div>
      <div>
        <TotalDashboard />
      </div>
      <div className="grid grid-cols-[8fr_4fr] gap-5 mt-5">
        <ReportDashboard />
        <CountryDashboard />
      </div>
      <div className="grid grid-cols-[9fr_3fr] gap-5 my-5">
        <Tranzaction />
        <TopProducts />
      </div>
      <div className="grid grid-cols-[8fr_4fr] gap-5 ">
        <BestProduct />
        <AddNewProduct />
      </div>
    </div>
  )
}
