import Product from "./Product";

export default function ProductsGrid({ hasOptions }: { hasOptions: boolean }) {
  const products = new Array(45).fill(1);
  return (
    <div>
      <div
        className={`mx-auto flex flex-wrap justify-evenly p-4 gap-4  pt-10  flex-auto`}>
        {products.map(() =>
          hasOptions ? (
            <Product
              name={"Thompson 4"}
              price={"144.99"}
              rating={"4.5"}
              sold={"268"}
            />
          ) : (
            <Product name={"Thompson 4"} />
          ),
        )}
      </div>
    </div>
  );
}
