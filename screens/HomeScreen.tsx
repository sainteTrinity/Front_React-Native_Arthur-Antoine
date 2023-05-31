import React from "react";
import {StyleSheet, View} from "react-native";
import { Text } from 'react-native-paper';
import SearchBox from "../components/SearchBox";
import CategorieComponent from "../components/CategorieComponent";
import Logo from "../assets/icon/noodles.svg";


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text variant={"titleMedium"}>Hey !</Text>
            <Text variant={"displaySmall"}>Une petite faim ?</Text>

            <SearchBox/>

            <Text variant={"titleLarge"} style={styles.categorieTitle}>Catégories</Text>

            <CategorieComponent icon={Logo} label={"sushi"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginLeft: 20,
        marginRight: 20
    },

    categorieTitle : {
        marginLeft : 15
    }
})
export default HomeScreen;
