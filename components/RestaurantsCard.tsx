import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../redux/actions/RestaurantsActions';

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
        <TouchableOpacity
            onPress={goToDetails}
            style={styles.cardContainer}
        >
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.categoriesContainer}>
                    {categories?.map((category, index) => (
                        <Text key={index} style={styles.category}>
                            {category}
                        </Text>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        margin: 10,
        width: 250, // Customize the width as needed
        height: 150, // Set a fixed height (adjust as necessary)
        borderRadius: 10,
        elevation: 3,
        overflow: 'hidden'
    },
    image: {
        height: 100, // Set a fixed height for the image
        width: '100%',
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