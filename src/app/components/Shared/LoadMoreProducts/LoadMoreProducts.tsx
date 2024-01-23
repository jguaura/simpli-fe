'use client';
import { useEffect } from 'react';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import useLoadMoreProducts from './hooks/useLoadMoreProducts';
import Spinner from './components/Spinner/Spinner';

function LoadMoreProducts() {
  const { loadMoreProducts, products, ref, inView } = useLoadMoreProducts();

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  return (
    <>
      <ProductsWrapper products={products} />
      <div ref={ref}>
        <Spinner />
      </div>
    </>
  );
}

export default LoadMoreProducts;
