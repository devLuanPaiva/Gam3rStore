import { IProduct } from "@gstore/core";
export interface ProductContextProps {
  products: IProduct[];
  search: string;
  setSearch: (search: string) => void;
  productById: (id: number) => Promise<IProduct | null>;
}
