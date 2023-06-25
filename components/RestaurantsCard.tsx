import {Image, Pressable, View} from "react-native";
import {Text} from "react-native-paper";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {useDispatch} from "react-redux";
import {setRestaurant} from "../redux/actions/RestaurantsActions";

type RestaurantsCardProps = {
    restaurant: Restaurant,


}

type MainScreenNavigationProp = StackNavigationProp<any>;


const RestaurantsCard = (props : RestaurantsCardProps) => {
    const dispatch = useDispatch();

    const goToDetails = () => {
        dispatch(setRestaurant(restaurant))
        navigation.navigate('RestaurantScreen')
    }
    const navigation = useNavigation<MainScreenNavigationProp>();

    const {restaurant} = props;
    const title = restaurant?.name;
    const image = restaurant?.images && restaurant.images[0];
    const categories = restaurant?.categories;


    return (
        <Pressable onPress={() => goToDetails()}>
            <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
                <Image source={{uri : image}} style={{
                    borderRadius: 10,
                    aspectRatio : 2
                }}/>
                <Text variant={"titleLarge"}>{title}</Text>

                <View style={{flexDirection : "row"}}>
                    {
                        categories?.map((categorie, index) => {
                            return (
                                <Text variant={"bodyMedium"} style={{backgroundColor: "lightgrey", padding: 10, borderRadius: 10, marginRight : 5 }} key={index}>{categorie}</Text>
                            )
                        })
                    }
                </View>
            </View>
        </Pressable>
    )
}


export default RestaurantsCard;
