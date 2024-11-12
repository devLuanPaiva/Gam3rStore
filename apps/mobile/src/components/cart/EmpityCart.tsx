import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

export default function EmpityCart(){
    return (
        <View style={styles.container}>
            <Ionicons name="cart-outline" size={60} color="#999" />
            <Text style={styles.text}>Carrinho está Vazio</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#24144099',
        borderRadius: 8,
        padding: 50,
        marginVertical: 10,
    },
    text: {
        color: '#999',
        fontWeight: '400',
    },
})