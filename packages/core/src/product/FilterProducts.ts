import IProduct from "./IProduct";

export default class FilterProducts {
  execute(search: string, products: IProduct[]): IProduct[] {
    const words = search.toLowerCase().split(" ");
    return products.filter((product) => {
      const text = `
                ${product.name}
                ${product.description}
                ${Object.values(product.specifications).join(" ")}
                ${product.brand}
            `.toLowerCase();
      return words.every((word) => text.includes(word));
    });
  }
}