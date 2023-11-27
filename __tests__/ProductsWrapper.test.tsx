import { render, screen } from '@testing-library/react';
import ProductsWrapper from '@/app/components/Shared/ProductsWrapper/ProductsWrapper';
import { Product } from '@/app/core/models/product.model';

const mockProducts: Product[] = [
  {
    _id: '1',
    name: 'Bike 1',
    description: 'The STREET BOB® 114 is a stripped-down, no-nonsense cruiser that packs a punch. Featuring the potent Milwaukee-Eight® 114 engine,',
    image: 'https://res.cloudinary.com/jguaura/image/upload/v1700358843/simpli/xldbkboyy2uvfpush9sf.jpg',
    price: 600
  },
  {
    _id: '2',
    name: 'Bike 2',
    description: 'The FAT BOY® 114 is an icon reborn, with a muscular presence and the brawny Milwaukee-Eight® 114 engine',
    image: 'https://res.cloudinary.com/jguaura/image/upload/v1700358842/simpli/vuvwqqnd32bh01t6nmwg.webp',
    price: 500
  }
];

describe('ProductsWrapper Component', () => {
  it('renders products correctly', () => {
    render(<ProductsWrapper products={mockProducts} />);

    expect(screen.queryByText('Error loading bikes')).not.toBeInTheDocument();

    mockProducts.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
      const productImage = screen.getByAltText(product.name);
      expect(productImage).toBeInTheDocument();
      expect(productImage).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(product.image)));
    });
  });
});
