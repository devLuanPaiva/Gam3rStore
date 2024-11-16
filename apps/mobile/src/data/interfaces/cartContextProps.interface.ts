import { ICartItem, IInstallment, IProduct } from "@gstore/core";

export interface CartContextProps{
    items: ICartItem[]
    quantityItems: number
    totalValue: number
    totalFull: number
    installments: IInstallment
    addItem: (product: IProduct) => void
    removeItem: (product: IProduct) => void
    removeProduct: (product: IProduct) => void
    clearCart: () => void

}