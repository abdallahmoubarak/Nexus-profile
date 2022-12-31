import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
export default function ProductDetails() {
  return (
    <div className="w-[30rem] rounded-lg border border-gray-200 text-center">
      <div className="flex align-center justify-between px-4 py-2">
        <div>Unlimitron</div>
        <div className="flex gap-2 align-center">
          <div>. . .</div>
          <div className="cursor-pointer">
            <IoIosArrowBack />
          </div>
          <div className="cursor-pointer">
            <IoIosArrowForward />
          </div>
          <div className="text-lg cursor-pointer">
            <IoIosClose />
          </div>
        </div>
      </div>
    </div>
  );
}
