import {Image, View} from "react-native";
import {Text} from "react-native-paper";
import React from "react";


const RestaurantsCard = () => {


    return (
        <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
            <Image source={require('../assets/images/resto.png')} style={{
                borderRadius: 10,
                aspectRatio : 2
            }}/>
            <Text variant={"titleLarge"}>Le restaurants</Text>

            <View style={{flexDirection : "row"}}>
                <Text variant={"bodyMedium"} style={{backgroundColor: "lightgrey", padding: 10, borderRadius: 10, marginRight : 5 }}>vegan </Text>
                <Text variant={"bodyMedium"} style={{backgroundColor: "lightgrey", padding: 10, borderRadius: 10, marginRight : 5 }}>vegan </Text>
                <Text variant={"bodyMedium"} style={{backgroundColor: "lightgrey", padding: 10, borderRadius: 10, marginRight : 5 }}>vegan </Text>
                <Text variant={"bodyMedium"} style={{backgroundColor: "lightgrey", padding: 10, borderRadius: 10, marginRight : 5 }}>vegan </Text>
                <Text variant={"bodyMedium"} style={{backgroundColor: "lightgrey", padding: 10, borderRadius: 10, marginRight : 5 }}>vegan </Text>



            </View>
        </View>
    )
}


export default RestaurantsCard;
