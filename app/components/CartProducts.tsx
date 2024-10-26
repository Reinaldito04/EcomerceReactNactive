import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ProductosDataCard } from "./data/ProductsData";

interface CartProductsProps {
  item: ProductosDataCard;
  onRemove: (id: number) => void; // Prop para manejar la eliminación del producto
}

const CartProducts: React.FC<CartProductsProps> = ({ item, onRemove }) => {
  // Estado para la cantidad del producto
  const [quantity, setQuantity] = useState(1);

  // Función para incrementar la cantidad
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Función para decrementar la cantidad
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      // Si la cantidad es 1, eliminar el producto al presionar el botón de menos
      onRemove(item.id);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>

      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position:'absolute',
        bottom:0,
        right:0,
        paddingHorizontal:10,
        paddingVertical:15,
        
        gap:10
      }}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={handleDecrement}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        
        <Text>{quantity}</Text>

        <TouchableOpacity style={{
          backgroundColor: "green",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius:5

        }} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartProducts;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1, // Para Android
    marginVertical: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "800",
    color: "#888",
  },
  removeButton: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
