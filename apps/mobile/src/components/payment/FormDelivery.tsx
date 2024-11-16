import { FormDeliveryProps } from "@/src/data/interfaces";
import { StyleSheet, TextInput, View } from "react-native";

export default function FormDelivery(props: Readonly<FormDeliveryProps>){
    const changeAtribute = (attribute: string) =>{
        return (value: any) => {
            props.deliveryChange({...props.delivery, [attribute]: value})
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={props.delivery.name}
                onChangeText={changeAtribute('nome')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={props.delivery.email}
                onChangeText={changeAtribute('email')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={props.delivery.cpf}
                onChangeText={changeAtribute('cpf')}
                keyboardType="numeric"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Logradouro"
                value={props.delivery.street}
                onChangeText={changeAtribute('logradouro')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Complemento"
                value={props.delivery.complement}
                onChangeText={changeAtribute('complemento')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={props.delivery.city}
                onChangeText={changeAtribute('cidade')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
                value={props.delivery.state}
                onChangeText={changeAtribute('estado')}
                placeholderTextColor="#999"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    input: {
        height: 40,
        width: 300,
        color: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#241440',
    },
})
