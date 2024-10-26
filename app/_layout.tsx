import { Stack } from "expo-router";
import { Animated } from "react-native";

// Animación personalizada para el desvanecimiento
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress, // Desvanecer basado en la progresión
  },
});

export default function RootLayout() {
  return (
    <Stack initialRouteName="login">
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
