import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ProductosDataCard } from "./data/ProductsData";
import { router } from "expo-router";
import { SharedElement } from "react-navigation-shared-element"; // Asegúrate de importar SharedElement

const CardProduct = ({ product }: { product: ProductosDataCard }) => {
  const [liked, setLiked] = useState(false);
  const [scaleAnim] = useState(new Animated.Value(1)); // Inicializamos la animación

  const toggleLike = () => {
    setLiked(!liked);
  };

  const goToDetails = () => {
    // Iniciar la animación al presionar
    Animated.timing(scaleAnim, {
      toValue: 1.1, // Aumentar el tamaño
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      // Regresar al tamaño original
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        // Navegar a la pantalla de detalles
        router.push({
          pathname: "/productDetails",
          params: {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            stars: product.stars,
            category: product.category,
          },
        });
      });
    });
  };

  return (
    <TouchableWithoutFeedback onPress={goToDetails}>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={toggleLike}
          style={styles.heartIconContainer}
        >
          <FontAwesome
            name={liked ? "heart" : "heart-o"}
            size={20}
            color={liked ? "red" : "black"}
          />
        </TouchableOpacity>
        <SharedElement id={`product.${product.id}.image`} >
          <Animated.Image 
            source={{ uri: product.image }}
            style={[styles.image, { transform: [{ scale: scaleAnim }] }]} // Aplicar la animación de escala
          />
        </SharedElement>
        <View style={styles.containerText}>
          <Text style={styles.productName} numberOfLines={1}>
            {product.title}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} style={styles.starIcon} />
              <Text style={styles.rating}> {product.stars} </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  cardContainer: {
    borderRadius: 15,
    overflow: "hidden",
    width: 130,
    margin: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  heartIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  containerText: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  starIcon: {
    color: "gold",
    fontSize: 14,
  },
});
