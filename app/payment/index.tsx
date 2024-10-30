import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import Tarjeta from "../components/Tarjeta";

const index = () => {
  type PaymentIconKey = "mastercard" | "paypal" | "apple" | "google";

  // Mapea los iconos a sus rutas de imágenes con el tipo adecuado
  const paymentIcons: Record<PaymentIconKey, ImageSourcePropType> = {
    mastercard: require("@/assets/images/mastercard.png"),
    paypal: require("@/assets/images/paypal.png"),
    apple: require("@/assets/images/apple.png"),
    google: require("@/assets/images/google.png"),
  };
  const {total}= useLocalSearchParams()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Text style={styles.subtitle}>Shipping to</Text>
        <View style={styles.card}>
          {/* Icono de ubicación sobre la imagen de fondo */}
          <ImageBackground
            source={require("@/assets/images/map.jpg")}
            style={styles.imageCard}
            imageStyle={{ borderRadius: 5 }}
          >
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="location-outline"
                size={30}
                color="#666"
                style={styles.iconOverlay}
              />
            </View>
          </ImageBackground>
          {/* Texto de la dirección */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.address}>
              1479 Coblen Lane, Petaluma, CA 94954, Australia
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}> Add Payment Method</Text>

          <View style={styles.iconContainerPayment}>
            {Object.keys(paymentIcons).map((icon) => (
              <View key={icon} style={styles.iconWrapper}>
                <Image
                  style={styles.imagePayment}
                  source={paymentIcons[icon as PaymentIconKey]}
                />
              </View>
            ))}
          </View>
          <View
            style={{
              marginTop: 30,
            }}
          >
            <Tarjeta />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <Text style={styles.subtitle}>Total Payment</Text>
            <Text style={styles.subtitle}>${total} </Text>
          </View>
          <View>
            
            <TouchableOpacity
              style={styles.buttonCheck}
              onPress={() => router.push("/payment")}
            >
              <Text style={styles.buttonText}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
    buttonCheck: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1c1c1a",
        paddingVertical: 15,
        borderRadius: 25,
        marginTop: 10,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1, 
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 1,
        marginVertical: 5,
        marginHorizontal: 10,
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },
  iconContainerPayment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginVertical: 15,
    width: "100%",
    flexWrap: "wrap",
    flex: 1,
    gap: 10,
  },
  iconWrapper: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 50,
    height: 50,
    padding: 15,
    flex: 2.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Sombra en Android
    alignItems: "center", // Centra horizontalmente
    justifyContent: "center", // Centra verticalmente
  },
  imagePayment: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },

  imageCard: {
    width: 80,
    height: 80,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    elevation: 2, // Para sombra en Android
    backgroundColor: "#FFFFFF",
  },
  iconOverlay: {
    position: "absolute",
    alignSelf: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  address: {
    fontSize: 14,
    color: "#8A8A8A",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
    color: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 2,
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
    marginRight: 40,
  },
});
