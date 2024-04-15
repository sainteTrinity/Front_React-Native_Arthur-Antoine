import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../redux/actions/RestaurantsActions';

type RestaurantsCardProps = {
    restaurant: Restaurant;
};

const RestaurantsCard: React.FC<RestaurantsCardProps> = ({ restaurant }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const goToDetails = () => {
        dispatch(setRestaurant(restaurant));
        // @ts-ignore
        navigation.navigate('RestaurantScreen');
    };

    const title = restaurant?.name;
    const image = restaurant?.images && restaurant.images[0].replace(/\s/g, "");
    const categories = restaurant?.categories;

    return (
        <View>
            <TouchableOpacity onPress={goToDetails} style={styles.cardContainer}>
                <Image source={{ uri: image }} style={styles.image} />

            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>



            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'red',
        width: "100%",
        borderRadius: 10,
        elevation: 3,
        overflow: 'hidden'
    },
    image: {
        height: 150,
        width: "100%",
    },
    infoContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    categoriesContainer: {
        flexDirection: 'row',
    },
    category: {
        backgroundColor: '#EDEDED',
        padding: 8,
        borderRadius: 10,
        marginRight: 5,
        fontSize: 14,
    },
});

export default RestaurantsCard;