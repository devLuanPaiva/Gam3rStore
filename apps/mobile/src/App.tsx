import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./data/contexts/ProductContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from "./screens/Main";
const Stack = createNativeStackNavigator()
export default function App() {
    return(
    <NavigationContainer>
        <ProductProvider>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name='main' component={Main} />
            </Stack.Navigator>
        </ProductProvider>
    </NavigationContainer>
    )
}