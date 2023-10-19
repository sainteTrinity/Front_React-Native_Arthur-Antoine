import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import SearchBox from "../components/SearchBox";
import ListCategoriesLayout from "./layout/ListCategoriesLayout";
import RestaurantsCard from "../components/RestaurantsCard";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantThunk } from "../redux/middleware/RestaurantThunk";
import * as SecureStore from 'expo-secure-store';

const HomeScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        SecureStore.getItemAsync('token').then((token) => {
            if (token) {
                dispatch(RestaurantThunk(token));
            }
        });
    }, [dispatch]);

    const restaurants: Array<Restaurant> = useSelector((state: any) => state.restaurantReducer.restaurants);

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (text: string) => {
        setSearchValue(text);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hey !</Text>
            <Text style={styles.subtitle}>Une petite faim ?</Text>
            <SearchBox setValueSearch={handleSearchChange} placeholder={"Rechercher..."} />
            <Text style={styles.titleLarge}>Restaurants Ouverts</Text>

            <FlatList
                data={restaurants}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(restaurant, index) => index.toString()}
                renderItem={({ item }) => (
                    <RestaurantsCard restaurant={item} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 16,
    },
    titleLarge: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
});

export default HomeScreen;
