import useLocalStorage from "../hooks/useLocalStorage";
import {
    IProduct, IInstallment, ICartItem, Cart, CalculateInstallment
} from "@gstore/core";
import { createContext, useEffect, useMemo, useState } from 'react'
import { CartContextProps } from "../interfaces";

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export function CartProvider(props: any) {
    const { salveItem, getItem } = useLocalStorage()
    const [cart, setCart] = useState<Cart>(new Cart())

    const addItem = (product: IProduct) => {
        updateCart(cart.addItem(product))
    }
    const removeItem = (product: IProduct) => {
        updateCart(cart.removeItem(product))
    }
    const removeProduct = (product: IProduct) => {
        updateCart(cart.removeProduct(product))
    }
    const clearCart = () => {
        updateCart(cart.clear())
    }
    const updateCart = (cart: Cart) => {
        salveItem('cart', cart.items)
        setCart(cart)
    }
    useEffect(() => {
        getItem('cart').then((items: ICartItem[]) => {
            if (items) {
                setCart(new Cart(items))
            }
        })
    }, [getItem])

    const values = useMemo(() => ({
        addItem,
        removeItem,
        removeProduct,
        clearCart,
        quantityItems: cart.quantityItems,
        items: cart.items,
        totalValue: cart.totalPrice,
        totalFull: cart.fullPrice,
        installments: new CalculateInstallment().execute(cart.totalPrice)
    }), [addItem, removeItem, removeProduct, clearCart])
    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    )
}
