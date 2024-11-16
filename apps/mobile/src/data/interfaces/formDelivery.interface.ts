import { IOrderDelivery } from "@gstore/core";

export interface FormDeliveryProps {
  delivery: Partial<IOrderDelivery>;
  deliveryChange: (delivery: Partial<IOrderDelivery>) => void;
}
