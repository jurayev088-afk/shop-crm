import { MoreVertical } from 'lucide-react'
import React, { useState } from 'react'
import CustomersDiagramma from './CustomersDiagramma'
import { useDarkMode } from '../../../context/DarkMode'

export default function CustomersOverwiev() {
    const {isSun,setIsSun} = useDarkMode()
    const [week2, setWeek2] = useState(false)
  return (
      <div className={` rounded-lg p-4 ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}>
            <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-[18px]">Customer Overview</h4>
                <div className="flex gap-2 items-center">
                    <div className="bg-[#EAF8E7] rounded-xl flex gap-1 p-1">
                        <p onClick={() => setWeek2(!week2)} className={`font-medium cursor-pointer text-3 p-[8px_12px] rounded-lg ${week2 ? "text-[#6A717F]" : "bg-white text-[#4EA674]"}`}>This week</p>
                        <p onClick={() => setWeek2(!week2)} className={`font-medium cursor-pointer text-3 p-[8px_12px] rounded-lg  ${week2 ? "bg-white text-[#4EA674]" : "text-[#6A717F]"}`}>Last week</p>
                    </div>
                    <MoreVertical />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mb-5">

                <div>
                    <h3 className="font-bold text-[26px] mb-2">52k</h3>
                    <p className="font-medium text-[15px] mb-4">Customers</p>
                    <div className="w-full h-0.5 bg-[#4EA674]"></div>
                </div>

                <div>
                    <h3 className="font-bold text-[26px] mb-2">52k</h3>
                    <p className="font-medium text-[15px] mb-4">Customers</p>
                    <div className="w-full h-0.5 bg-[#4EA674]"></div>
                </div>

                <div>
                    <h3 className="font-bold text-[26px] mb-2">52k</h3>
                    <p className="font-medium text-[15px] mb-4">Customers</p>
                    <div className="w-full h-0.5 bg-[#4EA674]"></div>
                </div>

                <div>
                    <h3 className="font-bold text-[26px] mb-2">52k</h3>
                    <p className="font-medium text-[15px] mb-4">Customers</p>
                    <div className="w-full h-0.5 bg-[#4EA674]"></div>
                </div>
            </div>
            <CustomersDiagramma />
        </div>
  )
}
