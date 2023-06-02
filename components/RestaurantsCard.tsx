import {Image, Pressable, View} from "react-native";
import {Text} from "react-native-paper";
import React from "react";

type RestaurantsCardProps = {
    title: string,
    image?: string,
    categories?: string[]

}
const RestaurantsCard = (props : RestaurantsCardProps) => {

    const {title, image, categories} = props;

    return (
        <Pressable onPress={() => console.log("Click sur un restaaurant: " + title)}>
            <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
                <Image source={require('../assets/images/resto.png')} style={{
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
