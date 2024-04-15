import React, {useState} from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// @ts-ignore
const NewsCard = ({ news, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                <ImageBackground source={require('../../assets/images/newsBackground.jpg')} style={styles.container}>
                    <View style={styles.overlay}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{news.title}</Text>
                        </View>
                        <View style={styles.content}>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
                                {news.description}
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.author}>{news.author}</Text>
                            <TouchableOpacity onPress={onPress} style={styles.button}>
                                <Text style={styles.buttonText}>Read More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: 300,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and transparency
        padding: 15,
    },
    header: {
        borderBottomColor: '#555',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    title: {
        fontSize: 18,
        color: '#eee',
        fontWeight: 'bold',
    },
    content: {
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        color: '#ddd',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    author: {
        color: '#888',
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});


export default NewsCard;