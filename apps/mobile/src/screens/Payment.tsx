import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import SelectPaymentMethod from "../components/payment/SelectPaymentMethod";
import useCart from "../data/hooks/useCart";
import usePayment from "../data/hooks/usePayment";
import HeaderSteps from "../components/shared/HeaderSteps";
import FormDelivery from "../components/payment/FormDelivery";
import SummaryPayment from "../components/payment/SummaryPayment";

export default function Payment() {
    const { quantityItems, totalValue } = useCart()
    const { delivery, paymentMethod, setDelivery, setPaymentMethod, savePayment } = usePayment()

    return (
        <SafeAreaView style={styles.container} >
            <HeaderSteps step="payment" />
            <ScrollView contentContainerStyle={styles.containerScroll} >
                <Text style={styles.title} >Forma de Pagamento</Text>
                <SelectPaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
                <Text style={styles.title}>Dados da Entrega</Text>
                <FormDelivery delivery={delivery} deliveryChange={setDelivery} />
            </ScrollView>

            <SummaryPayment ammountItems={quantityItems} totalValue={totalValue} finalizePurchase={savePayment} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
    },
    containerScroll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
})