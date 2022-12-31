import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
export default function ProductDetails() {
  return (
    <div className="flex-auto w-[30rem] rounded-lg border border-gray-200 text-center min-w-[30rem]">
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
      <div className="flex justify-center align-center border-gray-200 border-t border-b p-4">
        <Image src="/mobile.png" alt="" width={300} height={300} />
      </div>
      <div className="flex justify-between items-center p-1">
        <div className="flex gap-2 items-center">
          <div className="border border-gray-200 rounded-full w-max p-1">
            <Image src="/svg/logo.svg" alt="" width={20} height={20} />
          </div>
          <div>546.89 X</div>
        </div>
        <div className="border border-gray-200 rounded-xl px-2 py-0 cursor-pointer">
          Buy
        </div>
      </div>
      <div className="text-left px-4 py-2">{text}</div>
    </div>
  );
}

const text: string = `50% Cotton, 50% Polyester
Imported
Machine Wash
A HEAVYWEIGHT CHAMPION - Hanes sweatshirts for men are made from soft, plush, 9.7-oz. heavyweight fleece for cozy warmth.
THE FIT YOU LOVE – These men’s workout sweatshirt boast a standard fit with dropped shoulders for a little extra room.
OVER EASY - Classic men's crew sweatshirt never goes out of style.
QUALITY FABRIC - The heavyweight cotton-rich fleece is made with Hanes' 
A HEAVYWEIGHT CHAMPION - Hanes sweatshirts for men are made from soft, plush, 9.7-oz. heavyweight fleece for cozy warmth.
THE FIT YOU LOVE – These men’s workout sweatshirt boast a standard fit with dropped shoulders for a little extra room.
`;
