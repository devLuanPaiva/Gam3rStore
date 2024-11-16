import Main from "./screens/Main";
import Payment from "./screens/Payment";
import { CartProvider } from "./data/contexts/CartContext";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./data/contexts/ProductContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaymentProvider } from "./data/contexts/PaymentContext";
const Stack = createNativeStackNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <CartProvider>
                <ProductProvider>
                    <PaymentProvider>
                        <Stack.Navigator initialRouteName="Main">
                            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                            <Stack.Screen
                                name="Payment"
                                component={Payment}
                                options={{
                                    title: 'Detalhes do Pagamento',
                                    headerBackTitle: 'Voltar',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                        </Stack.Navigator>
                    </PaymentProvider>
                </ProductProvider>
            </CartProvider>
        </NavigationContainer>
    )
}