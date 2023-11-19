'use client';
import { useEffect } from 'react';
import ProductsWrapper from '../ProductsWrapper/ProductsWrapper';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import useLoadMoreProducts from './hooks/useLoadMoreProducts';

function LoadMoreProducts() {
  const { bikes, loadMoreBikes, ref, inView } = useLoadMoreProducts();

  useEffect(() => {
    if (inView) {
      loadMoreBikes();
    }
  }, [inView]);

  return (
    <>
      <ProductsWrapper bikes={bikes} />
      <div className="products-container" ref={ref}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
}

export default LoadMoreProducts;
