import { useState } from 'react'
import AreaChartExample from './Diagramma'
import { MoreVertical } from 'lucide-react'
import { useDarkMode } from '../../../../context/DarkMode'

export default function ReportDashboard() {
    const { isSun, setIsSun } = useDarkMode()
    const [week, setWeek] = useState(false)
    console.log(week);
    return (
        <div className={` rounded-lg p-5 ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}>
            <div className="flex justify-between items-center mb-5">
                <h4 className="font-bold text-[18px]">Report for this week</h4>
                <div className="flex gap-2 items-center">
                    <div className="bg-[#EAF8E7] rounded-xl flex gap-1 p-1">
                        <p onClick={() => setWeek(!week)} className={`font-medium cursor-pointer text-3 p-[8px_12px] rounded-lg ${week ? "text-[#6A717F]" : "bg-white text-[#4EA674]"}`}>This week</p>
                        <p onClick={() => setWeek(!week)} className={`font-medium cursor-pointer text-3 p-[8px_12px] rounded-lg  ${week ? "bg-white text-[#4EA674]" : "text-[#6A717F]"}`}>Last week</p>
                    </div>
                    <MoreVertical />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-5 mb-10">
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

                <div>
                    <h3 className="font-bold text-[26px] mb-2">52k</h3>
                    <p className="font-medium text-[15px] mb-4">Customers</p>
                    <div className="w-full h-0.5 bg-[#4EA674]"></div>
                </div>
            </div>
            <AreaChartExample />
        </div>
    )
}
