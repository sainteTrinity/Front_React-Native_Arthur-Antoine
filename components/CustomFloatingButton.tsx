import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type Props = {
    action?: Function
    onPress?: () => void;
    floatingPosition?: 'left' | 'right' | 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    content: React.ReactNode; // Change the type of the content prop
}

const CustomFloatingButton = (props: Props) => {
    const { onPress, action } = props;

    const setFloatingPosition = () => {
        switch (props.floatingPosition) {
            case 'top-left':
                return styles.buttonContainerTopLeft;
            case 'right':
                return styles.buttonContainerRight;
            case 'center':
                return styles.buttonContainer;
            default:
                return styles.buttonContainer;
        }
    }

    return (
        <TouchableOpacity style={setFloatingPosition()} onPress={() => action ? action() : null} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.content}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 16,
        left: '50%',
        transform: [{ translateX: -28 }],
        zIndex: 1,
    },
    buttonContainerTopLeft: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
    },
    buttonContainerRight: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        zIndex: 1,
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        width: 50,
        height: 50,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#fff",
        borderWidth: 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    buttonText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CustomFloatingButton;
