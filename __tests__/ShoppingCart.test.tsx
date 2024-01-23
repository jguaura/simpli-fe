import ShoppingCart from '@/app/components/Shared/Navbar/components/ShoppingCart/ShoppingCart';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as ProductsContext from '@/app/context/products.context';

jest.mock('@/app/context/products.context', () => ({
  ...jest.requireActual('@/app/context/products.context'),
  useProductsContext: jest.fn()
}));

describe('ShoppingCart Component', () => {
  it('renders shopping cart content correctly', async () => {
    const mockContextValue: ProductsContext.ProductsContextProps = {
      products: [
        {
          _id: '1',
          name: 'Product 1',
          description: 'Prod desc 1',
          price: 10,
          image: 'https://res.cloudinary.com/jguaura/image/upload/v1700358841/simpli/rdoat9cz5in04xbofmt1.jpg'
        },
        {
          _id: '2',
          name: 'Product 2',
          description: 'Prod desc 2',
          price: 11,
          image: 'https://res.cloudinary.com/jguaura/image/upload/v1700358843/simpli/xldbkboyy2uvfpush9sf.jpg'
        }
      ],
      total: 100,
      setProducts: jest.fn(),
      removeProduct: jest.fn()
    };

    (ProductsContext.useProductsContext as jest.Mock).mockReturnValue(mockContextValue);

    render(<ShoppingCart />);

    expect(screen.getByLabelText('shopping cart')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('shopping cart'));

    const shoppingCartItems = screen.getAllByText('Product 1');
    expect(shoppingCartItems).toHaveLength(1);

    expect(screen.getByText('Total: $100')).toBeInTheDocument();
    expect(screen.getByText('Buy now')).toBeInTheDocument();
  });

  it('renders empty shopping cart message when there are no products', async () => {
    (ProductsContext.useProductsContext as jest.Mock).mockReturnValue({
      products: [],
      total: 0,
      setProducts: jest.fn(),
      removeProduct: jest.fn()
    });

    render(<ShoppingCart />);

    await userEvent.click(screen.getByLabelText('shopping cart'));

    const emptyCartMessage = screen.getByText('Your shopping cart is empty.');
    expect(emptyCartMessage).toBeInTheDocument();
  });
});
