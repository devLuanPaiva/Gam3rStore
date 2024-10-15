import { IProduct } from "../product";

export default interface ICartItem{
    product: IProduct
    quantity: number
}