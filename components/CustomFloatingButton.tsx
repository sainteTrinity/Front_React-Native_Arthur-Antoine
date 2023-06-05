import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type Props = {
    onPress?: () => void;
}
const CustomFloatingButton = (props: Props) => {
    const { onPress } = props;
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
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
