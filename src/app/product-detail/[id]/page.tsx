import { fetchProduct } from '@/app/actions/fetch-products';
import ProductDetailWrapper from '@/app/product-detail/[id]/_ProductDetailWrapper/ProductDetailWrapper';

export default async function ProductDetail({
  params: { id }
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(id);
  return (
    <>
      <ProductDetailWrapper product={product} />
    </>
  );
}
