
import { Button } from 'react-native-paper';
import {StyleSheet} from "react-native";
import React from "react";

type CustomButtonProps = {
    label : string
    action? : Function
}
const CustomButton = (props : CustomButtonProps) => {
const {label,action} = props

    return (
        <Button mode="contained"  style={styles.button} labelStyle={styles.label} onPress={ () => action? action() : null}>{label} </Button>
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
