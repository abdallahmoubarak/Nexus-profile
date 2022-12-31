import Product from "@/components/Product";

export default function MyAds() {
  const products = new Array(45).fill(1);

  return (
    <div>
      <div className="mx-auto grid p-4 gap-4 grid-cols-6 pt-10 w-[70rem]">
        {products.map(() => (
          <Product name={"Ad Space - Flower - 1,4"} />
        ))}
      </div>
    </div>
  );
}
