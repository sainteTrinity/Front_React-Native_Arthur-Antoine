import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Button, IconButton, Text} from 'react-native-paper';
import SearchBox from "../components/SearchBox";
import ListCategoriesLayout from "./layout/ListCategoriesLayout";
import RestaurantsCard from "../components/RestaurantsCard";

const HomeScreen = () => {
    //TODO: A remplacer par redux
    const [restaurants, setRestaurants] = React.useState<Array<Restaurant>>([]);
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

            <ScrollView>
                <RestaurantsCard  title={"Le restaurant"} />
                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <RestaurantsCard key={index} title={restaurant.title} image={restaurant.image}
                                             categories={restaurant.categories}/>
                        )
                    })
                }

            </ScrollView>
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
