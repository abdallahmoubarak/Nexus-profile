import Image from "next/image";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";

export default function Product({ name, price, rating, sold }: productTypes) {
  const router = useRouter();
  return (
    <>
      <div
        className="rounded-lg border border-gray-200 text-center w-40 cursor-pointer"
        onClick={() => router.push("/product")}>
        <div className="rounded-lg border border-gray-200 w-40 flex justify-center align-center p-4">
          <Image src={"/mobile.png"} alt={""} width={100} height={150} />
        </div>
        <div>{name}</div>
        {price && <div>${price}</div>}
        {price && <div>Free Shipping</div>}
        {rating && (
          <div>
            <FaStar /> {rating} • 56 ratings
          </div>
        )}
        {sold && <div>{sold} sold • 17 left</div>}
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
