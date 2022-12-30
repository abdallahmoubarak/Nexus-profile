import Image from "next/image";
import { useRouter } from "next/router";
import Input from "./Input";

export default function TopBar() {
  const router = useRouter();
  return (
    <div className="p-3 flex items-center w-screen justify-between">
      <div className="flex gap-5">
        <Image
          className="cursor-pointer"
          src="/svg/logo.svg"
          alt={""}
          width={30}
          height={30}
        />
        <Image
          className="cursor-pointer"
          src="/svg/burger-icon.svg"
          alt={""}
          width={18}
          height={18}
        />
        <Input placeholder="Flower" />
        <Image
          className="cursor-pointer -translate-x-12"
          src="/svg/search-icon.svg"
          alt={""}
          width={20}
          height={20}
        />
      </div>
      <div className="flex gap-4">
        <Image
          className="cursor-pointer"
          src="/svg/sq-dots.svg"
          alt={""}
          width={20}
          height={20}
          onClick={() => router.push("/")}
        />
        <div
          className="flex justify-center items-center bg-gray-300 w-9 h-9 rounded-full cursor-pointer"
          onClick={() => router.push("/profile")}>
          <Image src={"/SP2.png"} alt={""} width={90} height={90} />
        </div>
      </div>
    </div>
  );
}
