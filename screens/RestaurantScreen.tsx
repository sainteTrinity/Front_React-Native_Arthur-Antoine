import React, {useEffect} from "react";
import {Divider, IconButton, Text} from 'react-native-paper';
import {
    Dimensions,
    FlatList,
    Image,
    ImageSourcePropType,
    ScrollView,
    View
} from "react-native";
import {useSelector} from "react-redux";

type GalelryType = {
    source: ImageSourcePropType;
}
const RestaurantScreen = () => {
    const restaurant : Restaurant= useSelector((state: any) => state.restaurantReducer.restaurantSelected)



    const renderImage = ({ item }: { item: string }) => {
        const windowWidth = Dimensions.get('window').width;
        const imageWidth = (windowWidth - 40) / 2;


        return (
            <View style={{ margin: 10 }}>
                <Image source={{ uri : item.replace(/\s/g, "")}} style={{ width: imageWidth, borderRadius: 10 }} />
            </View>
        );
    };

    return (


        <>
            {
                restaurant.images &&
                <ScrollView>
                    <View>
                        <Image source={{ uri : restaurant.images[0].replace(/\s/g, "")}} style={{
                            borderRadius: 10,
                            width: "100%",
                            height: 200,

                        }}/>
                        <Text style={{marginTop: 40, marginLeft: 30}} variant={"titleLarge"}>{restaurant.name}</Text>

                        <Divider style={{marginLeft: 20, marginRight: 20, marginTop: 10}}/>

                        <Text style={{marginTop: 40, marginLeft: 30}} variant={"titleMedium"}>Description</Text>
                        <Text style={{marginTop: 2, marginLeft: 35}} variant={"bodyMedium"}>{restaurant.description}</Text>

                        <View style={{
                            flexDirection: "row", alignItems: 'center',
                            justifyContent: 'space-between', marginLeft: 30, marginRight: 10
                        }}>
                            <Text style={{}} variant={"titleMedium"}>Menu</Text>
                            <IconButton style={{borderRadius: 10, borderColor: "black", borderWidth: 1, marginLeft: 10}}
                                        icon={"download"}/>
                        </View>

                        <Image source={{uri: 'https://placekitten.com/640/360'}} style={{
                            borderRadius: 10,
                            width: "100%",
                            height: 290,
                            marginTop: 10
                        }}/>

                        <Text style={{marginTop: 40, marginLeft: 30}} variant={"titleMedium"}>Galerie</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <FlatList
                            scrollEnabled={false}
                            numColumns={2}
                            data={restaurant.images}
                            renderItem={(item) => renderImage(item)}
                            keyExtractor={item => item}
                        />

                    </ScrollView>

                </ScrollView>

            }
        </>
    );
};

export default RestaurantScreen;
