import React, { useEffect, useState } from "react";
import {FlatList, ScrollView, StyleSheet, View, TouchableOpacity, Image} from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBox from "../components/SearchBox";
import RestaurantsCard from "../components/Cards/RestaurantsCard";
import CategoryCard from "../components/Cards/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantThunk } from "../redux/middleware/RestaurantThunk";
import * as SecureStore from 'expo-secure-store';
import * as Font from 'expo-font';

import {NewsThunk} from "../redux/middleware/NewsThunk";
import NewsCard from "../components/Cards/NewsCard";
// @ts-ignore
const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const asiat: Category = {name: "Asiatique", categoryLogo: "noodles"}
    const bakery: Category = {name: "Boulangerie", categoryLogo: "bakery"}
    const sushi: Category = {name: "Sushi", categoryLogo: "sushi"}
    const cafe: Category = {name: "Café", categoryLogo: "cafe"}
    const burger: Category = {name: "Burger", categoryLogo: "burger"}
    const halal: Category = {name: "Halal", categoryLogo: "halal"}
    const indian: Category = {name: "Indien", categoryLogo: "indian"}
    const fastfood: Category = {name: "Fastfood", categoryLogo: "fastfood"}
    const pizza: Category = {name: "Pizza", categoryLogo: "pizza"}
    const poke: Category = {name: "Poke", categoryLogo: "poke"}
    const icecream: Category = {name: "Glace", categoryLogo: "icecream"}
    const mexican: Category = {name: "Mexicain", categoryLogo: "mexican"}
    const viet: Category = {name: "Vietnamien", categoryLogo: "vietnam"}
    const vegan: Category = {name: "Vegan", categoryLogo: "vegan"}
    const traiteur: Category = {name: "Traiteur", categoryLogo: "traiteur"}
    const italian: Category = {name: "Italien", categoryLogo: "italian"}

    const restaurants: Array<Restaurant> = useSelector((state: any) => state.restaurantReducer.restaurants);
    const categories: Array<Category> = [asiat, bakery, sushi, cafe, burger, halal, indian, fastfood, pizza, poke, icecream, mexican, viet, vegan, traiteur, italian];
    const news: Array<News> = useSelector((state: any) => state.newsReducer.news);

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (text: string) => {
        setSearchValue(text);
    };

    const [showAllCategories, setShowAllCategories] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        SecureStore.getItemAsync('token').then((token) => {
            if (token) {
                // @ts-ignore
                dispatch(RestaurantThunk(token));
            }
        });

    }, [dispatch]);

    useEffect(() => {
        SecureStore.getItemAsync('token').then((token) => {
            if (token) {
                // @ts-ignore
                dispatch(NewsThunk(token));
            }
        });

    }, [dispatch]);

    const filteredCategories = showAllCategories ? categories : categories.slice(0, 4);



    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <MaterialCommunityIcons style={styles.icon} name="home" size={35} color="#777"/>
                </TouchableOpacity>
                <View style={styles.subheader}>
                    <Text style={styles.title}>Hello Arthur !</Text>
                    <View style={styles.subtitleContainer}>
                        <MaterialCommunityIcons style={styles.iconSubtitle} name="food" size={20} color="green"/>
                        <Text style={styles.topSubtitle}>Welcome on LePetitChef</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <MaterialCommunityIcons style={styles.icon} name="account" size={35} color="#777"/>
                </TouchableOpacity>
            </View>



            <Text style={styles.mainTitle}>Les Meilleurs Restaurants</Text>
            <SearchBox setValueSearch={handleSearchChange} placeholder={"Find your restaurant..."}/>

            <View style={styles.categoriesHeader}>
                <Text style={styles.subtitle}>Catégories</Text>
                    <TouchableOpacity style={styles.seeAllButton} onPress={() => setShowAllCategories(!showAllCategories)}>
                        <Text style={styles.seeAllText}>Voir tout...</Text>
                    </TouchableOpacity>
            </View>

            <FlatList
                style={styles.categoriesContainer}
                data={filteredCategories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(category, index) => index.toString()}
                renderItem={({item}) => (
                    <CategoryCard category={item}/>
                )}
            />


            {/*<FlatList
                data={news}
                horizontal
                pagingEnabled
                snapToInterval={10}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <NewsCard news={item} onPress={undefined} />
                )}
            />*/}

            <Text style={styles.subtitle}>Les Restaurants à la une</Text>
            <ScrollView style={styles.restaurantContainer}>
                {restaurants.map((restaurant, index) => (
                    <RestaurantsCard restaurant={restaurant} key={index}/>
                ))}
            </ScrollView>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "#fff",
    },
    categoriesContainer: {
        width: "100%",
        height: 120,
        marginBottom: 10,
    },
    header: {
        height :80,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#F0F0F0",
        borderBottomStartRadius: 80,
        borderBottomEndRadius: 80,
        paddingHorizontal: 15, // Ajout de padding horizontal pour espace intérieur
        paddingVertical: 10, // Ajout de padding vertical pour espace intérieur
        marginBottom: 20, // Ajout de marge basse pour espacement par rapport aux éléments suivants
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: { width: 0, height: 4 }, // Offset de l'ombre
        shadowOpacity: 0.1, // Opacité de l'ombre
        shadowRadius: 4, // Rayon de l'ombre
        elevation:10, // Élévation de l'ombre pour Android
    },
    restaurantContainer: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    cardContainer: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 3,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainTitle: {
        fontSize: 25,
        fontFamily: 'PatuaOne_400Regular',
        marginLeft: 15,
        color : "#003C57"
    },
    button:{
        marginHorizontal: 15, // Réduction de la marge horizontale pour rapprocher les boutons
    },
    title: {
        fontSize: 14,
        color: "#999",
    },
    topSubtitle: {
        fontSize: 15,
        fontFamily: 'PatuaOne_400Regular',
        fontWeight: "bold",
        color: "black",
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'PatuaOne_400Regular',
        marginLeft: 15,
        color : "#003C57",
    },
    categoriesHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Pour aligner les éléments horizontalement et les espacer
    },
    seeAllButton: {
        borderColor: '#003C57',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 80,
        marginRight: 15,
        marginTop: 10,
    },
    seeAllText: {
        color: '#003C57',
        fontStyle: 'italic',
        fontSize: 12,
        fontFamily: 'PatuaOne_400Regular',
    },
    icon:{
        padding:5,
    },
    subheader: {
        alignItems: 'center',
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSubtitle: {
        marginRight: 5
    },
    indicator: {
        fontSize: 18,
        color: '#888',
        marginHorizontal: 5,
    },
    activeIndicator: {
        color: '#fff',
    },
});

export default HomeScreen;
