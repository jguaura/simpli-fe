import { fetchBikes } from '@/app/actions/fetch-products';
import { Bike } from '@/core/models/bikes.model';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useLoadMoreProducts = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreBikes = async () => {
    await delay(1000);
    const nextPage = (page % 2) + 1;
    const newBikes = (await fetchBikes(nextPage)) ?? [];
    setBikes((prevBikes: Bike[]) => [...prevBikes, ...newBikes]);
    setPage(nextPage);
  };

  return {
    bikes,
    inView,
    ref,
    loadMoreBikes
  };
};

export default useLoadMoreProducts;
