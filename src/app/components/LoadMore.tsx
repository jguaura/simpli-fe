'use client';

import { Bike } from '@/core/models/bikes.model';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Spinner from './spinner';
import { fetchBikes } from '../actions/fetch-bikes';
import ProductsWrapper from './ProductsWrapper';
 
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function LoadMore() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  const loadMoreBikes = async () => {
    await delay(2000);
    const nextPage = (page % 2) + 1;
    const newBikes = (await fetchBikes(nextPage)) ?? [];
    setBikes((prevBikes: Bike[]) => [...prevBikes, ...newBikes]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreBikes();
      console.info('scroll', page);
    }
  }, [inView]);

  return (
    <>
      <ProductsWrapper bikes={bikes} />
      <div style={{ columnSpan: 'all' }} ref={ref}>
        <Spinner />
      </div>
    </>
  );
}

export default LoadMore;
