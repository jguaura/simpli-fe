import { render, screen } from '@testing-library/react';
import Card from '@/app/components/UI/Card/Card';
import '@testing-library/jest-dom';
import { Product } from '@/app/core/models/product.model';

const mockProduct: Product = {
  _id: '123',
  name: 'Sample Product',
  description: 'A sample product description',
  price: 19.99,
  image: 'https://res.cloudinary.com/jguaura/image/upload/v1700556963/cld-sample.jpg'
};

describe('Card component', () => {
  const { name, price } = mockProduct;

  it('renders product information correctly', () => {
    render(<Card product={mockProduct} />);

    const productNameElement = screen.getByText(name);
    expect(productNameElement).toBeInTheDocument();

    const productPriceElement = screen.getByText(`$${price}`);
    expect(productPriceElement).toBeInTheDocument();
  });

  it('renders the "More info" button with the correct link', () => {
    render(<Card product={mockProduct} />);

    const moreInfoButton = screen.getByText('More info');
    expect(moreInfoButton).toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'More info' });
    expect(link).toHaveAttribute('href');
  });
});
