import { useContext } from "react";
import PaymentContext from "../contexts/PaymentContext";

const usePayment = () => useContext(PaymentContext)
export default usePayment