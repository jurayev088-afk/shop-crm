import { HelpCircle } from "lucide-react";
import { useDarkMode } from "../../../../context/DarkMode";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

export default function ProfileChangePassword() {
  const { isSun } = useDarkMode();
  return (
    <div
      className={`rounded-lg p-[16px_20px] ${isSun ? "shadow-[0px_1px_3px_0px_gray]" : "shadow-[0px_1px_3px_0px_#00000033]"}`}
    >
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-[18px]">Change Password</h3>
        <Link to="/dashboard" className="flex gap-2 items-center">
          <span className="text-[14px] text-[#6467F2]">Need help</span>
          <HelpCircle className="text-[#6467F2]" />
        </Link>
      </div>

      <Form>
        <Form.Item
          label={<h3 className="text-[15px]">Current Password</h3>}
          layout="vertical"
        >
          <Input type={"password"} placeholder="Enter password" />
          <Link to="/dashboard">Forgot Current Password? Click here</Link>
        </Form.Item>
        <Form.Item
          label={<h3 className="text-[15px]">New Password</h3>}
          layout="vertical"
        >
          <Input type={"password"} placeholder="Enter password" />
        </Form.Item>
        <Form.Item
          label={<h3 className="text-[15px]">Re-enter Password</h3>}
          layout="vertical"
        >
          <Input type={"password"} placeholder="Enter password" />
        </Form.Item>

        <Button className="w-full bg-[#4EA674]! text-white! font-bold! p-5!">Save Change</Button>
      </Form>
    </div>
  );
}
