import { ItemProductProps } from "@/src/data/interfaces";
import { LinearGradient } from "expo-linear-gradient"
import Colors from "@/src/data/constants/Colors";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Review from "../shared/Review";
import { Ionicons } from "@expo/vector-icons";
import useInstallment from "@/src/data/hooks/useInstallment";
import useCart from "@/src/data/hooks/useCart";

export default function ItemProduct(props: Readonly<ItemProductProps>) {
    const { addItem } = useCart()
    const installment = useInstallment(props.product.promotionalPrice)
    return (
        <View style={styles.container}>
            <Pressable style={styles.product}>
                <Image src={props.product.image} style={styles.image} alt={props.product.name} />
                <View style={{ flex: 1 }}>
                    <View style={styles.reviewContainer}>
                        <Review note={props.product.rating} />
                    </View>
                    <Text style={styles.name}> {props.product.name} </Text>
                    <Text style={styles.fullPrice}>
                        de {props.product.basePrice.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </Text>
                    <View style={styles.priceContainer} >
                        <Text style={{ color: 'white' }} > por </Text>
                        <Text style={styles.price}>
                            {props.product.promotionalPrice.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </Text>
                    </View>
                    <Text style={styles.installment}>
                        ou {installment.numberOfInstallments}x de {installment.installmentValue.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </Text>
                </View>
            </Pressable>
            <Pressable style={styles.buttom} onPress={(e) => {
                e.preventDefault()
                addItem(props.product)
            }}>
                <Ionicons name="cart-outline" size={22} style={styles.buttomText} />
                <Text style={styles.buttomText}>Adicionar</Text>
            </Pressable>
            <LinearGradient
                colors={['transparent', '#7811F5', 'transparent']}
                start={{ x: 0, y: 0.75 }}
                end={{ x: 1, y: 0.25 }}
                style={styles.borderBottom}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        maxWidth: Dimensions.get('window').width,
    },
    product: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
    reviewContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    fullPrice: {
        fontSize: 14,
        color: '#AAA',
        textDecorationLine: 'line-through',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4,
    },
    price: {
        fontSize: 24,
        color: '#34d399',
        fontWeight: 'bold',
    },
    installment: {
        fontSize: 14,
        color: '#FFF',
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
        paddingHorizontal: 80,
        gap: 8,
    },
    buttomText: {
        color: '#FFF',
    },
    borderBottom: {
        marginTop: 20,
        height: 2,
        width: Dimensions.get('window').width,
    },
})
