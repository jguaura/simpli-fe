import { render, act, waitFor } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { fetchProducts } from '@/app/actions/fetch-products';
import { Product } from '@/app/core/models/product.model';
import useLoadMoreProducts from '@/app/components/Shared/LoadMoreProducts/hooks/useLoadMoreProducts';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('react-intersection-observer', () => ({
  __esModule: true,
  useInView: jest.fn(),
}));

jest.mock('@/app/actions/fetch-products', () => ({
  fetchProducts: jest.fn(),
}));

describe('useLoadMoreProducts', () => {
  it('loads more products when in view', async () => {
    const route = 'products';
    const mockProducts: Product[] = [
      {
        _id: '1',
        name: 'Product 1',
        description: 'des1',
        price: 22,
        image: 'imgS'
      },
      {
        _id: '2',
        name: 'Product 2',
        description: 'desc2',
        price: 20,
        image: 'imgS1'
      }
    ];

    (usePathname as jest.Mock).mockReturnValue(route);

    (useInView as jest.Mock).mockReturnValue({ ref: jest.fn(), inView: true });

    (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);

    let hookResult: any;

    function TestComponent() {
      hookResult = useLoadMoreProducts();
      return null;
    }

    render(<TestComponent />);
    
    // Initial state
    expect(hookResult.products).toEqual([]);

    act(() => {
      (useInView as jest.Mock).mockReturnValue({
        ref: jest.fn(),
        inView: true
      });
      hookResult.ref({});
    });
  
    await act(async () => {
      await hookResult.loadMoreProducts();
    });

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledWith(2, route);
    });
    expect(hookResult.products).toEqual(mockProducts);
  });
});
