import { of } from 'rxjs';
import { IProduct } from '@gstore/core';

export const mockProducts: IProduct[] = [
  {
    id: 1,
    name: 'Notebook Gamer Acer Nitro 5',
    description:
      'O Acer Nitro 5 é um notebook gamer poderoso, ideal para jogos pesados e multitarefas.',
    brand: 'Acer',
    model: 'AN515-54-58CL',
    image:
      'https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Facer-nitro-5.png?alt=media&token=094ba6a8-1a4d-414a-b32c-c176bfeaca8e',
    rating: 4.5,
    videoReview:
      'https://www.youtube.com/embed/8NQFr9De3lU?si=s_lN2KTQresD-36Y',
    tags: ['Baixou'],
    basePrice: 6499.99,
    promotionalPrice: 5999.99,
    lowestPrice: 4850.9,
    highestPrice: 9800.8,
    averagePrice: 6503.7,
    specifications: {
      highlight: 'NVIDIA GeForce RTX 2060',
      Processor: 'Intel Core i5-9300H',
      Memory: '16GB DDR4',
      Storage: '512GB SSD',
      'Placa de Vídeo': 'NVIDIA GeForce RTX 2060',
      Screen: '15.6 polegadas Full HD',
      Weight: '2.5 Kg',
    },
  },
  {
    id: 2,
    name: 'Notebook Gamer Dell G5',
    description:
      'O Dell G5 oferece uma experiência de jogo fluida e gráficos de alta qualidade.',
    brand: 'Dell',
    model: 'G5-5590-A30B',
    image:
      'https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fdell-g5.png?alt=media&token=ac1cb3fa-4cc4-4f30-a831-19bca5b85644',
    rating: 5,
    videoReview:
      'https://www.youtube.com/embed/N5C1ALQkv1Q?si=KuVr4V6-A02Z23XK',
    tags: [],
    basePrice: 7299.99,
    promotionalPrice: 6799.99,
    lowestPrice: 4850,
    highestPrice: 9800,
    averagePrice: 6500,
    specifications: {
      highlight: 'NVIDIA GeForce GTX 1660 Ti',
      Processor: 'Intel Core i7-9750H',
      Memory: '16GB DDR4',
      Storage: '1TB HDD + 256GB SSD',
      'Placa de Vídeo': 'NVIDIA GeForce GTX 1660 Ti',
      Screen: '15.6 polegadas Full HD',
      Weight: '2.68 Kg',
    },
  },
];

export class MockProductsService {
  products$ = of(mockProducts);

  productById(id: number): IProduct | null {
    return mockProducts.find((product) => product.id === id) ?? null;
  }
}
