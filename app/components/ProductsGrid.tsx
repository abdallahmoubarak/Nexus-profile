import Product from "./Product";

export default function ProductsGrid() {
  const products = new Array(45).fill(1);
  return (
    <div>
      <div className="mx-auto grid p-4 gap-4 grid-cols-6 pt-10 w-[70rem]">
        {products.map(() => (
          <Product name={"Thompson 4"} />
        ))}
      </div>
    </div>
  );
}
