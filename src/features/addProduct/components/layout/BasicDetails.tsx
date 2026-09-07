import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
} from "antd";
import { useDarkMode } from "../../../../context/DarkMode";
import PublishProduct from "./PublishProduct";
import SaveDraft from "./SaveDraft";

export default function BasicDetails() {
  const { isSun, setIsSun } = useDarkMode();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div
      className={`rounded-lg p-6 ${isSun ? "shadow-[0px_1px_3px_0px_gray]" : "shadow-[0px_1px_3px_0px_#00000033]"}`}
    >
      <h2 className="font-bold text-[22px] mb-6">Basic Details</h2>

      <Form
        layout="vertical"
        requiredMark={false}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label={
            <label
              className={`text-[15px] font-bold ${isSun ? "text-white" : "text-black"}`}
            >
              Product Name
            </label>
          }
          layout="vertical"
          name="product"
          rules={[{ required: true, message: "Product kiriting!" }]}
        >
          <Input
            type="text"
            placeholder="iPhone 15"
            className={`p-[15px_12px]! ${
              isSun
                ? "bg-black! text-white! [&_input]:text-white! placeholder:text-gray-400!"
                : "bg-white! text-black"
            }`}
          />
        </Form.Item>

        <Form.Item
          label={
            <label
              className={`text-[15px] font-bold  ${isSun ? "text-white" : "text-black"}`}
            >
              Product Description
            </label>
          }
          layout="vertical"
          name="description"
          rules={[{ required: true, message: "Description kiriting!" }]}
        >
          <Input
            type="text"
            placeholder="Description"
            className={`p-[15px_12px]!  ${isSun ? "bg-black! text-white! placeholder:text-gray-400!" : "text-black"}`}
          />
        </Form.Item>

        <h2
          className={`font-bold text-[22px] mt-8 mb-6  ${isSun ? "text-white" : "text-black"}`}
        >
          Pricing
        </h2>

        <Form.Item
          label={
            <label
              className={`text-[15px] font-bold  ${isSun ? "text-white" : "text-black"}`}
            >
              Product Price
            </label>
          }
          layout="vertical"
          name="price"
          rules={[{ required: true, message: "Price kiriting!" }]}
        >
          <Input
            type="number"
            placeholder="$999.89"
            className={`p-[15px_12px]!  ${isSun ? "text-white! bg-black! placeholder:text-gray-400!" : "text-black"}`}
          />
        </Form.Item>

        <div className="grid grid-cols-[1.26fr_1fr] gap-6 items-start">
          <Form.Item
            label={
              <span
                className={`font-bold!  ${isSun ? "text-white" : "text-black"}`}
              >
                Discounted Price{" "}
                <span className="text-gray-400 font-bold!">(Optional)</span>
              </span>
            }
            required={false}
          >
            <div
              className={`flex items-center justify-between p-2.5!  ${isSun ? "text-white! bg-black! border! rounded-md" : "text-black border! border-[#d9d9d9]! bg-white! rounded-md"}`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-[#042F2C]  ${isSun ? "text-white bg-gray-400" : "text-gray-400"}`}
                >
                  $
                </div>
                <InputNumber
                  defaultValue={99}
                  controls={false}
                  variant="borderless"
                  className={`w-20 ${
                    isSun
                      ? "text-white! [&_input]:text-white!"
                      : "text-gray-400! [&_input]:text-gray-400!"
                  }`}
                />
              </div>
              <span className={` ${isSun ? "text-white!" : "text-gray-400!"}`}>
                Sale= $900.89
              </span>
            </div>
          </Form.Item>

          <Form.Item
            label={
              <span
                className={` font-bold! ${isSun ? "text-white!" : "text-black!"}`}
              >
                Tax Included
              </span>
            }
            required={false}
          >
            <Radio.Group defaultValue="yes" className="flex! flex-col! gap-1">
              <Radio
                value="yes"
                className={`font-semibold! ${isSun ? "text-white!" : "text-black!"}`}
              >
                Yes
              </Radio>
              <Radio
                value="no"
                className={`font-semibold! ${isSun ? "text-white!" : "text-black!"}`}
              >
                No
              </Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <h2
          className={`font-bold text-[15px] mb-3 ${isSun ? "text-white!" : "text-black!"}`}
        >
          Pricing
        </h2>
        

        <div className="grid grid-cols-2 gap-5">
          <Form.Item name="startDate" layout="vertical" className="mb-0">
            <DatePicker
              placeholder="Start"
              className={`w-full py-2.5! px-3! ${
                isSun
                  ? "bg-black! text-white! [&_input]:text-white! [&_input::placeholder]:text-gray-400! [&_.ant-picker-suffix]:text-white!"
                  : "bg-white! text-black! [&_input]:text-black! [&_input::placeholder]:text-gray-400!"
              }`}
            />
          </Form.Item>

          <Form.Item name="endDate" layout="vertical" className="mb-0">
            <DatePicker
              placeholder="End"
              className={`w-full py-2.5! px-3! ${
                isSun
                  ? "bg-black! text-white! [&_input]:text-white! [&_input::placeholder]:text-gray-400! [&_.ant-picker-suffix]:text-white!"
                  : "bg-white! text-black! [&_input]:text-black! [&_input::placeholder]:text-gray-400!"
              }`}
            />
          </Form.Item>
        </div>

        <h2
          className={`font-bold text-[22px] mb-5 mt-8 ${isSun ? "text-white!" : "text-black!"}`}
        >
          Inventory
        </h2>

        <div className="grid grid-cols-[1fr_1fr] gap-5">
          <Form.Item
            label={
              <span
                className={` font-bold! mb-3! ${isSun ? "text-white!" : "text-black!"}`}
              >
                Stock Quantity
              </span>
            }
            layout="vertical"
            name="stock"
            rules={[{ required: true, message: "Stock kiriting!" }]}
          >
            <Input
              type="number"
              placeholder="Unlimited"
              className={`p-[15px_12px]!  ${isSun ? "text-white! bg-black! placeholder:text-gray-400!" : "text-black"}`}
            />
          </Form.Item>

          <Form.Item
            label={
              <span
                className={` font-bold! mb-3! ${isSun ? "text-white!" : "text-black!"}`}
              >
                Stock Status
              </span>
            }
            layout="vertical"
            name="status"
            rules={[{ required: true, message: "Status kiriting!" }]}
          >
            <Select
              defaultValue="On Backorder"
              options={[
                { value: "On Backorder", label: "On Backorder" },
                { value: "In Stock", label: "In Stock" },
              ]}
              style={{
                backgroundColor: isSun ? "#000000" : "#ffffff",
                color: isSun ? "white" : "black",
              }}
              className={`w-full p-[15px_12px]! ${isSun ? "[&_.ant-select-selector]:border-[white]!" : "text-black"}`}
            />
          </Form.Item>
        </div>

        <div className="flex items-center gap-3">
          <Switch defaultChecked />
          <span
            className={`font-semibold text-lg ${isSun ? "text-white" : "text-[#042F2C]"}`}
          >
            Unlimited
          </span>
        </div>

        <Checkbox defaultChecked className=" mt-5!">
          <span
            className={`text-md font-medium ml-1 ${isSun ? "text-white!" : "text-black!"}`}
          >
            Highlight this product in a featured section.
          </span>
        </Checkbox>

        <div className="flex justify-end gap-3 mt-8">
          <SaveDraft />
          <PublishProduct />
        </div>
      </Form>
    </div>
  );
}
