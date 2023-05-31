import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, IconButton, Text} from 'react-native-paper';
import SearchBox from "../components/SearchBox";
import ListCategoriesLayout from "./layout/ListCategoriesLayout";
import RestaurantsCard from "../components/RestaurantsCard";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text variant={"titleMedium"}>Hey !</Text>
            <Text variant={"displaySmall"}>Une petite faim ?</Text>

            <SearchBox/>

            <View style={styles.categorieTitle}>
                <Text variant={"titleLarge"}>Catégories</Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.seeMore}>Voir tout</Button>
                </View>
            </View>

            <ListCategoriesLayout />

            <Text variant={"titleLarge"} style={{marginTop: 20}}>Restaurants Ouverts</Text>

            <RestaurantsCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginLeft: 15,
        marginRight: 15
    },

    categorieTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        marginLeft: 'auto',
    },
    seeMore: {
        padding: 10,
        borderRadius: 5,
    },
})
export default HomeScreen;
