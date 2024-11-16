import Main from "./screens/Main";
import Payment from "./screens/Payment";
import { CartProvider } from "./data/contexts/CartContext";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./data/contexts/ProductContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <CartProvider>
                <ProductProvider>
                    <Stack.Navigator initialRouteName="Home" >
                        <Stack.Screen name='main' component={Main} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen
                            name="Pagamento"
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
                </ProductProvider>
            </CartProvider>
        </NavigationContainer>
    )
}