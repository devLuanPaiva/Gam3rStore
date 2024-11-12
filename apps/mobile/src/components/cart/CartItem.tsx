import { CartItemProps } from "@/src/data/interfaces";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CartItem(props: Readonly<CartItemProps>) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.item.product.image }}
                style={styles.image}
                alt={props.item.product.name}
            />
            <View style={styles.inforProduct}>
                <Text style={styles.name}>{props.item.product.name}</Text>
                <View style={styles.containerQuantity}>
                    <View style={styles.quantity}>
                        <Pressable
                            onPress={props.removeItem}
                            style={[styles.botaoQuantity, styles.buttomMinus]}
                        >
                            <AntDesign name="minus" size={16} color="#FFF" />
                        </Pressable>
                        <Text style={styles.quantityValue}>
                            {props.item.quantity}
                        </Text>
                        <Pressable
                            onPress={props.addItem}
                            style={[styles.botaoQuantity, styles.buttomMore]}
                        >
                            <AntDesign name="plus" size={16} color="#FFF" />
                        </Pressable>
                    </View>
                    <Pressable
                        onPress={props.removeProduct}
                        style={styles.buttomDelete}
                    >
                        <Ionicons
                            name="trash-outline"
                            size={16}
                            color="#ff2777"
                        />
                        <Text style={{ color: '#ff2777' }}>Remover</Text>
                    </Pressable>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.fullPrice}>
                        De {(props.item.product.basePrice).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={{ color: 'white' }}>Por</Text>
                        <Text style={styles.price}>
                            {(props.item.product.promotionalPrice).toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#241440',
        borderRadius: 8,
        padding: 16,
        marginVertical: 10,
        width: '95%',
        alignSelf: 'center',
    },
    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        width: 30,
        height: 30,
        backgroundColor: '#333',
        borderRadius: 4,
    },
    image: {
        width: 120,
        height: 120,
        marginRight: 15,
    },
    inforProduct: {
        flex: 1,
        justifyContent: 'space-between',
        gap: 6,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5,
    },
    fullPrice: {
        fontSize: 10,
        color: '#AAA',
        textDecorationLine: 'line-through',
        marginBottom: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 4,
    },
    price: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quantity: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 6,
    },
    botaoQuantity: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderColor: '#FFF',
    },
    buttomMinus: {
        borderRightWidth: 1,
    },
    buttomMore: {
        borderLeftWidth: 1,
    },
    buttomDelete: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    quantityValue: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
})
