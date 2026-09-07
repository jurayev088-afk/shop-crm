import { PlusCircle, Search } from "lucide-react";
import PublishProduct from "../components/layout/PublishProduct";
import { useDarkMode } from "../../../context/DarkMode";
import BasicDetails from "../components/layout/BasicDetails";
import UploadProduct from "../components/layout/UploadProduct";
import SaveDraft from "../components/layout/SaveDraft";

export default function AddProduct() {
  const { isSun } = useDarkMode();
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-[22px] ">Discover</h2>
        <div className="flex gap-3 items-center">
          <div className="flex p-3 rounded-lg border border-[#E5E7EB] items-center">
            <input
              type="text"
              placeholder="Search product for add"
              className={`outline-0 ${isSun ? "text-white" : "text-black"}`}
            />
            <Search size={20} />
          </div>
          <PublishProduct />
          <SaveDraft />
          <button className="p-3 rounded-lg border border-[#E5E7EB] cursor-pointer">
            <PlusCircle />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[1.26fr_1fr] gap-5 items-start">
        <BasicDetails />
        <UploadProduct />
      </div>
    </div>
  );
}
