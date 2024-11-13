import { EPaymentMethod, IOrderDelivery } from "@gstore/core";

export interface PaymentContextProps {
  paymentMethod: EPaymentMethod;
  delivery: Partial<IOrderDelivery>;
  setPaymentMethod: (paymentMethod: EPaymentMethod) => void;
  setDelivery: (delivery: Partial<IOrderDelivery>) => void;
  savePayment: () => Promise<void>;
}
