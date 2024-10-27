import React from "react";
import { ScrollView ,View} from "react-native";
import CardProduct from "./CardProduct";
import { ProductosDataCard } from "./data/ProductsData"; // Asegúrate de que este nombre sea correcto
const ProductsList = () => {
  return (
    <View style={{
        flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            marginBottom: 20,
            marginTop: 10,
    }}>
      {ProductosDataCard.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </View>
  );
};

export default ProductsList;
