import Colors from "@/src/data/constants/Colors";
import { SummaryPaymentProps } from "@/src/data/interfaces";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SummaryPayment(props: Readonly<SummaryPaymentProps>) {
    return (
        <View style={styles.container}>
            <View style={styles.itemsValue}>
                <Text style={{ color: 'white' }}>Valor total ({props.ammountItems} itens): </Text>
                <Text style={styles.itemsValueHighlight}> {props.totalValue.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                })} </Text>
            </View>
            <Pressable style={styles.buttom} onPress={() => props.finalizePurchase?.()}>
                <Ionicons name="cart-outline" size={22} style={styles.textButtom} />
                <Text style={styles.textButtom}>Finalizar Compra</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        paddingHorizontal: 60,
        paddingVertical: 20,
        backgroundColor: '#241440',
        borderRadius: 10,
        gap: 10,
    },
    itemsValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemsValueHighlight: {
        color: '#34d399',
        fontWeight: 'bold',
    },
    buttom: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        borderRadius: 9999,
        height: 40,
        paddingHorizontal: 45,
        gap: 8,
    },
    textButtom: {
        color: '#FFF',
    },
})
