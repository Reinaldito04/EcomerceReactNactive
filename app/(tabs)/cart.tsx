import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  import EvilIcons from "@expo/vector-icons/EvilIcons";
  import { router } from "expo-router";
  import { ProductosDataCard } from "../components/data/ProductsData";
  import CartProducts from "../components/CartProducts";
  
  const Cart = () => {
    // Función para manejar la eliminación de un producto
    const handleRemoveProduct = (id) => {
      console.log("Remove product with ID:", id);
      // Aquí puedes agregar la lógica para eliminar el producto del carrito
    };
  
    return (
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>
  
        {/* Products Section */}
        <View style={styles.productsSection}>
          <Text style={styles.titleProduct}>Products</Text>
          <View style={styles.itemRow}>
            <Text style={styles.itemLabel}>Items</Text>
            <TouchableOpacity>
              <EvilIcons name="trash" size={30} color="black" />
            </TouchableOpacity>
          </View>
  
          {/* FlatList for Cart Products */}
          <FlatList
            data={ProductosDataCard}
            renderItem={({ item }) => (
              <CartProducts item={item} onRemove={handleRemoveProduct} />
            )}
            keyExtractor={(item) => item.id.toString()} // Asegura que cada item tenga una key única
            contentContainerStyle={styles.flatListContent} // Asegura que haya espacio adicional al final
            showsVerticalScrollIndicator={false} // Opcional: oculta el indicador de desplazamiento
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Cart;
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#f5f5f5",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: "#fff", // Color de fondo para el header
      elevation: 2, // Sombra para el header
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
      height: 40,
      width: 40,
      borderRadius: 10,
      backgroundColor: "#eee",
    },
    headerTitle: {
      flex: 1,
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: "#000",
      marginRight: 40, // Centrado visual del título
    },
    productsSection: {
      paddingHorizontal: 15,
      paddingVertical: 20,
      flex: 1, // Asegura que la sección de productos ocupe el espacio restante
    },
    titleProduct: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#000",
      marginBottom: 5,
    },
    itemRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    itemLabel: {
      fontSize: 18,
      fontWeight: "500",
      color: "gray",
    },
    flatListContent: {
      paddingBottom: 20, // Espacio adicional al final de la lista
    },
  });
  