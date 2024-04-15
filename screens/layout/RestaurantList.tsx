import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import {
  Button,
  DataTable,
  Divider,
  IconButton,
  Text,
} from "react-native-paper";
import CustomFloatingButton from "../../components/CustomFloatingButton";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";

interface RestaurantListProps {
  restaurants: Array<Restaurant>;
  onAddRestaurant: () => void;
  onDeleteRestaurant: (restaurantId: string | undefined) => void;
}

const RestaurantList = ({
  restaurants,
  onAddRestaurant,
  onDeleteRestaurant,
}: RestaurantListProps) => {
  return (
    <View style={styles.listContainer}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Actions</DataTable.Title>
        </DataTable.Header>

        {restaurants.map((restaurant, index) => (
          <View key={restaurant.id}>
            <DataTable.Row>
              <DataTable.Cell>{restaurant.name}</DataTable.Cell>
              <DataTable.Cell numeric>
                <IconButton
                  icon="delete"
                  onPress={() => onDeleteRestaurant(restaurant.id)}
                  iconColor="red"
                />
              </DataTable.Cell>
            </DataTable.Row>
            <Divider />
          </View>
        ))}
      </DataTable>
      <IconButton
        icon="plus"
        iconColor="white"
        size={30}
        onPress={() => onAddRestaurant()}
        style={styles.addingButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 10,
  },
  addingButton: {
    marginTop: 10,
    borderRadius: 50,
    alignSelf: "flex-end",
    backgroundColor: "green",
  },
});

export default RestaurantList;
