import {Image, Text, View} from "react-native";
import React from "react";


const RestaurantScreen = () => {

    return (
        <View>
            <Image source={require('../assets/images/resto.png')} style={{
                borderRadius: 10,
                aspectRatio : 2
            }}/>
            <Text>RestaurantScreen</Text>
        </View>
    )
}

export default RestaurantScreen;
