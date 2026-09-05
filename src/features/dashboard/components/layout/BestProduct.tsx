import phone from '../../../../assets/svg/phone.svg'
import { useDarkMode } from '../../../../context/DarkMode'

export default function BestProduct() {
    const { isSun, setIsSun } = useDarkMode()

    return (
        <div className={`rounded-lg p-5 flex flex-col justify-between  ${ isSun ? "shadow-[0px_1px_3px_0px_gray]" : "shadow-[0px_1px_3px_0px_#00000033]"}`}>
            <div>
                <div className=" flex justify-between items-center mb-5">
                    <h4 className="text-[18px] font-bold">Best selling product</h4>
                    <button className="bg-[#4EA674] rounded-md p-[7.5px_12px] text-white">Filter</button>
                </div>
                <table className="w-full mb-9.5 text-left">
                    <thead className='rounded-md'>
                        <tr className="bg-[#EAF8E7]">
                            <th className="px-8 py-2 rounded-l-md text-[#6A717F]">Product</th>
                            <th className='text-[#6A717F]'>Total Order</th>
                            <th className='text-[#6A717F]'>Status</th>
                            <th className='rounded-r-md text-[#6A717F]'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-5 flex gap-2 items-center py-2">
                                <img src={phone} className='rounded-md' alt="" />
                                Apple iPhone 13</td>
                            <td>104</td>
                            <td>Stock</td>
                            <td>$999.00</td>
                        </tr>

                        <tr>
                            <td className="px-5 flex gap-2 items-center py-2">
                                <img src={phone} className='rounded-md' alt="" />
                                Apple iPhone 13</td>
                            <td>104</td>
                            <td>Stock</td>
                            <td>$999.00</td>
                        </tr>

                        <tr>
                            <td className="px-5 flex gap-2 items-center py-2">
                                <img src={phone} className='rounded-md' alt="" />
                                Apple iPhone 13</td>
                            <td>104</td>
                            <td>Stock</td>
                            <td>$999.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-end">
                <button className="rounded-[50px] mb-5 mr-5 text-[#6467F2] p-[3px_25px] text-[16px] border border-[#6467F2]">Details</button>
            </div>
        </div>
    )
}
