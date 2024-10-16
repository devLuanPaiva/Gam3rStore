import { EOrderStatus } from "./EOrderStatus";
import { EPaymentMethod } from "./EPaymentMethod";
import IOrderDelivery from "./IOrderDelivery";
import IOrderItem from "./IOrderItem";

export default interface IOder {
  id: number;
  date: Date;
  items: IOrderItem[];
  totalAmount: number;
  status: EOrderStatus;
  paymentMethod: EPaymentMethod;
  delivery: IOrderDelivery;
}
