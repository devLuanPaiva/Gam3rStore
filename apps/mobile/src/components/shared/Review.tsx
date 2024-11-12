import { ReviewProps } from "@/src/data/interfaces";
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from "react-native";

export default function Review(props: Readonly<ReviewProps>) {
    const Stars = (note: number) => {
        const stars: any[] = [];
        for (let i = 1; i <= 5; i++) {
            if (note >= i) {
                stars.push(
                    <Ionicons key={i} name="star" size={16} style={styles.icon} />
                )
            } else if (note >= i - 0.5) {
                stars.push(
                    <Ionicons key={i} name="star-half" size={16} style={styles.icon} />
                )
            } else {
                stars.push(
                    <Ionicons key={i} name="star-outline" size={16} style={styles.icon} />
                )
            }
        }
        return stars
    }
    return <View style={styles.container}> {Stars(props.note)} </View>
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 0.5,
        color: '#34d399',
    },
    icon: {
        color: '#34d399',
    },
})