import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./data/contexts/ProductContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from "./screens/Main";
import { CartProvider } from "./data/contexts/CartContext";
const Stack = createNativeStackNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <CartProvider>
                <ProductProvider>
                    <Stack.Navigator initialRouteName="Home" >
                        <Stack.Screen name='main' component={Main} />
                    </Stack.Navigator>
                </ProductProvider>
            </CartProvider>
        </NavigationContainer>
    )
}