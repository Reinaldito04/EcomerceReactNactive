import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Icon from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCartStore } from "../components/store/useCartStore";

const ProductDetails = () => {
  const { id, title, image, price, stars, category } = useLocalSearchParams();
  const imageUri = Array.isArray(image) ? image[0] : image;

  // Estado para controlar la expansión de la descripción
  const [isExpanded, setIsExpanded] = useState(false);

  // Inicializa las animaciones
  const slideAnim = useRef(new Animated.Value(500)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const addToCart = useCartStore((state) => state.addToCart);
  const [cartIcon, setCartIcon] = useState("cart-plus"); // Estado para el ícono del carrito
  const [iconAnimation, setIconAnimation] = useState(new Animated.Value(1)); // Animación del ícono

  // Producto a añadir al carrito con la estructura requerida
  const product = {
    id: parseInt(id as string),
    title: title as string,
    image: imageUri as string,
    price: parseFloat(price as string),
    quantity: 1,
    stars :  Number(stars),
    category: category as string,
  };

  useEffect(() => {
    // Ejecutar animaciones de entrada
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    // Agregar al carrito
    addToCart(product);
    // Cambiar el ícono y animarlo
    setCartIcon("check-circle");
    Animated.sequence([
      Animated.timing(iconAnimation, {
        toValue: 1.5, // Aumentar el tamaño del ícono
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(iconAnimation, {
        toValue: 1, // Volver al tamaño original
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Cambiar de vuelta el ícono después de la animación
      setCartIcon("cart-plus");
    });
  };
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const CHAR_LIMIT = 100;
  const showReadMore = description.length > CHAR_LIMIT;

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideAnim }], opacity: opacityAnim },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.textTitle}>Details</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="heart-o" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={20} color="gold" />
        <Text style={styles.rating}> {stars}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{`${price}$`}</Text>
      </View>

      <View style={styles.tabRow}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={styles.activeTabText}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Reviews</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.category}>{`Category: ${category}`}</Text>
      <Text style={styles.description}>
        {isExpanded ? description : `${description.slice(0, CHAR_LIMIT)}...`}
        {showReadMore && (
          <Text
            style={styles.readMoreText}
            onPress={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? " Read less" : " Read more"}
          </Text>
        )}
      </Text>

      <View style={styles.footer}>
      {/* ... (el resto de tu código) */}
      <TouchableOpacity style={styles.buttonBuy} onPress={handlePress}>
        <Animated.View style={{ transform: [{ scale: iconAnimation }] }}>
          <FontAwesome name={cartIcon} size={24} color="black" />
        </Animated.View>
      </TouchableOpacity>
      {/* ... (el resto de tu código) */}
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: "40%",
            marginBottom: 2,
            height: 5,
            backgroundColor: "#e0e0e2",
            opacity: 0.8,
            width: "30%",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        ></View>
      </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  iconContainer: {
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "contain",
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
    alignContent: "flex-end",
    justifyContent: "flex-end",
    gap: 4,
  },
  rating: {
    fontSize: 16,
    color: "gray",
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#007BFF",
  },
  tabText: {
    fontWeight: "bold",
    color: "#0e1726",
    fontSize: 16,
  },
  activeTabText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  category: {
    fontSize: 16,
    color: "blue",
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  readMoreText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 10,
  },
  buttonBuy: {
    flex: 0.2,
    backgroundColor: "#dfdfe1",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonPrimary: {
    flex: 0.8,
    backgroundColor: "#0e1726",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetails;
