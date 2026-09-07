import {
  ArrowUpDown,
  ListFilter,
  MoreHorizontal,
  MoreVertical,
  Search,
} from "lucide-react";
import AddCategoies from "../components/layout/AddCategoies";
import CategoryList from "../components/layout/CategoriesPages";
import TableCategories from "../components/layout/TableCategories";
import { useDarkMode } from "../../../context/DarkMode";
import { useState } from "react";

export default function Categories() {
  const { isSun, setIsSun } = useDarkMode();
  const allProduct = [
    { id: 1, label: "All Product" },
    { id: 2, label: "Featured Products" },
    { id: 3, label: "On Sale" },
    { id: 4, label: "Out of Stock" },
  ];
  const [activeProduct, setActiveProduct] = useState(allProduct[0]?.id);
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-[22px] ">Discover</h2>
        <div className="flex gap-3 items-center">
          <AddCategoies />
          <button className="p-[15px_22px] cursor-pointer rounded-lg border flex items-center gap-1 border-[#E5E7EB]">
            More Action <MoreVertical />
          </button>
        </div>
      </div>
      <CategoryList />
      <div
        className={`w-[ca] -z-30 rounded-lg p-6 ${isSun ? "bg-black shadow-[0px_1px_3px_0px_gray]" : "bg-white shadow-[0px_1px_3px_0px_#00000033]"}`}
      >
        <div className="flex justify-between items-center mb-10">
          <div className="p-1.5 bg-[#EAF8E7] rounded-md flex gap-7">
            {allProduct.map((item) => {
              const isActive = activeProduct == item.id;

              return (
                <h4
                  key={item.id}
                  onClick={() => setActiveProduct(item.id)}
                  className={`font-medium text-[black] cursor-pointer text-[15px] p-[6px_12px] rounded-md transition-all ${
                    isActive ? "bg-white shadow-sm" : "bg-transparent"
                  }`}
                >
                  {item.label}
                </h4>
              );
            })}
          </div>
          <div className="flex gap-3 ">
            <div className="p-2 rounded-lg bg-[#F9FAFB] flex items-center justify-between">
              <input
                type="text"
                className="outline-0"
                placeholder="Search order report"
              />
              <Search />
            </div>
            <div className="p-2.5 cursor-pointer rounded-sm border border-[#D1D5DB]">
              <ListFilter />
            </div>

            <div className="p-2.5 cursor-pointer rounded-sm border border-[#D1D5DB]">
              <ArrowUpDown />
            </div>

            <div className="p-2.5 cursor-pointer rounded-sm border border-[#D1D5DB]">
              <MoreHorizontal />
            </div>
          </div>
        </div>
        <TableCategories />
      </div>
    </div>
  );
}
