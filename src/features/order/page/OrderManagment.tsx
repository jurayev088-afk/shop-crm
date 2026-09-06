import { ArrowUpDown, ListFilter, MoreHorizontal, MoreVertical, Search } from "lucide-react";
import { useDarkMode } from "../../../context/DarkMode";
import OrderManagementTable from "../components/layout/OrderManagmentTable";
import { useState } from "react";
import AddOrderManagment from "../components/layout/AddOrderManagment";
import TotalOrderManagment from "../components/layout/TotalOrderManagment";

export default function OrderManagment() {
  const { isSun } = useDarkMode();
  const allOrder = [
    { id: 1, label: "All order" },
    { id: 2, label: "Completed" },
    { id: 3, label: "Pending" },
    { id: 4, label: "Canceled" },
  ];
  const [activeTab, setActiveTab] = useState(allOrder[0]?.id);
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-[22px] ">Order List</h2>
        <div className="flex gap-3 items-center">
          <AddOrderManagment />
          <button className="p-[15px_22px] cursor-pointer rounded-lg border flex items-center gap-1 border-[#E5E7EB]">
            More Action <MoreVertical />
          </button>
        </div>
      </div>
      <div>
        <TotalOrderManagment />
      </div>
      <div
        className={`w-[ca] -z-30 rounded-lg p-6 ${isSun ? "bg-black shadow-[0px_1px_3px_0px_gray]" : "bg-white shadow-[0px_1px_3px_0px_#00000033]"}`}
      >
        <div className="flex justify-between items-center mb-10">
          <div className="p-1.5 bg-[#EAF8E7] rounded-md flex gap-7">
            {allOrder.map((item) => {
              const isActive = activeTab == item.id;

              return (
                <h4
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
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
            <ArrowUpDown  />
            </div>

            <div className="p-2.5 cursor-pointer rounded-sm border border-[#D1D5DB]">
            <MoreHorizontal  />
            </div>
          </div>
        </div>
        <OrderManagementTable />
      </div>
    </div>
  );
}
