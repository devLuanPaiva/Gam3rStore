import useCart from "../data/hooks/useCart";
import EmpityCart from "../components/cart/EmpityCart";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { ICartItem } from "@gstore/core";
import CartItem from "../components/cart/CartItem";
import Colors from "../data/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import HeaderSteps from "../components/shared/HeaderSteps";

export default function Cart({ navigation }: any) {
    const { addItem, items, removeProduct, removeItem } = useCart()

    return (
        <SafeAreaView style={styles.container}>
            {items.length > 0 ? (
                <>
                    <HeaderSteps step="cart" />
                    <ScrollView contentContainerStyle={{ paddingTop: 20, paddingVertical: 20, width: '100%' }}>
                        {items.map((item: ICartItem) => (
                            <CartItem
                                key={item.product.id}
                                item={item}
                                addItem={() => addItem(item.product)}
                                removeItem={() => removeItem(item.product)}
                                removeProduct={() => removeProduct(item.product)}
                            />
                        ))}
                    </ScrollView>
                    <Pressable
                        style={styles.buttom}
                        onPress={() => {
                            navigation.navigate('Payment')
                        }}
                    >
                        <Ionicons name="card-outline" size={22} style={styles.buttomText} />
                        <Text style={styles.buttomText}>Continuar</Text>
                    </Pressable>
                </>
            ) : (
                <EmpityCart />
            )}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
        width: '100%',
    },
    buttom: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        alignSelf: 'center',
        borderRadius: 9999,
        height: 40,
        marginVertical: 20,
        paddingHorizontal: 50,
        gap: 8,
    },
    buttomText: {
        color: '#FFF',
    },
})
