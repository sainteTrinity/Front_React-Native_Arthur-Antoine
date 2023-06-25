import React, {useEffect} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Button, IconButton, Text} from 'react-native-paper';
import SearchBox from "../components/SearchBox";
import ListCategoriesLayout from "./layout/ListCategoriesLayout";
import RestaurantsCard from "../components/RestaurantsCard";
import {useDispatch, useSelector} from "react-redux";
import {RestaurantThunk} from "../redux/middleware/RestaurantThunk";
import * as SecureStore from 'expo-secure-store';

const HomeScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        SecureStore.getItemAsync('token').then((token) => {
            if (token) {
                dispatch(RestaurantThunk(token))
            }
        })
    }, [dispatch])

    const restaurants : Array<Restaurant> = useSelector((state: any) => state.restaurantReducer.restaurants);


    return (
        <View style={styles.container}>

            <Text variant={"titleMedium"}>Hey !</Text>
            <Text variant={"displaySmall"}>Une petite faim ?</Text>

            <SearchBox/>

            {
                /**
                 * For V1.2
                 */
                /*
                <View style={styles.categorieTitle}>
                <Text variant={"titleLarge"}>Catégories</Text>
                {

                    <View style={styles.buttonContainer}>
                    <Button style={styles.seeMore}>Voir tout</Button>
                </View>

                }
            </View>

            <ListCategoriesLayout />
                 */
            }


            <Text variant={"titleLarge"} style={{marginTop: 20}}>Restaurants Ouverts</Text>


            <ScrollView>
                {
                    restaurants  && restaurants.length > 0 ?
                        restaurants.map((restaurant : Restaurant, index) => {
                            return (
                                <RestaurantsCard
                                    key={index}
                                    restaurant={restaurant}
                                />

                            )
                        })
                        :
                        <Text>Chargement...</Text>
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
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
