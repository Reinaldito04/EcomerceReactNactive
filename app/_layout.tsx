import { Stack } from "expo-router";
import { Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
// Animación personalizada para el desvanecimiento


export default function RootLayout() {
  return (

    <Stack initialRouteName="login" 
    screenOptions={
      {
        animation: "simple_push",
        
       

      }
    }>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Inicio" }}
      />
      {/* Pantalla de inicio de sesión */}
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
          title: "Iniciar Sesión",
        }}
      />
      <Stack.Screen
        name="productDetails/index"
        options={{
          headerShown: false,
          title: "Detalles",
          animation: "fade", // Tipo de animación
          animationTypeForReplace: "pop", // Tipo de animación al reemplazar
          // A continuación no se necesita cardStyleInterpolator
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "Home" }}
      />
    </Stack>
  );
}
