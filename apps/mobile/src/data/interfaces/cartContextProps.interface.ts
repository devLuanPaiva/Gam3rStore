import { ICartItem, IProduct } from "@gstore/core";

export interface CartContextProps{
    items: ICartItem[]
    quantityItems: number
    totalValue: number
    totalFull: number
    installments: number
    addItem: (product: IProduct) => void
    removeItem: (product: IProduct) => void
    removeProduct: (product: IProduct) => void
    clearCart: () => void

}