import { useDarkMode } from "../../../context/DarkMode";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function LoginPage() {
  const { isSun } = useDarkMode();

  return (
    <div
      className={`w-full h-screen flex justify-center items-center transition-colors duration-300 ${
        isSun ? "bg-[#090D16] text-white" : "bg-[#F4F6F8] text-[#042F2C]"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-xl transition-all border ${
          isSun
            ? "bg-[#111827] border-[#1F2937] shadow-black/40"
            : "bg-white border-[#E5E7EB] shadow-gray-200/50"
        }`}
      >
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl mb-2">Xush kelibsiz!</h1>
          <p className="text-sm text-gray-400">
            Tizimga kirish uchun ma'lumotlaringizni kiriting
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-sm ml-1">Username</label>
            <Input
              size="large"
              placeholder="Username kiriting"
              prefix={<UserOutlined className="text-gray-400 mr-1" />}
              className={`h-11! rounded-xl! font-semibold! ${
                isSun
                  ? "bg-[#1F2937]! border-[#374151]! text-white! [&_input]:text-white! [&_input::placeholder]:text-gray-500!"
                  : "bg-gray-50! border-[#E5E7EB]! text-black!"
              }`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-sm ml-1">Parol</label>
            <Input.Password
              size="large"
              placeholder="Parolni kiriting"
              prefix={<LockOutlined className="text-gray-400 mr-1" />}
              className={`h-11! rounded-xl! font-semibold! ${
                isSun
                  ? "bg-[#1F2937]! border-[#374151]! text-white! [&_input]:text-white! [&_input::placeholder]:text-gray-500! [&_.ant-input-password-icon]:text-gray-400!"
                  : "bg-gray-50! border-[#E5E7EB]! text-black!"
              }`}
            />
          </div>

          <Button
            type="primary"
            htmlType="submit"
            className="w-full h-11! rounded-xl! bg-[#52A77A]! hover:bg-[#428a63]! border-none! font-semibold! text-base! text-white! mt-2 shadow-md shadow-[#52A77A]/20 transition-all active:scale-[0.98]"
          >
            Kirish
          </Button>
        </form>
      </div>
    </div>
  );
}