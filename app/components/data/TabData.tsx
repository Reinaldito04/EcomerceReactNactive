import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';

// Ajusta la interfaz para aceptar componentes JSX
export interface TabData {
  id: number;
  title: string;
  icon: React.ReactNode; // Cambiado a React.ReactNode para aceptar componentes
}

const TabData: TabData[] = [
  {
    id: 1,
    title: "Hogar",
    icon: <FontAwesome name="home" size={24} color="black" />, // Pasas el componente directamente
  },
  {
    id: 2,
    title: "Banio",
    icon: <MaterialIcons name="bathroom" size={24} color="black" />, // Cambiado a un ícono
  },
  {
    id: 3,
    title: "Exterior",
    icon: <Entypo name="feather" size={24} color="black" />, // Cambiado a un ícono
  },
  {
    id: 4,
    title: "Accesorios",
    icon: <MaterialCommunityIcons name="desk-lamp" size={24} color="black" /> // Cambiado a un ícono
  },
];

export default TabData;
