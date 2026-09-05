import { ArrowDown, ArrowUp, MoreVertical } from 'lucide-react'
import { useDarkMode } from '../../../../context/DarkMode'

export default function TotalDashboard() {
    const { isSun, setIsSun } = useDarkMode()
    return (
        <div className={`grid grid-cols-3 w-full gap-5 ${isSun ? "bg-black text-white" : "bg-[#F9FAFB] "}`}>

            <div className={`p-5 w-full rounded-lg ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}>
                <div className="flex justify-between">
                    <h3 className="font-bold text-[18px] ">Total Sales</h3>
                    <MoreVertical />
                </div>
                <p className="font-normal text-[14px]  mt-2 mb-5">Last 7 days</p>
                <h2 className="font-bold text-[32px]  flex gap-4 items-center">$350K <p className="text-[#000000] flex items-center text-[16px]  gap-1">Sales <span className="font-medium flex items-center text-[#21C45D] text-[14px] mb-0"><ArrowUp className="text-[#21C45D]" size={18} /> 10.4%</span></p></h2>
                <p className=" mt-2 text-[14px]">Previous 7days <span className="text-[#6467F2] font-bold">($235)</span></p>
                <div className="text-end">
                    <button className="text-4 mt-4 p-[3px_25px] rounded-[50px] text-[#6467F2] border border-[1px solid #6467F2]">Details</button>
                </div>
            </div>

            <div className={`p-5 w-full rounded-lg ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}>
                <div className="flex justify-between">
                    <h3 className="font-bold text-[18px]">Total Orders</h3>
                    <MoreVertical />
                </div>
                <p className="font-normal text-[14px]  mt-2 mb-5">Last 7 days</p>
                <h2 className="font-bold text-[32px]  flex gap-4 items-center">10.7K <p className="text-[#000000] flex items-center text-[16px]  gap-1">order <span className="font-medium flex items-center text-[#21C45D] text-[14px] mb-0"><ArrowUp className="text-[#21C45D]" size={18} /> 14.4%</span></p></h2>
                <p className="mt-2 text-[14px]">Previous 7days <span className="text-[#6467F2] font-bold">(7.6k)</span></p>
                <div className="text-end">
                    <button className="text-4 mt-4 p-[3px_25px] rounded-[50px] text-[#6467F2] border border-[1px solid #6467F2]">Details</button>
                </div>
            </div>


            <div className={`p-5 w-full rounded-lg ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}>
                <div className="flex justify-between">
                    <h3 className="font-bold text-[18px]">Pending & Canceled</h3>
                    <MoreVertical />
                </div>
                <p className="font-normal text-[14px] mt-2 mb-5">Last 7 days</p>
                <div className="flex gap-6 items-center">
                    <div>
                        <p className="text-[14px] mb-1.75">Pending</p>
                        <h2 className="font-bold text-[32px]  flex gap-4 items-center">509 <span className="font-medium flex items-center text-[#21C45D] text-[16px] mb-0">user 204</span></h2>
                    </div>
                    <div className="border w-px h-8 bg-[#c2c0c0]"></div>
                    <div>
                        <p className="text-[14px] mb-1.75">Canceled</p>
                        <h2 className="font-bold text-[32px] text-[#EF4343] flex gap-4 items-center">94 <span className="font-medium flex items-center text-[#F87272] text-[16px] mb-0"><ArrowDown size={18} className="text-[#F87272]" /> user 204</span></h2>
                    </div>
                </div>
                {/* <p className="text-[#6A717F] mt-2 text-[14px]">Previous 7days <span className="text-[#6467F2] font-bold">($235)</span></p> */}
                <div className="text-end">
                    <button className="text-4 mt-4 p-[3px_25px] rounded-[50px] text-[#6467F2] border border-[1px solid #6467F2]">Details</button>
                </div>
            </div>

        </div>
    )
}
