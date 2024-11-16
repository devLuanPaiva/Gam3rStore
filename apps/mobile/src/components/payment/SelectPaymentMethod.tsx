import { SelectPaymentMethodProps } from "@/src/data/interfaces";
import { EPaymentMethod } from "@gstore/core";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SelectPaymentMethod(props: Readonly<SelectPaymentMethodProps>){
    const renderItem = (label: string, paymentMethod: EPaymentMethod) =>{
        const selected = props.paymentMethod === paymentMethod
        return (
            <Pressable
            key={paymentMethod}
            style={styles.optionContainer}
            onPress={() => props.setPaymentMethod?.(paymentMethod)}
            >
                <View style={styles.optionSelector} >
                    {selected && <View style={styles.selection} />}
                </View>
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        )
    }
    return (
        <View style={styles.container}>
            {renderItem('Pagamento no PIX', EPaymentMethod.PIX)}
            {renderItem('Boleto Bancário', EPaymentMethod.BOLETO)}
            {renderItem('Cartão de Crédito', EPaymentMethod.CARD)}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionSelector: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8247E5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selection: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#8247E5',
    },
    text: {
        fontSize: 16,
        color: '#FFF',
    },
})
