import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ProductContextProps } from "../interfaces";
import useAPI from "../hooks/useAPI";
import { FilterProducts, IProduct } from "@gstore/core";

const ProductContext = createContext<ProductContextProps>({} as any);

export function ProductProvider(props: any) {
  const { httpGET } = useAPI();
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>([]);

  const loadProducts = useCallback(async () => {
    const response = await httpGET("/products/getAll");
    setProducts(Array.isArray(response) ? response : []);
  }, [httpGET]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts])

  const productById = useCallback(async (id: number): Promise<IProduct | null> => {
    const response = await httpGET(`/products/getById/${id}`);
    return response ? (response as IProduct) : null;
  }, [httpGET]);

  const values = useMemo(
    () => ({
      search,
      products: !search ? products : new FilterProducts().execute(search, products),
      setSearch,
      productById
    }),
    [search, products, productById]
  );

  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContext;
