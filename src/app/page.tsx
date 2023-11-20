import styles from './page.module.css';
import ProductsWrapper from './components/ProductsWrapper/ProductsWrapper';
import { fetchBikes } from './actions/fetch-products';
import LoadMore from './components/LoadMoreProducts/LoadMoreProducts';

export default async function Home() {
  const bikes = await fetchBikes(1);
  return (
    <main className={styles.main}>
      <ProductsWrapper bikes={bikes} />
      <LoadMore />
    </main>
  );
}
