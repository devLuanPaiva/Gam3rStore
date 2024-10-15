import { IProduct } from "../product";
import ICartItem from "./ICartItem";

export default class Cart {
  constructor(readonly items: ICartItem[] = []) {}

  addItem(product: IProduct): Cart {
    const item = this.itemByProduct(product);
    if (item) {
      return new Cart(this.changeItemQuantity(this.items, product, 1));
    } else {
      return new Cart([...this.items, { product, quantity: 1 }]);
    }
  }

  removeItem(product: IProduct) {
    const item = this.itemByProduct(product);
    if (!item) return this;
    return new Cart(this.items.filter((i) => i.product.id !== product.id));
  }

  private itemByProduct(product: IProduct): ICartItem | undefined {
    return this.items.find((item) => item.product.id === product.id);
  }
  clear() {
    return new Cart();
  }

  get quantityItems() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }
  get totalPrice(): number {
    return this.items.reduce(
      (acc, item) => acc + item.product.promotionalPrice * item.quantity,
      0
    );
  }
  get fullPrice() {
    return this.items.reduce(
      (acc, item) => acc + item.product.basePrice * item.quantity,
      0
    );
  }
  private changeItemQuantity(
    items: ICartItem[],
    product: IProduct,
    difference: number
  ): ICartItem[] {
    return items
      .map((i) =>
        i.product.id === product.id
          ? { ...i, quantity: i.quantity + difference }
          : i
      )
      .filter((i) => i.quantity > 0);
  }
}
