import IPriceable from "./IPriceable";
import ISpecifications from "./ISpecifications";

export default interface IProduct extends IPriceable{
    id: number
    name: string
    description: string
    brand: string
    model: string
    image: string
    rating: number
    videoReview: string
    tags: string[]
    specifications: ISpecifications
}