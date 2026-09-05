import america from '../../../../assets/svg/america.svg'
import brazil from '../../../../assets/svg/brazil.svg'
import austriya from '../../../../assets/svg/austriya.svg'
import flag from '../../../../assets/img/flag.png'
import { MyRoundedDiagram } from "../../components/layout/Diagramma2";
import { ArrowUp, MoreVertical } from 'lucide-react'
import { useDarkMode } from '../../../../context/DarkMode'
export default function CountryDashboard() {
    const { isSun, setIsSun } = useDarkMode()
    return (
        <div className={`rounded-lg flex flex-col justify-between ${isSun ? "bg-black text-white shadow-[0px_1px_3px_0px_gray]" : "bg-[#F9FAFB] shadow-[0px_1px_3px_0px_#00000033]"}`}>
            <div>
                <div className="flex justify-between items-start p-5">
                    <div>
                        <p className="text-[14px] text-[#6467F2] mb-2">Users in last 30 minutes</p>
                        <h2 className="font-bold text-[32px]">21.5K</h2>
                    </div>
                    <MoreVertical />
                </div>
                <p className="font-medium mt-6 mb-0 pl-5">Users per minute</p>
                <div>
                    <MyRoundedDiagram />
                </div>
                <div className="flex justify-between items-center pt-6 px-5 mb-3">
                    <h4 className="font-semibolt text-[18px]">Sales by Country</h4>
                    <h4 className="font-semibolt text-[18px]">Sales</h4>
                </div>


                <div
                    className=" p-5 flex flex-col gap-6.5 bg-cover bg-center"
                    style={{ backgroundImage: `url(${flag})` }}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <img src={america} className="w-8.5 h-8.5 object-cover rounded-full" alt="" />
                            <div className="">
                                <h4 className="text-[14px] font-bold">30k</h4>
                                <p className="text-[12px]">US</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <p className="text-[#28C76F] text-[14px] flex gap-1 items-center"><ArrowUp size={16} />25.8%</p>
                            <div className="w-45 h-1.5 rounded-[10px] bg-[#F0F3FF]">
                                <div className="h-1.5 rounded-[10px] bg-[#6467F2] w-[25.8%]"></div>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <img src={brazil} className="w-8.5 h-8.5 object-cover rounded-full" alt="" />
                            <div className="">
                                <h4 className="text-[14px] font-bold">30k</h4>
                                <p className="text-[12px]">Brazil</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <p className="text-[#28C76F] text-[14px] flex gap-1 items-center"><ArrowUp size={16} />15.8%</p>
                            <div className="w-45 h-1.5 rounded-[10px] bg-[#F0F3FF]">
                                <div className="h-1.5 rounded-[10px] bg-[#6467F2] w-[15.8%]"></div>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <img src={austriya} className="w-8.5 h-8.5 object-cover rounded-full" alt="" />
                            <div className="">
                                <h4 className="text-[14px] font-bold">25k</h4>
                                <p className="text-[12px]">Australia</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <p className="text-[#28C76F] text-[14px] flex gap-1 items-center"><ArrowUp size={16} />35.8%</p>
                            <div className="w-45 h-1.5 rounded-[10px] bg-[#F0F3FF]">
                                <div className="h-1.5 rounded-[10px] bg-[#6467F2] w-[35.8%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="border border-[#6467F2]  w-[calc(100%-40px)] m-[5px_20px_16px] py-[7.5px] rounded-[50px]">View Insight</button>
        </div>
    )
}
