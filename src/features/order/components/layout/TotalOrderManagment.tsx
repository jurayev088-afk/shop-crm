import { ArrowUp, MoreVertical } from "lucide-react";
import { useDarkMode } from "../../../../context/DarkMode";

export default function TotalOrderManagment() {
  const { isSun, setIsSun } = useDarkMode();
  return (
    <div className="mb-5 grid grid-cols-4 gap-4">
      <div
        className={`p-5 w-full rounded-lg ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-[18px] ">Total Sales</h3>
          <MoreVertical />
        </div>
        <h2 className="font-bold text-[32px] mb-0 flex gap-2 items-center">
          1,240
          <span className="font-medium flex items-center text-[#21C45D] text-[14px] mb-0">
            <ArrowUp className="text-[#21C45D]" size={18} /> 10.4%
          </span>
        </h2>
        <p className="font-normal text-[14px]  mt-2 mb-5">Last 7 days</p>
      </div>

      <div
        className={`p-5 w-full rounded-lg ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-[18px] ">New Orders</h3>
          <MoreVertical />
        </div>
        <h2 className="font-bold text-[32px] mb-0 flex gap-2 items-center">
          240
          <span className="font-medium flex items-center text-[#21C45D] text-[14px] mb-0">
            <ArrowUp className="text-[#21C45D]" size={18} /> 10.4%
          </span>
        </h2>
        <p className="font-normal text-[14px]  mt-2 mb-5">Last 7 days</p>
      </div>

      <div
        className={`p-5 w-full rounded-lg ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-[18px] ">Completed Orders</h3>
          <MoreVertical />
        </div>
        <h2 className="font-bold text-[32px] mb-0 flex gap-2 items-center">
          960
          <span className="font-medium flex items-center text-[#21C45D] text-[14px] mb-0">
            <ArrowUp className="text-[#21C45D]" size={18} /> 10.4%
          </span>
        </h2>
        <p className="font-normal text-[14px]  mt-2 mb-5">Last 7 days</p>
      </div>

      <div
        className={`p-5 w-full rounded-lg ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-[18px] ">Canceled Orders</h3>
          <MoreVertical />
        </div>
        <h2 className="font-bold text-[32px] mb-0 flex gap-2 items-center">
          87
          <span className="font-medium flex items-center text-[#21C45D] text-[14px] mb-0">
            <ArrowUp className="text-[#21C45D]" size={18} /> 10.4%
          </span>
        </h2>
        <p className="font-normal text-[14px]  mt-2 mb-5">Last 7 days</p>
      </div>
    </div>
  );
}
