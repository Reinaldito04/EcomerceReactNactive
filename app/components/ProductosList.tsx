import React from "react";
import { View } from "react-native";
import CardProduct from "./CardProduct";
import { ProductosDataCard } from "./data/ProductsData"; // Asegúrate de que este nombre sea correcto

interface ProductsListProps {
  selectedCategory: string | null; // Cambia a string para coincidir con el tipo de category
}

const ProductsList: React.FC<ProductsListProps> = ({ selectedCategory }) => {
  // Filtra los productos según la categoría seleccionada
  const filteredProducts = selectedCategory
    ? ProductosDataCard.filter(product => product.category === selectedCategory) // Filtra por el campo 'category'
    : ProductosDataCard;

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        marginBottom: 20,
        marginTop: 10,
      }}
    >
      {filteredProducts.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </View>
  );
};

export default ProductsList;
