import React, { useEffect, useState } from "react";
import {Text, View, ScrollView, Image, ImageSourcePropType, StyleSheet, FlatList, Linking} from "react-native";
import { useSelector } from "react-redux";
import { IconButton, Divider } from "react-native-paper";

const RestaurantScreen = () => {
    const restaurant: Restaurant = useSelector((state: any) => state.restaurantReducer.restaurantSelected);

    const renderImage = ({ item }: { item: string }) => {
        return (
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.replace(/\s/g, "") }} style={styles.image} />
            </View>
        );
    };

    const openWebsite = () => {
        if (restaurant.website) {
            Linking.openURL(restaurant.website);
        }
    };

    const callPhoneNumber = () => {
        if (restaurant.phoneNumber) {
            Linking.openURL(`tel:${restaurant.phoneNumber}`);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {restaurant.images && (
            <View style={styles.headerContainer}>
                <Image source={{ uri: restaurant.images[0].replace(/\s/g, "") }} style={styles.headerImage} />

                {/* Bouton de like */}
                <IconButton
                    icon="heart"
                    size={30}
                    style={styles.likeButton}
                    onPress={() => {
                        // Ajoutez ici la logique pour la gestion des likes
                    }}
                />
            </View>
            )}

            {restaurant.images && (
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{restaurant.name}</Text>

                    <Divider style={styles.divider} />

                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>{restaurant.description}</Text>

                    <Text style={styles.sectionTitle}>Localisation</Text>
                    <View style={styles.infoSection}>
                        <Text style={styles.infoTitle}>Adresse</Text>
                        <Text style={styles.infoText}>{restaurant.address}</Text>
                    </View>
                    <View style={styles.infoSection}>
                        <Text style={styles.infoTitle}>Téléphone</Text>
                        <Text style={styles.infoText} onPress={callPhoneNumber} style={styles.linkText}>
                            {restaurant.phoneNumber}
                        </Text>
                    </View>
                    <View style={styles.infoSection}>
                        <Text style={styles.infoTitle}>Site Web</Text>
                        <Text style={styles.infoText} onPress={openWebsite} style={styles.linkText}>
                            {restaurant.website}
                        </Text>
                    </View>

                    {/* TODO: Ajouter une section pour le menu si nécessaire */}

                    <Text style={styles.sectionTitle}>Galerie</Text>
                </View>
            )}
            <ScrollView horizontal={true}>
                <FlatList
                    scrollEnabled={false}
                    numColumns={2}
                    data={restaurant.images}
                    renderItem={({ item }) => renderImage({ item })}
                    keyExtractor={(item) => item}
                />
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        position: "relative",
    },
    headerImage: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    likeButton: {
        position: "absolute",
        top: 20,
        right: 20,
        backgroundColor: "white",
    },
    contentContainer: {
        padding: 20,
    },
    divider: {
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    infoContainer: {
        marginBottom: 20,
    },
    infoSection: {
        marginVertical: 10,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    infoText: {
        fontSize: 16,
    },
    linkText: {
        color: "blue",
        textDecorationLine: "underline",
    },
    imageContainer: {
        margin: 10,
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 10,
    },
});

export default RestaurantScreen;