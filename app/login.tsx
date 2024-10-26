import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Login to your Account</Text>

      <View style={styles.formContainer}>
        <TextInput placeholder="Usuario" style={styles.input} />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loginButton} activeOpacity={0.7} 
        onPress={() => router.replace('/(tabs)') }>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <Text style={styles.separatorText}>- O iniciar sesión con -</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="google" size={30} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="facebook" size={30} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="twitter" size={30} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        <Text style={styles.textLink}>
          ¿No tienes cuenta?{" "}
          <Text style={styles.linkText} onPress={() => console.log("link")}>
            Crear cuenta
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
const isDarkMode = false; // Cambia esto según tu lógica de modo
const currentColors = isDarkMode ? Colors.dark : Colors.light;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8", // Color de fondo más suave
    padding: 20,
  },
  logo: {
    width: 150, // Ajusta el tamaño de la imagen
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 25, // Aumentar el tamaño del título
    fontWeight: "light",
    color: currentColors.PrimaryColor, // Cambiar el color del título
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: 400, // Ancho máximo para el contenedor
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10, // Esquinas redondeadas
    padding: 20, // Espacio interno
    shadowColor: "#000", // Sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 5, // Sombra para Android
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc", // Color de borde más suave
    width: "100%",
    height: 45, // Mayor altura para los inputs
    marginBottom: 20,
    padding: 10,
    borderRadius: 5, // Esquinas redondeadas
  },
  loginButton: {
    backgroundColor: currentColors.PrimaryColor,
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  separatorText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    marginTop: 30,
    color: "#666", // Color más suave
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  textLink: {
    marginTop: 20,
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  linkText: {
    color: currentColors.PrimaryColor,
    fontWeight: "bold",
    fontSize: 16,
  },
});
