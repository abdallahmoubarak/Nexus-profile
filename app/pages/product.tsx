import ProductDetails from "@/components/ProductDetails";
import ProductsGrid from "@/components/ProductsGrid";
import TopBar from "@/components/TopBar";
import Head from "next/head";

export default function ProductPage() {
  return (
    <div>
      <Head>
        <title>Product</title>
        <meta name="description" content="Generated by Nexus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <div className="p-4 w-screen">
        <div className="flex items-start">
          <ProductsGrid hasOptions={true} />
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}
