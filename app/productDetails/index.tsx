import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

const ProductDetails = () => {
  const { id, title, image, price, stars, category } = useLocalSearchParams();
  const imageUri = Array.isArray(image) ? image[0] : image;

  // Inicializa las animaciones
  const slideAnim = useRef(new Animated.Value(500)).current; // Comienza fuera de la pantalla
  const opacityAnim = useRef(new Animated.Value(0)).current; // Comienza invisible

  useEffect(() => {
    // Iniciar las animaciones de deslizamiento y opacidad
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0, // Llevar a la posición original
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1, // Aumentar opacidad
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }], opacity: opacityAnim }]}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{`$${price}`}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>Rating: {stars}</Text>
      </View>
      <Text style={styles.category}>{`Category: ${category}`}</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {/* Acciones como agregar al carrito */}}>
        <Text style={styles.buttonText}>Agregar al Carrito</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: "#000",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  price: {
    fontSize: 20,
    color: "green",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    color: "gray",
  },
  category: {
    fontSize: 16,
    color: "blue",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetails;
