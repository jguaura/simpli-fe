import { fetchProducts } from '@/app/actions/fetch-products';
import { Product } from '@/core/models/product.model';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useLoadMoreProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreProducts = async () => {
    await delay(1000);
    const nextPage = (page % 2) + 1;
    const newProducts = (await fetchProducts(nextPage)) ?? [];
    setProducts((prevProducts: Product[]) => [...prevProducts, ...newProducts]);
    setPage(nextPage);
  };

  return {
    products,
    inView,
    ref,
    loadMoreProducts
  };
};

export default useLoadMoreProducts;
