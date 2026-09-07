import { Button, Image, Select, Upload, type UploadFile } from "antd";
import { useDarkMode } from "../../../../context/DarkMode";
import { useState } from "react";
import { PictureInPicture2, RefreshCcwIcon } from "lucide-react";
import {
  CloseCircleOutlined,
  PictureOutlined,
  PlusOutlined,
  SyncOutlined,
} from "@ant-design/icons";

export default function UploadProduct() {
  const { isSun, setIsSun } = useDarkMode();

  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "1",
      name: "image1.png",
      status: "done",
      url: "https://minapi.beemarket.uz/prod-media/productImages/1718099428hENpsJcAbGK8.webp",
    },
    {
      uid: "2",
      name: "image2.png",
      status: "done",
      url: "https://tezz.uz/uploads/images/product/594/thumbs/215656_1-10501050.jpg",
    },
    {
      uid: "3",
      name: "image3.png",
      status: "done",
      url: "https://asset.openshop.uz/storage/uploads/products/photos/202301/GaC73um0EwsIcuPWTtHnaBzK7bxMNJvRuKUrpJsg.jpg",
    },
  ]);

  const [selectedImage, setSelectedImage] = useState<string>(
    fileList[0]?.url || "",
  );

  const handleRemove = (product) => {
    setFileList((d) => d.filter(item => item.uid !== product.uid))    
  };

  return (
    <div
      className={`rounded-lg p-6 ${isSun ? "shadow-[0px_1px_3px_0px_gray]" : "shadow-[0px_1px_3px_0px_#00000033]"}`}
    >
      <h2 className="font-bold text-[22px] ">Upload Product Image</h2>
      <h3 className="mt-5 mb-3 font-bold text-[15px]">Product Image</h3>
      <div className="border relative p-3 rounded-lg border-[#E5E7EB]">
        <div className="w-full h-72 flex justify-center items-center">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="Product"
              className="max-h-60 object-contain"
              preview={false}
            />
          ) : (
            <span className="text-gray-400">Rasm yuklanmagan</span>
          )}
        </div>
        <div className="absolute bottom-3 left-3">
          <Upload showUploadList={false} beforeUpload={() => false}>
            <Button
              icon={<PictureOutlined />}
              className={`border  p-[8px_12px] rounded-lg flex items-center gap-2 cursor-pointer border-[#E5E7EB] text-[14px] ${isSun ? "bg-black! text-white!" : "bg-white text-black"}`}
            >
              Browse
            </Button>
          </Upload>
        </div>

        <div className="absolute bottom-3 right-3">
          <Upload showUploadList={false} beforeUpload={() => false}>
            <Button
              icon={<SyncOutlined />}
              className={`rounded-lg border-[#E5E7EB]   ${isSun ? "bg-black! text-white!" : "bg-white text-black"}`}
            >
              Replace
            </Button>
          </Upload>
        </div>
      </div>
      <div className="flex items-center gap-4 flex-wrap mt-5">
        {fileList.map((item) => (
          <div
            key={item?.uid}
            className="w-24 h-24 border p-2 relative flex justify-center items-center rounded-md border-[#E5E7EB]"
            onClick={() => setSelectedImage(item.url || "")}
          >
            <img
              src={item?.url}
              alt={item.name}
              className="w-13 h-13 object-cover"
            />
            <button
              onClick={() => handleRemove(item)}
              className="absolute top-1 right-1 text-gray-400 hover:text-red-500 bg-white rounded-full cursor-pointer"
            >
              <CloseCircleOutlined className="text-lg" />
            </button>
          </div>
        ))}
        <Upload
        listType="picture-card"
        showUploadList={false}
        beforeUpload={() => false}
        className="[&_.ant-upload]:w-24! [&_.ant-upload]:h-24! [&_.ant-upload]:rounded-xl! [&_.ant-upload]:border-dashed!"
        >
          <div className="flex flex-col items-center justify-center text-[#52A77A]">
            <PlusOutlined className="text-xl bg-[#52A77A] text-white p-1 rounded-full mb-1" />
            <span className="text-xs font-semibold">Add Image</span>
          </div>
        </Upload>
      </div>
      <h2 className="font-bold text-[22px] mt-8 mb-5">Categories</h2>
      <div>
        <label className="block text-sm font-medium mb-1.5">Product Categories</label>
        <Select
        placeholder="Select your product"
        className={`p-[15px_12px] rounded-lg w-full ${isSun ? "bg-black! text-white! shadow-[0px_1px_3px_0px_gray" : "shadow-[0px_1px_3px_0px_#00000033"}`}
        options={[
          {value:"electronics", label:"Electronics"},
          {value:"smartphones", label:"Smartphones"}
        ]}
        />
      </div>

      <div className="mt-5 mb-5">
        <label className="block text-sm font-medium mb-1.5">Product Tag</label>
        <Select
        placeholder="Select your product"
        className={`p-[15px_12px] rounded-lg w-full ${isSun ? "bg-black! [&_.ant-select-selection-placeholder]:!text-white text-white! shadow-[0px_1px_3px_0px_gray" : "shadow-[0px_1px_3px_0px_#00000033"}`}
        options={[
          {value:"electronics", label:"Electronics"},
          {value:"smartphones", label:"Smartphones"}
        ]}
        />
      </div>


      <div>
        <label className="font-bold text-[15px] mb-3">Select your color</label>
        <div className="flex gap-3 mt-3">
          <div className="w-12 h-12 bg-[#D7EACB] shadow-[0px_1px_3px_0px_#00000033] rounded-lg"></div>
          <div className="w-12 h-12 bg-[#ECD3D6] shadow-[0px_1px_3px_0px_#00000033] rounded-lg"></div>
          <div className="w-12 h-12 bg-[#D5DDE0] shadow-[0px_1px_3px_0px_#00000033] rounded-lg"></div>
          <div className="w-12 h-12 bg-[#ECE7C9] shadow-[0px_1px_3px_0px_#00000033] rounded-lg"></div>
          <div className="w-12 h-12 bg-[#464A4D] shadow-[0px_1px_3px_0px_#00000033] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
