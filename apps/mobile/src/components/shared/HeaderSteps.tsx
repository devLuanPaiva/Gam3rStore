import { StyleSheet, Text, View } from "react-native"

interface HeaderStepsProps {
    step: 'cart' | 'payment'
}

export default function HeaderSteps(props: Readonly<HeaderStepsProps>) {
    const renderItem = (step: 'cart' | 'payment', index: number, title: string) => {
        return (
            <View style={styles.containerStep}>
                <View
                    style={
                        props.step === step
                            ? styles.cycleActive
                            : styles.cycleEnable
                    }
                >
                    <Text
                        style={
                            props.step === step
                                ? styles.cycleActiveText
                                : styles.cycleDeadText
                        }
                    >
                        {index}
                    </Text>
                </View>
                <Text
                    style={
                        props.step === step
                            ? styles.activeText
                            : styles.deadText
                    }
                >
                    {title}
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {renderItem('cart', 1, 'Carrinho')}
            <View style={styles.separator} />
            {renderItem('payment', 2, 'Pagamento')}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    containerStep: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cycleActive: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#FF57A0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cycleEnable: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cycleActiveText: {
        color: 'white',
        fontSize: 12,
    },
    cycleDeadText: {
        color: '#000',
        fontSize: 12,
    },
    activeText: {
        color: '#FF57A0',
        marginLeft: 10,
        fontWeight: '400',
    },
    deadText: {
        color: '#888',
        marginLeft: 10,
        fontWeight: '400',
    },
    separator: {
        width: 40,
        height: 1,
        backgroundColor: '#888',
        marginHorizontal: 15,
    },
})