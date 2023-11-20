import { fetchProducts } from "../actions/fetch-products";
import LoadMoreProducts from "../components/LoadMoreProducts/LoadMoreProducts";
import ProductsWrapper from "../components/Shared/ProductsWrapper/ProductsWrapper";

export default async function Accesories() {
  const route = '/accesories'
  const accesories = await fetchProducts(1, route);
  return (
    <>
      <ProductsWrapper products={accesories} />
      <LoadMoreProducts />
    </>
  );
}
