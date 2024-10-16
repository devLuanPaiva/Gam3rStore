import { Cart, ICartItem } from "../cart";
import { IProduct } from "../product";

describe("Cart", () => {
  let cart: Cart;
  let product1: IProduct;
  let product2: IProduct;
  beforeEach(() => {
    product1 = {
      id: 1,
      name: "Sony PlayStation 5 Slim",
      description: "O PlayStation 5 Slim oferece gráficos de nova geração.",
      brand: "Sony",
      model: "CFI-1015A",
      image: "https://image-url.com/ps5.png",
      rating: 4.9,
      videoReview: "https://youtube.com/review-ps5",
      tags: ["Nova Geração", "Ray Tracing"],
      basePrice: 3999.99,
      promotionalPrice: 3499.99,
      lowestPrice: 2999.99,
      highestPrice: 5999.99,
      averagePrice: 3899.99,
      specifications: {
        highlight: "SSD Customizado",
        CPU: "AMD Ryzen Zen 2 8 núcleos",
        Storage: "1TB SSD",
        Weight: "4.05 kg",
      },
    };

    product2 = {
      id: 2,
      name: "Notebook Gamer Alienware m15",
      description: "Notebook gamer de alto desempenho.",
      brand: "Dell",
      model: "m15 R3",
      image: "https://image-url.com/alienware.png",
      rating: 4.5,
      videoReview: "https://youtube.com/review-alienware",
      tags: ["Gamer", "RTX 2080"],
      basePrice: 14999.99,
      promotionalPrice: 13999.99,
      lowestPrice: 4133,
      highestPrice: 7990.9,
      averagePrice: 5107.9,
      specifications: {
        highlight: "NVIDIA GeForce RTX 2080 Super",
        Processor: "Intel Core i7-10875H",
        Memory: "16GB DDR4",
        Storage: "1TB SSD",
        Screen: "15.6 polegadas Full HD",
        Weight: "2.5 Kg",
      },
    };

    cart = new Cart();
  });
  it("Should add an item to the cart", () =>{
    cart = cart.addItem(product1)
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]!.product).toBe(product1);
    expect(cart.items[0]!.quantity).toBe(1);
  })
  it('Should increase quantity if the item already exists in the cart', () => {
    cart = cart.addItem(product1);
    cart = cart.addItem(product1);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]!.quantity).toBe(2);
  })
  it('Should remove an item from the cart',() =>{
    cart = cart.addItem(product1);
    cart = cart.addItem(product2);
    expect(cart.items.length).toBe(2);

    cart = cart.removeItem(product1);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]!.product).toBe(product2);
    expect(cart.items[0]!.quantity).toBe(1);
    
    cart = cart.removeItem(product2);
    expect(cart.items.length).toBe(0);
  })
  it('Should return correct total price of items in the cart', () =>{
    cart = cart.addItem(product1);
    cart = cart.addItem(product2);

    expect(cart.totalPrice).toBe(product1.promotionalPrice + product2.promotionalPrice);
  })
  it('Should return correct full price of items in the cart', () =>{
    cart = cart.addItem(product1);
    cart = cart.addItem(product2);

    expect(cart.fullPrice).toBe(product1.basePrice + product2.basePrice);
  })
  it('Should clear the cart', () =>{
    cart = cart.addItem(product1);
    cart = cart.addItem(product2);
    cart.clear();

    expect(cart.items.length).toBe(0);
  })
});
