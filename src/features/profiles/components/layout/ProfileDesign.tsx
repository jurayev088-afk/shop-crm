import { Copy, Share, Share2, SquarePen } from "lucide-react";
import { useDarkMode } from "../../../../context/DarkMode";
import user from "../../../../assets/img/photo.jpg";

export default function ProfileDesign() {
  const { isSun } = useDarkMode();
  return (
    <div
      className={` rounded-lg p-[16px_20px] ${isSun ? "shadow-[0px_1px_3px_0px_gray]" : "shadow-[0px_1px_3px_0px_#00000033]"}`}
    >
      <div className="flex justify-between items-center ">
        <h3 className="font-bold text-[18px]">Profile</h3>
        <div className="flex gap-2 items-center ">
          <SquarePen size={18} />
          <Share2 size={18} />
        </div>
      </div>

      <div className="flex flex-col items-center mt-1">
        <img
          src={user}
          className="w-24 h-24 object-cover mb-2 rounded-full"
          alt=""
        />
        <h3 className="font-bold text-[18px] mb-1">Wade Warren</h3>
        <div className="flex gap-4 items-center mb-5">
          <p className="text-[14px]">wade.warren@example.com</p>
          <Copy />
        </div>
        
      </div>
    </div>
  );
}
