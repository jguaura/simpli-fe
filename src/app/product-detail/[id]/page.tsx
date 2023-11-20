import { fetchProduct } from "@/app/actions/fetch-bikes";
import ProductDetailWrapper from "@/app/components/ProductDetailWrapper/ProductDetailWrapper";

export default async function ProductDetail( { params: { id },}: {
  params: { id: string }}) {
  const product = await fetchProduct(id);

  return (
    <div>
      <ProductDetailWrapper product={product}/>
    </div>
  )
}