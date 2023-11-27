import { fetchProducts } from '@/app/actions/fetch-products';
import { Product } from '@/app/core/models/product.model';
import { usePathname } from 'next/navigation';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useLoadMoreProducts = () => {
  const route = usePathname();
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const loadMoreProducts = async () => {
    await delay(1000);
    const nextPage = (page % 2) + 1;
    const newProducts = (await fetchProducts(nextPage, route)) ?? [];
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
