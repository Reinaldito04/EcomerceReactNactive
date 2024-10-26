import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { TabData } from "./data/TabData";
  
  interface TabItemProps {
    item: TabData;
    isActive: boolean;
    onPress: () => void;
  }
  
  const TabItem: React.FC<TabItemProps> = ({ item, isActive, onPress }) => {
    const [animatedValue] = useState(new Animated.Value(0));
  
    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: isActive ? 1 : 0, // Si está activo, anima a 1, si no a 0
        duration: 300,
        useNativeDriver: false, // No usar nativeDriver para backgroundColor
      }).start();
    }, [isActive]);
  
    // Interpolación para el color de fondo
    const backgroundColor = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["#f0f0f0", "#007BFF"], // De gris claro a azul
    });
  
    // Interpolación para la opacidad del texto
    const textOpacity = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1], // De opacidad 0 a 1
    });
  
    // Interpolación para la posición del texto
    const textTranslateY = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 0], // Mueve el texto hacia abajo cuando es inactivo
    });
  
    return (
      <TouchableOpacity onPress={onPress}>
        <Animated.View style={[styles.container, { backgroundColor }]}>
          <View style={styles.iconContainer}>{item.icon}</View>
          <Animated.View
            style={[
              styles.textContainer,{
                display:isActive?'flex':'none'
             
              },
              { opacity: textOpacity, transform: [{ translateY: textTranslateY }] },
            ]}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  
  export default TabItem;
  
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius: 15,
      flexDirection: "row",
      marginRight: 10, // Espacio entre tabs
    },
    iconContainer: {
      backgroundColor: "#f0f0f0", // Fondo del icono
      padding: 10,
      borderRadius: 15,
    },
    textContainer: {
      marginLeft: 10, // Espacio entre el icono y el texto
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#fff", // Texto blanco para mejor contraste en fondo azul
    },
  });
  