import { ChevronRight, PlusCircle } from "lucide-react";
import mashina from '../../../../assets/svg/mashina.svg'
import phone from '../../../../assets/svg/phone.svg'
import { useDarkMode } from "../../../../context/DarkMode";

export default function AddNewProduct() {
    const { isSun, setIsSun } = useDarkMode()

    return (
        <div className={` ${isSun ? "shadow-[0px_1px_3px_0px_gray]" : "shadow-[0px_1px_3px_0px_#00000033]"} p-5 rounded-lg`}>
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="font-bold text-[18px]">Add New Product</h4>
                </div>
                <p className="text-[#6467F2] text-[14px] flex items-center gap-1 "><PlusCircle size={19} /> Add New</p>
            </div>
            <p className="text-[16px] mt-3 font-semibold">Categories</p>
            <div className="mt-3 flex flex-col gap-3">
                <div className="flex justify-between items-center shadow-[0px_1px_3px_0px_#00000033] rounded-md p-1.5 ">
                    <div className="flex gap-3 items-center">
                        <img src={mashina} className="py-2 border border-[#E5E7EB] rounded-sm" alt="" />
                        <h4 className="text-[18px]">Electronic</h4>
                    </div>
                    <ChevronRight />
                </div>

                <div className="flex justify-between items-center shadow-[0px_1px_3px_0px_#00000033] rounded-md p-1.5 ">
                    <div className="flex gap-3 items-center">
                        <img src={mashina} className="py-2 border border-[#E5E7EB] rounded-sm" alt="" />
                        <h4 className="text-[18px]">Electronic</h4>
                    </div>
                    <ChevronRight />
                </div>

                <div className="flex justify-between items-center shadow-[0px_1px_3px_0px_#00000033] rounded-md p-1.5 ">
                    <div className="flex gap-3 items-center">
                        <img src={mashina} className="py-2 border border-[#E5E7EB] rounded-sm" alt="" />
                        <h4 className="text-[18px]">Electronic</h4>
                    </div>
                    <ChevronRight />
                </div>
            </div>
            <div className="text-center mt-4 mb-3">
                <a className="text-[#6467F2]">See more</a>
            </div>
            <p className="text-[16px] mt-3 font-semibold">Product</p>
            <div className="mt-4">
                <div >
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center ">
                            <img src={phone} className="w-14 h-14 object-cover border border-[#E5E7EB] rounded-sm" alt="" />
                            <div>
                                <h4 className="font-medium text-[15px]">Apple iPhone 13</h4>
                                <p className="text-[14px] text-[#4EA674]">$39.99</p>
                            </div>
                        </div>
                        <button className="text-[14px] font-medium flex items-center gap-1 rounded-[50px] p-[7px_12px] bg-[#4EA674] text-white"><PlusCircle size={17} /> Add</button>
                    </div>
                    <div className="w-full h-px bg-[#D1D1D1] mt-3.25"></div>
                </div>

                <div >
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center ">
                            <img src={phone} className="w-14 h-14 object-cover border border-[#E5E7EB] rounded-sm" alt="" />
                            <div>
                                <h4 className="font-medium text-[15px]">Apple iPhone 13</h4>
                                <p className="text-[14px] text-[#4EA674]">$39.99</p>
                            </div>
                        </div>
                        <button className="text-[14px] font-medium flex items-center gap-1 rounded-[50px] p-[7px_12px] bg-[#4EA674] text-white"><PlusCircle size={17} /> Add</button>
                    </div>
                    <div className="w-full h-px bg-[#D1D1D1] mt-3.25"></div>
                </div>

                <div >
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center ">
                            <img src={phone} className="w-14 h-14 object-cover border border-[#E5E7EB] rounded-sm" alt="" />
                            <div>
                                <h4 className="font-medium text-[15px]">Apple iPhone 13</h4>
                                <p className="text-[14px] text-[#4EA674]">$39.99</p>
                            </div>
                        </div>
                        <button className="text-[14px] font-medium flex items-center gap-1 rounded-[50px] p-[7px_12px] bg-[#4EA674] text-white"><PlusCircle size={17} /> Add</button>
                    </div>
                    <div className="w-full h-px bg-[#D1D1D1] mt-3.25"></div>
                </div>


                <div className="text-center mt-4 mb-3">
                    <a className="text-[#6467F2]">See more</a>
                </div>
            </div>
        </div>
    )
}
