import React from "react";
import Home from "../src/screens/Home";
import { mockProducts } from "../mocks/product.mock";
import { render } from '@testing-library/react-native'
import { ProductProvider } from "../src/data/contexts/ProductContext";

jest.mock('../src/data/hooks/useProduct', () => ({
    __esModule: true,
    default: () => ({
        products: mockProducts,
    })
}))
const mockedNavigate = jest.fn();
jest.mock('expo-linear-gradient', () => ({
    LinearGradient: jest.fn(({ children }) => children),
}));

describe('Home Screen', () => {
    it('should render product list correctly', () => {
        const { getByText, getAllByTestId } = render(
            <ProductProvider>
                <Home navigation={{ navigate: mockedNavigate }} />
            </ProductProvider>
        );

        mockProducts.forEach((product) => {
            expect(getByText(product.name)).toBeTruthy()
            expect(getByText(`de ${product.basePrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)).toBeTruthy();
            expect(getByText(`por ${product.promotionalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)).toBeTruthy();

        })
        expect(getAllByTestId('item-product')).toHaveLength(mockProducts.length);
    })
})