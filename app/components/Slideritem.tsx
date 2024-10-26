// Slideritem.tsx
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import productosDataSlider from './data/SliderData'; // Asegúrate de importar la interfaz correctamente

interface SliderItemProps {
  item: productosDataSlider;
}

// Obtener el ancho de la pantalla
const { width: screenWidth } = Dimensions.get('window');

const Slideritem: React.FC<SliderItemProps> = ({ item }) => {
  const scale = useSharedValue(1);

  // Animación de escalado
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  // Funciones para manejar el escalado al presionar
  const onPressIn = () => {
    scale.value = withSpring(0.95); // Achica un poco al hacer click
  };

  const onPressOut = () => {
    scale.value = withSpring(1); // Vuelve al tamaño original
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
    </Animated.View>
  );
};

export default Slideritem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e1726',
    width: screenWidth - 80, // Ocupará todo el ancho menos márgenes
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderRadius: 25,
    flexDirection: 'row',
    flex:1,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Sombra en Android
  },
  textContainer: {
    flex: 0.7,
    marginRight: 10,
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#1da1f2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
    shadowColor: '#1da1f2',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 130,
    width: 130,
    flex:0.55
  },
});
