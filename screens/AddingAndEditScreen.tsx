import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { DataTable, Divider, IconButton, Text } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import CustomFloatingButton from "../components/CustomFloatingButton";
import TextBox from "../components/TextBox";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as SecureStore from "expo-secure-store";
import {
  addRestaurantThunk,
  deleteRestaurantThunk,
  RestaurantThunk,
} from "../redux/middleware/RestaurantThunk";
import SearchBox from "../components/SearchBox";
import RestaurantForm from "./layout/RestaurantForm";
import RestaurantList from "./layout/RestaurantList";

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

  const deleteRestaurant = (restaurantId: string | undefined) => {
    // @ts-ignore
    dispatch(deleteRestaurantThunk(restaurantId));  };

  const AddRestaurant = () => {
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
        console.log("token: " + token);
        // @ts-ignore
        dispatch(addRestaurantThunk(token, restaurant));
      }
    });
  };

  return (
    <View style={styles.container}>
      {adding ? (
       <RestaurantForm
        onBack={() => setAdding(false)}
        onSubmit={AddRestaurant}
        onLocationSelect={() => setModalVisible(true)}
      />
      ) : (
       <RestaurantList
        restaurants={restaurants}
        onAddRestaurant={() => setAdding(true)}
        onDeleteRestaurant={deleteRestaurant}
      />
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
              <Marker
                coordinate={{ latitude: latitude, longitude: longitude }}
              />
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
    backgroundColor: "#0366fc",
    borderRadius: 10,
    marginTop: 10,
  },
  validationButton: {
    backgroundColor: "#008000",
    borderRadius: 10,
    maxWidth: 200,
    margin: 10,
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
