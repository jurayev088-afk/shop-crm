import { useDarkMode } from "../../../../context/DarkMode";

export default function Tranzaction() {
    const { isSun, setIsSun } = useDarkMode()


    const date = new Date("2026-10-01T11:29:00");

    const formattedDate = new Intl.DateTimeFormat('uz-UZ', {
        day: '2-digit',
        month: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(date);
    return (
        <div className={` rounded-lg flex flex-col justify-between  ${ isSun ? "shadow-[0px_1px_3px_0px_gray]" : "shadow-[0px_1px_3px_0px_#00000033]"}`}>
            <div>
                <div className="p-5 flex justify-between items-center mb-5">
                    <h4 className="text-[18px] font-bold">Transaction</h4>
                    <button className="bg-[#4EA674] rounded-md p-[7.5px_12px] text-white">Filter</button>
                </div>
                <table className="w-full mb-9.5 text-left">
                    <thead>
                        <tr className="border-b-1">
                            <th className="px-5 py-2">No</th>
                            <th>Id Customer</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-5 py-2">1</td>
                            <td>#6542</td>
                            <td>{formattedDate}</td>
                            <td>Paid</td>
                            <td>$64</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-2">1</td>
                            <td>#6542</td>
                            <td>{formattedDate}</td>
                            <td>Paid</td>
                            <td>$64</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-2">1</td>
                            <td>#6542</td>
                            <td>{formattedDate}</td>
                            <td>Paid</td>
                            <td>$64</td>
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
