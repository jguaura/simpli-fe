import { fetchProducts } from '../actions/fetch-products';
import LoadMoreProducts from '../components/LoadMoreProducts/LoadMoreProducts';
import ProductsWrapper from '../components/Shared/ProductsWrapper/ProductsWrapper';

export default async function Products() {
  const route = '/products';
  const products = await fetchProducts(1, route);
  return (
    <main>
      <ProductsWrapper products={products} />
      <LoadMoreProducts />
    </main>
  );
}
