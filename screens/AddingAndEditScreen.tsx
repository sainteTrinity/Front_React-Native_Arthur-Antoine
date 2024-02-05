import React, { useEffect, useState } from "react";
import {Alert, Modal, StyleSheet, TouchableOpacity, View} from "react-native";
import { DataTable, Divider, IconButton, Text } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import CustomFloatingButton from "../components/CustomFloatingButton";
import TextBox from "../components/TextBox";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { setRestaurant } from "../redux/actions/RestaurantsActions";
import * as SecureStore from "expo-secure-store";
import {addRestaurantThunk, RestaurantThunk} from "../redux/middleware/RestaurantThunk";
import { MaterialIcons } from "@expo/vector-icons";

const AddingAndEditScreen = () => {
    const dispatch = useDispatch();

    const [adding, setAdding] = React.useState(false);
    const restaurants: Array<Restaurant> = useSelector(
        (state: any) => state.restaurantReducer.restaurants
    );
    const [modalVisible, setModalVisible] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [isNameValid, setNameValid] = useState(false);
    const [isDescriptionValid, setDescriptionValid] = useState(false);
    const [isAddressValid, setAddressValid] = useState(false);
    const [isPhoneValid, setPhoneValid] = useState(false);
    const [isWebsiteValid, setWebsiteValid] = useState(false);
    const [isFormValid, setFormValid] = useState(false);

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
            <DataTable.Row>
                <DataTable.Cell>{restaurant.name}</DataTable.Cell>
                <DataTable.Cell>
                    <IconButton
                        icon="pencil"
                        iconColor="green"
                        onPress={() => console.log("Edit")}
                    />
                    <IconButton
                        icon="delete"
                        iconColor="red"
                        onPress={() => console.log("Delete")}
                    />
                </DataTable.Cell>
            </DataTable.Row>
        );
    };

    const validateName = () => {
        const isValid = name.trim().length > 0;
        setNameValid(isValid);
        return isValid;
    };

    const validateDescription = () => {
        const isValid = description.trim().length > 0;
        setDescriptionValid(isValid);
        return isValid;
    };

    const validateAddress = () => {
        const isValid = address.trim().length > 0;
        setAddressValid(isValid);
        return isValid;
    };

    const validatePhone = () => {
        const isValid = phone.length >= 0 && phone.length <= 10 ;
        setPhoneValid(isValid)
        console.log("phone valid: " + phone);
        console.log("phone: " + phone);
        return isValid;
    };

    const validateWebsite = () => {
        const isValid = !website.match(/^https?:\/\/.+\..+/) || website.trim().length === 0;
        setWebsiteValid(isValid);
        return isValid;
    };

    const validateForm = () => {
        const isValid =
            validateName() &&
            validateDescription() &&
            validateAddress() &&
            validatePhone() &&
            validateWebsite();
        // @ts-ignore
        setFormValid(isValid);
        return isValid;
    };

    const AddRestaurant = () => {
        if (validateForm()) {
            const restaurant: Restaurant = {
                name: name,
                description: description,
                phoneNumber: phone,
                website: website,
                coordinates: {
                    latitude: latitude,
                    longitude: longitude,
                },
                address: address,
            };
            SecureStore.getItemAsync("token").then((token) => {
                if (token) {
                    addRestaurantThunk(token,restaurant);
                }
            });
        } else {
            Alert.alert("Validation Error", "Please fill out all fields correctly.");
        }
    };

    return (
        <View style={styles.container}>
            {adding ? (
                <View style={styles.addingContainer}>
                    <CustomFloatingButton
                        onPress={() => setAdding(false)}
                        floatingPosition="top-left"
                        content={<MaterialIcons name="arrow-back" size={24} color="white" />}
                    />
                    <Text style={styles.addingTitle}>Ajouter un restaurant</Text>
                    <TextBox content="Nom du restaurant" setContent={setName} />
                    { !isNameValid && <Text style={{color : 'red'}}>Le nom du restaurant est obligatoire</Text> }

                    <TextBox content="Description du restaurant" setContent={setDescription} />
                    { !isDescriptionValid && <Text style={{color : 'red'}}>La description du restaurant est obligatoire</Text> }

                    <TextBox content="Téléphone du restaurant" setContent={setPhone} type={"phone"}/>
                    { !isPhoneValid && <Text style={{color : 'red'}}>Le numéro de téléphone du restaurant est obligatoire</Text> }

                    <TextBox content="Adresse du restaurant" setContent={setAddress} />
                    { !isAddressValid && <Text style={{color : 'red'}}>L'adresse du restaurant est obligatoire</Text> }

                    <TextBox content="Site web du restaurant" setContent={setWebsite} />
                    { !isWebsiteValid && <Text style={{color : 'red'}}>Le site web du restaurant est obligatoire</Text> }


                    <View style={styles.locationContainer}>
                        <Text variant="titleMedium" style={styles.locationTitle}>
                            Localisation
                        </Text>

                        <CustomButton
                            label="Sélectionner"
                            action={() => setModalVisible(true)}
                            style={styles.locationButton}
                        />
                    </View>
                    <CustomButton
                        label="Valider"
                        style={styles.validationButton}
                        action={AddRestaurant}
                    />
                </View>
            ) : (
                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>Liste des restaurants</Text>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Nom du restaurant</DataTable.Title>
                            <DataTable.Title>Actions</DataTable.Title>
                        </DataTable.Header>
                        {restaurants?.map((restaurant) => renderRow(restaurant))}
                    </DataTable>
                    <Divider />
                    <View style={styles.addButtonContainer}>
                        <Text style={styles.addButtonText}>
                            Envie de rajouter un restaurant ?
                        </Text>
                        <CustomButton
                            label="Ajouter un restaurant"
                            action={() => setAdding(true)}
                            style={styles.addButton}
                        />
                    </View>
                </View>
            )}
            <Modal visible={modalVisible}>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
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
                        {latitude !== 0 && longitude !== 0 && (
                            <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
                        )}
                    </MapView>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={styles.modalButton}
                    >
                        <Text style={styles.modalButtonText}>Retour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={styles.modalButton}
                    >
                        <Text style={styles.modalButtonText}>Valider</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    addingContainer: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        padding: 16,
    },
    addingTitle: {
        alignSelf: "center",
        marginTop: 20,
        fontSize: 24,
        fontWeight: "bold",
    },
    locationContainer: {
        maxWidth: 200,
        alignSelf: "center",
    },
    locationTitle: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    locationButton: {
        backgroundColor: "#008000",
        borderRadius: 10,
    },
    validationButton: {
        backgroundColor: "#008000",
        borderRadius: 10,
        maxWidth: 200,
        margin:10,
        alignSelf: "center",
    },
    listContainer: {
        flex: 1,
    },
    listTitle: {
        marginTop: 40,
        marginLeft: 10,
        fontSize: 24,
        fontWeight: "bold",
    },
    addButtonContainer: {
        flex: 1,
    },
    addButtonText: {
        marginBottom: 5,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    addButton: {
        backgroundColor: "#008000",
        borderRadius: 10,
        maxWidth: 200,
        alignSelf: "center",
    },
    mapContainer: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    modalButton: {
        position: "absolute",
        top: 16,
        padding: 8,
        backgroundColor: "#90EE90",
        borderRadius: 10,
    },
    modalButtonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default AddingAndEditScreen;
