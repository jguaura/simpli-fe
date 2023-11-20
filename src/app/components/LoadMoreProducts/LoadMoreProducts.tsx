'use client';
import { useEffect } from 'react';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import useLoadMoreProducts from './hooks/useLoadMoreProducts';

function LoadMoreProducts() {
  const {loadMoreProducts, products, ref, inView } = useLoadMoreProducts();

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  return (
    <>
      <ProductsWrapper products={products} />
      <div className="products-container" ref={ref}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
}

export default LoadMoreProducts;
