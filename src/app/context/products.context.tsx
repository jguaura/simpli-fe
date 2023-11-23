"use client"
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import { Product } from '../core/models/product.model';

interface ProductsContextProps {
  products: Product[] | null;
  setProducts: Dispatch<SetStateAction<Product[] | null>>;
  removeProduct: (productId: string) => void;
  total: number;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export const ProductsContextProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const total = products
    ? products.reduce((sum, product) => {
        const priceAsFloat = typeof product.price === 'number' ? product.price : parseFloat(product.price);

        if (!isNaN(priceAsFloat)) {
          return sum + priceAsFloat;
        }
        return sum;
    }, 0)
    : 0;

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) => {
      if (!prevProducts) {
        return null;
      }
      return prevProducts.filter((product) => product._id !== productId);
    });
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, total, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      'useProductsContext must be used within a ProductsContextProvider'
    );
  }
  return context;
};
