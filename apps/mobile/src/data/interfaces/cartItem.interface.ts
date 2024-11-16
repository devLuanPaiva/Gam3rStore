import { ICartItem } from "@gstore/core";

export interface CartItemProps{
    item: ICartItem
    addItem: () => void
    removeItem: () => void
    removeProduct: () => void
}