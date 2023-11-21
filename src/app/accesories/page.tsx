import { fetchProducts } from "../actions/fetch-products";
import LoadMoreProducts from "../components/Shared/LoadMoreProducts/LoadMoreProducts";
import ProductsWrapper from "../components/Shared/ProductsWrapper/ProductsWrapper";
import styles from './accesories-page.module.css'

export default async function Accesories() {
  const route = '/accesories'
  const accesories = await fetchProducts(1, route);
  return (
    <div className={styles.page}>
      <ProductsWrapper products={accesories} />
      <LoadMoreProducts />
    </div>
  );
}
