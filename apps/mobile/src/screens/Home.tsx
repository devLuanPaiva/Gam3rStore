import ItemProduct from "@/src/components/products/ProductItem";
import useProduct from "@/src/data/hooks/useProduct";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Home({ navigation }: any) {
    const { products } = useProduct()
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingTop: 20, width: '100%' }} >
                {products.map((product) => (
                    <ItemProduct key={product.id} product={product} />
                ))}
            </ScrollView>
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
})