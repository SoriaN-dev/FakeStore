
import { getproductdetail } from "@/api/products";
import ProductDetailsClient from "@/components/ProductDetailsClient";

type Props = {
  params: Promise<{ id: number }>
};

export default async function ProductDetails({ params }: Props) {
    const { id } = await params;
  const product = await getproductdetail(id);

  return <ProductDetailsClient product={product} />;
}