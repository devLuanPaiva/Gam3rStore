import { EPaymentMethod } from "@gstore/core";

export interface SelectPaymentMethod {
  paymentMethod?: EPaymentMethod;
  setPaymentMethod?: (paymentMethod: EPaymentMethod) => void;
}
