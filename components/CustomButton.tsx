
import { Button } from 'react-native-paper';
import {StyleSheet} from "react-native";

type CustomButtonProps = {
    label : string
}
const CustomButton = (props : CustomButtonProps) => {
const {label} = props

    return (
        <Button mode="contained"  style={styles.button} labelStyle={styles.label}>{label}</Button>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : "#AEAEAE",
        borderRadius: 10,
        padding: 5
    },
    label : {
        fontSize: 20
    }
})
export default CustomButton;
