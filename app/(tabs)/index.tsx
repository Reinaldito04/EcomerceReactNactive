import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Slider from "../components/Slider";
import TabCategories from "../components/TabCategories";
import ProductsList from "../components/ProductosList";

export default function CategoryTabs() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#dddddd" // Solo Android
        barStyle="dark-content" // Color de contenido en ambas plataformas
        translucent={Platform.OS === "ios"} // Para iOS permite translucidez
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Feather name="grid" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.textTitle}>Explore</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Slider />

          {/* Sección de categorías */}
          <View style={styles.homeSection}>
            <Text style={styles.textTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <TabCategories />
          <ProductsList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5", // Fondo para la zona segura
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal:10,
    width: "100%",
  },
  contentContainer: {
    padding: 15,
  },
  homeSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  viewAllText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    borderRadius: 15,
  },
});
