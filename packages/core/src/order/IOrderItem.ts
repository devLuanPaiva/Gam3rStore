import { IProduct } from "../product"

export default interface IOrderItem{
    id: number
    product: IProduct
    quantity: number
    unitPrice: number
}