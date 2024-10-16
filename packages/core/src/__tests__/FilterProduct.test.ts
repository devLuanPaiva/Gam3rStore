import { FilterProducts, IProduct } from "../product";

describe("FilterProducts", () => {
  let filterProducts: FilterProducts;
  let products: IProduct[];

  beforeEach(() => {
    filterProducts = new FilterProducts();
    products = [
      {
        id: 1,
        name: "Sony PlayStation 5 Slim",
        description:
          "O PlayStation 5 Slim oferece gráficos de nova geração com suporte a Ray Tracing, tempos de carregamento rápidos com seu SSD customizado e jogos exclusivos que definem a plataforma.",
        brand: "Sony",
        model: "CFI-1015A",
        image:
          "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fps5-slim.png?alt=media&token=ed2ca61f-61c6-46bf-bc75-b4155132ca97",
        rating: 4.9,
        videoReview: "https://www.youtube.com/embed/bMFC-TM-t5E",
        tags: ["Nova Geração", "Ray Tracing", "Exclusivos"],
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
      },
      {
        id: 2,
        name: "Notebook Gamer Alienware m15",
        description:
          "O Alienware m15 é um notebook gamer de alto desempenho com design futurista e recursos avançados.",
        brand: "Dell",
        model: "m15 R3",
        image:
          "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Falienware-m15.png?alt=media&token=85df89d1-3db1-4978-9581-4802b42d7c6e",
        rating: 4.5,
        videoReview:
          "https://www.youtube.com/embed/OywbZPwHJBw?si=cZmqJESmXGh-D1Bw",
        tags: ["Sem juros"],
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
          "Placa de Vídeo": "NVIDIA GeForce RTX 2080 Super",
          Screen: "15.6 polegadas Full HD 240Hz",
          Weight: "2.5 Kg",
        },
      },
    ];
  });
  it("should return all products if the search term is empty", () => {
    const result = filterProducts.execute("", products);
    expect(result.length).toBe(2);
  });
  it("Should return products matching the search term by name", () => {
    const result = filterProducts.execute("Playstation", products);
    expect(result.length).toBe(1);
    expect(result[0]!.name).toBe("Sony PlayStation 5 Slim");
  });
  it("should return products matching the search term by description", () => {
    const result = filterProducts.execute("gráficos de nova geração", products);
    expect(result.length).toBe(1);
    expect(result[0]!.description).toContain("gráficos de nova geração");
  });
});
