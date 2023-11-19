import styles from './page.module.css';
import ProductsWrapper from './components/ProductsWrapper';
import { fetchBikes } from './actions/fetch-bikes';
import LoadMore from './components/LoadMore';

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
