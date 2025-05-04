import { IProduct } from "@gstore/core";

export interface ItemProductProps {
  product: IProduct;
  selectProduct?: (product: IProduct) => void;
}
