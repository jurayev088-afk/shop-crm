import { Save } from "lucide-react";
import { useDarkMode } from "../../../../context/DarkMode";

export default function SaveDraft() {
  const { isSun, setIsSun } = useDarkMode();
  return (
    <div>
      <button
        className={`p-[15px_22px] cursor-pointer rounded-lg border font-semibold flex items-center gap-1 border-[#E5E7EB] ${isSun ? "text-white" : "text-black"}`}
      >
        <Save size={21} /> Save to draft
      </button>
    </div>
  );
}
