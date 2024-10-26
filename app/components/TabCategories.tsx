import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { useState } from "react";
import TabData from "./data/TabData";
import TabItem from "./TabItem";

const TabCategories = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleTabPress = (id: number) => {
    setActiveTab(id === activeTab ? null : id); // Si ya está activo, desactívalo, de lo contrario, actívalo
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={TabData}
        renderItem={({ item }) => (
          <TabItem
            item={item}
            isActive={item.id === activeTab} // Pasa el estado de activación
            onPress={() => handleTabPress(item.id)} // Llama a la función al presionar
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TabCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
