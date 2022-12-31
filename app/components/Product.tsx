import Image from "next/image";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";

export default function Product({ name, price, rating, sold }: productTypes) {
  const router = useRouter();
  return (
    <>
      <div
        className="rounded-lg border border-gray-200 w-44 cursor-pointer"
        onClick={() => router.push("/product")}>
        <div className="rounded-lg border border-gray-200 w-full flex justify-center align-center p-4">
          <Image src={"/mobile.png"} alt={""} width={100} height={150} />
        </div>
        <div className="pl-2 py-3 flex flex-col gap-1">
          <div>{name}</div>
          {price && <div>${price}</div>}
          {price && <div className="text-gray-500 text-sm">Free Shipping</div>}
          {rating && (
            <div className="flex align-center gap-2 text-gray-500 text-sm">
              <div>
                <FaStar />
              </div>
              <div>{rating} • 56 ratings</div>
            </div>
          )}
          {sold && (
            <div className="text-gray-500 text-sm">{sold} sold • 17 left</div>
          )}
        </div>
      </div>
    </>
  );
}

type productTypes = {
  name: string;
  price?: string;
  rating?: string;
  sold?: string;
};
