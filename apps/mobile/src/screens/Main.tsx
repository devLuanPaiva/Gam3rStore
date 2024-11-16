import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import Home from './Home'
import Cart from './Cart'
const Tab = createBottomTabNavigator()
export default function Main() {
    const tab = (name: string, component: any, label: string, icon: string) => {
        return (
            <Tab.Screen
                name={name} component={component} options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabScreen} >
                            <Ionicons name={icon as any} size={22} color={focused ? "#fff" : '#ccc'} />
                            <Text style={{ ...styles.tabScreenText, color: focused ? '#fff' : "#ccc" }} >
                                {label}
                            </Text>
                        </View>
                    )
                }}
            />
        )
    }
    return (
        <Tab.Navigator initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#7811F5',
            tabBarInactiveBackgroundColor: '#7811F5',
            tabBarStyle: {
                backgroundColor: '#7811F5',
            },
        }}>
            {tab('Home', Home, 'Home', 'home-outline')}
            {tab('Cart', Cart, 'Cart', 'cart-outline')}
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tabScreen: {
        alignItems: 'center',
    },
    tabScreenText: {
        fontSize: 14,
    },
})