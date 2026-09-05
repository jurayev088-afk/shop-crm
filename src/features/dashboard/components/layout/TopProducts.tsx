import { Search } from "lucide-react";
import phone from '../../../../assets/svg/phone.svg'
import { useDarkMode } from "../../../../context/DarkMode";

export default function TopProducts() {
      const { isSun, setIsSun } = useDarkMode()
    
    return (
        <div className={` p-5 rounded-lg ${ isSun ? "shadow-[0px_1px_3px_0px_gray]" : "shadow-[0px_1px_3px_0px_#00000033]"}`}>
            <div className="flex justify-between items-center">
                <h4 className="font-bold text-[18px]">Top Products</h4>
                <p className="text-[#6467F2] text-[12px]">All product</p>
            </div>
            <div className="flex gap-2 items-center p-2 mt-3 rounded-md bg-[#f6f6f6] w-full">
                <Search size={17} className="text-black" />
                <input type="text" className="outline-0 text-black" placeholder="Search" />
            </div>
            <div className="mt-4">
                <div >
                    <div className="flex items-center justify-between">
                        <img src={phone} className="w-14 h-14 object-cover" alt="" />
                        <div className="flex flex-col">
                            <h4 className="font-medium text-[15px]">Apple iPhone 13</h4>
                            <p className="text-[12px] ">Item: #FXZ-4567</p>
                        </div>
                        <h4 className="font-bold text-[15px]">$999.00</h4>
                    </div>
                    <div className="w-full h-px bg-[#D1D1D1] mt-3.25"></div>
                </div>

                <div >
                    <div className="flex items-center justify-between">
                        <img src={phone} className="w-14 h-14 object-cover" alt="" />
                        <div className="flex flex-col">
                            <h4 className="font-medium text-[15px]">Apple iPhone 13</h4>
                            <p className="text-[12px] ">Item: #FXZ-4567</p>
                        </div>
                        <h4 className="font-bold text-[15px]">$999.00</h4>
                    </div>
                    <div className="w-full h-px bg-[#D1D1D1] mt-3.25"></div>
                </div>

                

                <div >
                    <div className="flex items-center justify-between">
                        <img src={phone} className="w-14 h-14 object-cover" alt="" />
                        <div className="flex flex-col">
                            <h4 className="font-medium text-[15px]">Apple iPhone 13</h4>
                            <p className="text-[12px] ">Item: #FXZ-4567</p>
                        </div>
                        <h4 className="font-bold text-[15px]">$999.00</h4>
                    </div>
                    <div className="w-full h-px bg-[#D1D1D1] mt-3.25"></div>
                </div>
            </div>
        </div>
    )
}
