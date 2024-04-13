import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const StocksListScreen = ({ stocks }) => {
  return (
    <View style={styles.container}>
      <Text>Lista de Acciones Disponibles</Text>
      <FlatList
        data={stocks}
        renderItem={({ item }) => (
          <View style={styles.stockItem}>
            <Text>{item.name}</Text>
            <Text>{item.country}</Text>
            {/* Otros detalles de la acción */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stockItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
});

export default StocksListScreen;
