import styles from './page.module.css';
import ProductsWrapper from './components/ProductsWrapper/ProductsWrapper';
import { fetchProducts } from './actions/fetch-products';
import LoadMore from './components/LoadMoreProducts/LoadMoreProducts';

export default async function Home() {
  const products = await fetchProducts(1);
  return (
    <main className={styles.main}>
      <ProductsWrapper products={products} />
      <LoadMore />
    </main>
  );
}
