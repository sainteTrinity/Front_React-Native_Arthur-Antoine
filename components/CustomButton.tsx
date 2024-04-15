import {Button} from 'react-native-paper';
import {StyleSheet} from "react-native";
import React from "react";


type CustomButtonProps = {
    label?: string
    action?: Function
    size?: string
    style?: any
    icon?: string
}
const CustomButton = (props: CustomButtonProps) => {
    const {label, action, style, icon} = props

    return (
            <Button icon={icon} mode="contained" style={style ? {...styles.button, ...style} : styles.button} labelStyle={styles.label}
                onPress={() => action ? action() : null}>{label} </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#AEAEAE",
        borderRadius: 10,
        padding: 5
    },
    label: {
        fontSize: 20
    }
})
export default CustomButton;
