import { ReactElement, createContext, useEffect, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [];

export type useProductsContextType = { products: ProductType[] };

const initContextState: useProductsContextType = { products: [] };

const productsContext = createContext<useProductsContextType>(initContextState);
type childrenType = { children?: ReactElement | ReactElement[] };

const ProductsProvider = ({ children }: childrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);
  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products")
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) {
            console.log(err.message);
          }
        });
      return data;
    };
    fetchProducts().then((products) => setProducts(products));
  }, []);
  return (
    <div>
      <productsContext.Provider value={{ products }}>
        {children}
      </productsContext.Provider>
    </div>
  );
};

export default ProductsProvider;
