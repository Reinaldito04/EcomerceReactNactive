import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useCartStore } from "./store/useCartStore";
function CartProducts({ item }) {
  const { cartItems, addToCart, removeFromCart } = useCartStore();

  // Función para incrementar la cantidad del producto
  const handleIncrement = () => {
    addToCart({ ...item, quantity: 1 }); // Agrega 1 a la cantidad existente
  };

  // Función para decrementar la cantidad del producto
  const handleDecrement = () => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 }); // Resta 1 a la cantidad existente
    } else {
      removeFromCart(item.id); // Elimina el producto si la cantidad es 1
    }
  };

  const totalPrice = (item.price * item.quantity).toFixed(2); // Calcula el precio total

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)} each</Text>
        <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.removeButton} onPress={handleDecrement}>
          <Text style={styles.buttonTextRemove}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{item.quantity}</Text> 

        <TouchableOpacity style={styles.addButton} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    elevation: 1,
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
  totalPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  removeButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#1c1c1c",
  },
  addButton: {
    backgroundColor: "#1c1c1c",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonTextRemove:{
    color: "#1c1c1c",
    fontWeight: "bold",

  }
});
