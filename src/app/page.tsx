import styles from './page.module.css';
import ProductsWrapper from './components/ProductsWrapper/ProductsWrapper';
import { fetchBikes } from './actions/fetch-bikes';
import LoadMore from './components/LoadMoreProducts/LoadMoreProducts';

export default async function Home() {
  const bikes = await fetchBikes(1);
  return (
    <main className={styles.main}>
      <h1>Hola</h1>
      <ProductsWrapper bikes={bikes} />
      <LoadMore />
    </main>
  );
}
