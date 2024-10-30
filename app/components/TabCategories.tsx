// TabCategories.tsx
import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { useState } from "react";
import TabData from "./data/TabData";
import TabItem from "./TabItem";

interface TabCategoriesProps {
  selectedCategory: string | null; // Cambiar a string
  setSelectedCategory: (category: string | null) => void; // Cambiar a string
}

const TabCategories: React.FC<TabCategoriesProps> = ({ selectedCategory, setSelectedCategory }) => {
  const handleTabPress = (title: string) => {
    setSelectedCategory(title === selectedCategory ? null : title); // Cambia a título
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={TabData}
        renderItem={({ item }) => (
          <TabItem
            item={item}
            isActive={item.title === selectedCategory} // Comparar con el título
            onPress={() => handleTabPress(item.title)} // Usar el título
          />
        )}
        keyExtractor={(item) => item.title} // Cambiar a title
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
