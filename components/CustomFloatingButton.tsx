import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type Props = {
    onPress?: () => void;
    floatingPosition?: 'left' | 'right' | 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    content: string;
}
const CustomFloatingButton = (props: Props) => {

    const { onPress } = props;

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
        <TouchableOpacity style={setFloatingPosition()} onPress={onPress}>
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
        backgroundColor: '#F4F4F4',
        borderRadius: 50,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CustomFloatingButton;
