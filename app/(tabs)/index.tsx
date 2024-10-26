import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Slider from "../components/Slider";
import TabCategories from "../components/TabCategories";
import ProductsList from "../components/ProductosList";

export default function CategoryTabs() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [text, setText] = useState("");

  const width = Dimensions.get("window").width;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ padding: 20 }}>
        {/* Cabezal */}
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              height: 40,
              width: 40,
              borderRadius: 15,
            }}
          >
            <Feather name="grid" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Explore</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              height: 40,
              width: 40,
              borderRadius: 15,
            }}
          >
            <Icon name="search" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Slider />
          </View>

          {/* Título de sección de productos */}
          <View style={styles.homeSection}>
            <Text style={styles.textTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TabCategories />
          </View>
          <View>
            <ProductsList />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  safeArea: {
    flex: 1,
    padding: 10,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  viewAllText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
    textDecorationLine: "underline",
  },
});
