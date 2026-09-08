import { useDarkMode } from "../../../../context/DarkMode";
import { SquarePen } from "lucide-react";
import user from "../../../../assets/img/photo.jpg";
import { Form } from "antd";
import { Input } from "antd";

export default function ProfileUpdate() {
  const { isSun } = useDarkMode();
  return (
    <div
      className={`rounded-lg p-[16px_20px] ${isSun ? "shadow-[0px_1px_3px_0px_gray]" : "shadow-[0px_1px_3px_0px_#00000033]"}`}
    >
      <div className="flex justify-between items-center ">
        <h3 className="font-bold text-[18px]">Profile Update</h3>
        <div className="flex gap-2 items-center rounded-md border border-[#E5E7EB] p-[7px_14px]">
          <SquarePen size={18} />
          <span className="text-[15px]">Edit</span>
        </div>
      </div>
      <div className="flex gap-6 mt-5 mb-8 items-center">
        <img
          src={user}
          className="w-16 h-16 object-cover rounded-full "
          alt=""
        />
        <div className="flex gap-3 items-center">
          <button className="p-[12px_19px] bg-[#4EA674] text-white rounded-lg">
            Upload New
          </button>
          <button className="p-[12px_19px] border border-[#E5E7EB] rounded-lg">
            Delete
          </button>
        </div>
      </div>

      <Form>
        <div className="grid grid-cols-[1fr_1fr] gap-5">
          <Form.Item
            label={<h3 className="text-[15px]">First Name</h3>}
            name="name"
            layout="vertical"
          >
            <Input type={"text"} placeholder="Wade" />
          </Form.Item>

          <Form.Item
            label={<h3 className="text-[15px]">Last Name</h3>}
            name="lastName"
            layout="vertical"
          >
            <Input type={"text"} placeholder="Warren" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-5">
          <Form.Item
            label={<h3 className="text-[15px]">Password</h3>}
            name="password"
            layout="vertical"
          >
            <Input type={"password"} placeholder="***********" />
          </Form.Item>

          <Form.Item
            label={<h3 className="text-[15px]">Phone Number</h3>}
            name="phone"
            layout="vertical"
          >
            <Input type={"number"} placeholder="(406) 555-0120" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-5">
          <Form.Item
            label={<h3 className="text-[15px]">E-mail</h3>}
            name="email"
            layout="vertical"
          >
            <Input type={"email"} placeholder="wade.warren@example.com" />
          </Form.Item>

          <Form.Item
            label={<h3 className="text-[15px]">Date of Birth</h3>}
            name="date"
            layout="vertical"
          >
            <Input type={"date"} />
          </Form.Item>
        </div>

        <Form.Item
          label={<h3 className="text-[15px]">Location</h3>}
          name="location"
          layout="vertical"
        >
          <Input
            type={"text"}
            placeholder="2972 Westheimer Rd. Santa Ana, Illinois 85486 "
          />
        </Form.Item>

        <Form.Item
          label={<h3 className="text-[15px]">Biography</h3>}
          name="location"
          layout="vertical"
        >
          <Input
            type={"text"}
            className="p-[12px_12px_80px]!"
            placeholder="Enter a biography about you"
          />
        </Form.Item>
      </Form>
    </div>
  );
}
