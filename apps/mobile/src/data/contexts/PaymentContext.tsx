import { IOrderItem, IOder, EOrderStatus, EPaymentMethod, IOrderDelivery } from "@gstore/core";
import { createContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { PaymentContextProps } from "../interfaces";
import useCart from "../hooks/useCart";
import useAPI from "../hooks/useAPI";

const PaymentContext = createContext<PaymentContextProps>({} as any)

export function PaymentProvider(props: any) {
    const { items, totalValue, clearCart } = useCart()
    const { saveItem, getItem } = useLocalStorage()
    const { httpPOST } = useAPI()

    const [paymentMethod, setPaymentMethod] = useState<EPaymentMethod>(EPaymentMethod.PIX)

    const [delivery, setDelivery] = useState<Partial<IOrderDelivery>>({})

    const changeDelivery = (delivery: Partial<IOrderDelivery>) => {
        saveItem('delivery', delivery)
        setDelivery(delivery)
    }
    const changePaymentMethod = (paymentMethod: EPaymentMethod) => {
        saveItem('paymentMethod', paymentMethod)
        setPaymentMethod(paymentMethod)
    }

    const savePayment = async () => {
        const order: Partial<IOder> = {
            date: new Date(),
            paymentMethod,
            totalAmount: totalValue,
            delivery: delivery as IOrderDelivery,
            status: EOrderStatus.RECEIVED,
            items: items.map(item => ({
                product: item.product,
                quantity: item.quantity,
                unitPrice: item.product.promotionalPrice,
            }) as IOrderItem)
        }

        await httpPOST('/order/create', order)
        clearCart()
    }

    useEffect(() => {
        getItem('delivery').then((delivery: Partial<IOrderDelivery>) => {
            if (delivery) {
                setDelivery(delivery)
            }
        })
        getItem('paymentMethod').then((paymentMethod: EPaymentMethod) => {
            if (paymentMethod) {
                setPaymentMethod(paymentMethod)
            }
        })
    }, [getItem]);

    const values = useMemo(() => {
        return {
            paymentMethod,
            delivery,
            changePaymentMethod,
            changeDelivery,
            savePayment, 
            setPaymentMethod, 
            setDelivery
        }
    }, [paymentMethod, delivery, changePaymentMethod, changeDelivery, savePayment, setPaymentMethod, setDelivery])

    return (
        <PaymentContext.Provider value={values}>
            {props.children}
        </PaymentContext.Provider>
    )
}

export default PaymentContext