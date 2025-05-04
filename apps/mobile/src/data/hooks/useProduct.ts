import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

const useProduct = () => useContext(ProductContext)
export default useProduct