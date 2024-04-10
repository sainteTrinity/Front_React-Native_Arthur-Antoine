import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import burger from "../../assets/icon/png/burger.png";
import bakery from '../../assets/icon/png/bakery.png';
import cafe from '../../assets/icon/png/cafe.png';
import fastfood from '../../assets/icon/png/fastfood.png';
import halal from '../../assets/icon/png/halal.png';
import indian from '../../assets/icon/png/indian.png';
import pizza from '../../assets/icon/png/pizza.png';
import poke from '../../assets/icon/png/poke.png';
import sushi from '../../assets/icon/png/sushi.png';
import icecream from '../../assets/icon/png/icecream.png';
import mexican from '../../assets/icon/png/mexican.png';
import viet from '../../assets/icon/png/vietnam.png';
import vegan from '../../assets/icon/png/vegan.png';
import traiteur from '../../assets/icon/png/traiteur.png';
import italian from '../../assets/icon/png/italian.png';


// @ts-ignore
import { Category } from '../../types';
type CategoryCardProps = {
    category: Category;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const goToDetails = () => {
    };

    const { name, categoryLogo } = category;

    let imageSource;
    switch (name) {
        case 'Asiatique':
            imageSource = sushi;
            break;
        case 'Boulangerie':
            imageSource = bakery;
            break;
        case 'Sushi':
            imageSource = sushi;
            break;
        case 'Café':
            imageSource = cafe;
            break;
        case 'Burger':
            imageSource = burger;
            break;
        case 'Halal':
            imageSource = halal;
            break;
        case 'Indien':
            imageSource = indian;
            break;
        case 'Fastfood':
            imageSource = fastfood;
            break;
        case 'Pizza':
            imageSource = pizza;
            break;
        case 'Poke':
            imageSource = poke;
            break;
        case 'Glace':
            imageSource = icecream;
            break;
        case 'Mexicain':
            imageSource = mexican;
            break;
        case 'Vietnamien':
            imageSource = viet;
            break;
        case 'Vegan':
            imageSource = vegan;
            break;
        case 'Traiteur':
            imageSource = traiteur;
            break;
        case 'Italien':
            imageSource = italian;
            break;
        default:
            imageSource = burger; // or any other default image
            break;
    }

    return (
        <TouchableOpacity onPress={goToDetails} activeOpacity={0.8}>
            <View style={styles.container}>
                <Image source={imageSource} style={styles.image} />
                <Text style={styles.title}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CategoryCard;