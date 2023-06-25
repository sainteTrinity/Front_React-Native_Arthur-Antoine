import React, {useEffect, useState} from "react";
import {Modal, StyleSheet, TouchableOpacity, View} from "react-native";
import {DataTable, Divider, IconButton, Text} from 'react-native-paper';
import CustomButton from "../components/CustomButton";
import CustomFloatingButton from "../components/CustomFloatingButton";
import TextBox from "../components/TextBox";
import {useDispatch, useSelector} from "react-redux";
import MapView, {Marker} from "react-native-maps";
import * as Location from 'expo-location';
import {setRestaurant} from "../redux/actions/RestaurantsActions";
import * as SecureStore from "expo-secure-store";
import {RestaurantThunk} from "../redux/middleware/RestaurantThunk";

const AddingAndEditScreen = () => {
    const dispatch = useDispatch();

    const [adding, setAdding] = React.useState(false);
    const restaurants : Array<Restaurant> = useSelector((state: any) => state.restaurantReducer.restaurants);
    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [location, setLocation] = useState<Location.LocationObject | null>(
        null
    );

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    const renderRow = (restaurant: Restaurant) => {
        return (
            <DataTable.Row >
                <DataTable.Cell>{restaurant.name}</DataTable.Cell>
                <DataTable.Cell>
                    <IconButton icon={"pencil"} iconColor={"green"} onPress={() => console.log("Edit")}/>
                    <IconButton icon={"delete"} iconColor={"red"} onPress={() => console.log("Delete")}/>
                </DataTable.Cell>
            </DataTable.Row>
        )
    }

    const AddRestaurant = () => {
        const restaurant : Restaurant = {
            name: name,
            description: description,
            telephone: phone,
            website: website,
            coordinates: {
                latitude: latitude,
                longitude: longitude
            },
            address: address
        }
        SecureStore.getItemAsync('token').then((token) => {
            if (token) {
                // @ts-ignore
                dispatch(AddRestaurant(token,restaurant))
            }
        })



    }

    return (
        <View style={{marginLeft: 10, flex: 1}}>
            {
                adding  ?
                    <View>
                        <CustomFloatingButton onPress={() => setAdding(false)} floatingPosition={"top-left"}
                                              content={"<"}/>
                        <Text style={{alignSelf: "center", marginTop: 20}} variant={"titleLarge"}>Ajouter un restaurant</Text>
                        <View style={{height: 20}}/>
                        <TextBox content={"Nom du restaurant"} setContent={setName}/>
                        <View style={{height: 20}}/>

                        <TextBox content={"Description du restaurant"} setContent={setDescription}/>
                        <View style={{height: 20}}/>

                        <TextBox content={"Téléphone du restaurant"} setContent={setPhone}/>
                        <View style={{height: 20}}/>

                        <TextBox content={"Adresse du restaurant"} setContent={setAddress}/>
                        <View style={{height: 20}}/>

                        <TextBox content={"Site web du restaurant"} setContent={setWebsite}/>
                        <View style={{height: 20}}/>

                        <View style={{maxWidth: 200, alignSelf: "center"}}>
                            <Text variant={"titleMedium"} style={{alignSelf : "center"}}> Localisation</Text>
                            <CustomButton label={"Selectionner"} action={() => setModalVisible(true)}/>
                        </View>

                        <View style={{height: 20}}/>

                        <CustomButton  label={"Valider"} style={Style.validationButton} action={() => AddRestaurant}/>

                    </View>
                    :
                    <>
                        <Text style={{marginTop: 40, marginLeft: 10}} variant={"titleLarge"}>Liste des restaurtants</Text>

                        <View>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Nom du restaurants</DataTable.Title>
                                    <DataTable.Title>Actions</DataTable.Title>
                                </DataTable.Header>
                                {
                                    restaurants?.map((restaurant) => renderRow(restaurant))
                                }
                            </DataTable>
                        </View>

                        <View style={{flex: 1}}/>
                        <Divider/>

                        <View style={{marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                            <Text style={{marginBottom: 5, marginTop: 10}} variant={"titleLarge"}>Envie de rajouter un
                                restaurant
                                ?</Text>
                            <CustomButton label={"Ajouter un restaurant"}
                                          action={() => setAdding(true)}/>
                        </View>
                    </>
            }
            <Modal visible={modalVisible}>
                <View style={{ flex: 1 }}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: location?.coords.latitude || 0,
                            longitude: location?.coords.longitude || 0,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        onPress={(event) => {
                        const { latitude, longitude } = event.nativeEvent.coordinate;
                        setLatitude(latitude);
                        setLongitude(longitude);
                    }}

                    >
                        {
                            latitude !== 0 && longitude !== 0 &&
                            <Marker coordinate={{latitude :latitude, longitude:longitude}} />
                        }
                    </MapView>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            backgroundColor: "white",
                            borderRadius: 10,
                            padding: 8,
                        }}
                    >
                        <Text>Retour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            backgroundColor: "#90EE90",
                            borderRadius: 10,
                            padding: 8,
                        }}
                    >
                        <Text>Valider</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const Style = StyleSheet.create({
    validationButton: {
        backgroundColor: "#008000",
        borderRadius: 10,
        justifyContent: "center",
        maxWidth: 200,
        alignSelf: "center",
    },
});
export default AddingAndEditScreen;
