import { EPaymentMethod } from "@gstore/core";

export interface SelectPaymentMethodProps {
  paymentMethod?: EPaymentMethod;
  setPaymentMethod?: (paymentMethod: EPaymentMethod) => void;
}
