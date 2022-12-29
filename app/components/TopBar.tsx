import Image from "next/image";

export default function TopBar() {
  return (
    <div className="p-2 flex items-center w-screen justify-between">
      <div className="flex gap-5">
        <Image
          className="cursor-pointer"
          src="/logo.svg"
          alt={""}
          width={30}
          height={30}
        />
        <Image
          className="cursor-pointer"
          src="/burger-icon.svg"
          alt={""}
          width={18}
          height={18}
        />
        <input
          className="rounded-full shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] w-96 outline-none py-1 px-4"
          placeholder="Flower"
        />
        <Image
          className="cursor-pointer -translate-x-12"
          src="/search-icon.svg"
          alt={""}
          width={20}
          height={20}
        />
      </div>
      <div className="flex gap-4">
        <Image
          className="cursor-pointer"
          src="/sq-dots.svg"
          alt={""}
          width={20}
          height={20}
        />
        <div className="flex justify-center items-center bg-gray-300 w-9 h-9 rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
}
