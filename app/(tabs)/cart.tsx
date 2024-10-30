import React, { useRef, useMemo, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";
import { useCartStore } from "../components/store/useCartStore";
import CartProducts from "../components/CartProducts";

import { GestureHandlerRootView } from "react-native-gesture-handler";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  // ref


 

  const totalAmount = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  const Iva = (Number(totalAmount) / 12).toFixed(2);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>

        {cartItems.length > 0 ? (
          <>
          
            <View style={styles.productsSection}>
              <Text style={styles.titleProduct}>Products</Text>
              <View style={styles.itemRow}>
                <Text style={styles.itemLabel}>Items</Text>
                <TouchableOpacity onPress={clearCart}>
                  <EvilIcons name="trash" size={30} color="black" />
                </TouchableOpacity>
              </View>

              <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartProducts item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContent}
                showsVerticalScrollIndicator={false}
              />
            </View>

            <View style={styles.totalContainer}>
              <View style={styles.containerPrice}>
                <Text style={styles.iva}>Subtotal</Text>
                <Text style={styles.iva}>{totalAmount}$</Text>
              </View>
              <View style={styles.containerPrice}>
                <Text style={styles.iva}>IVA</Text>
                <Text style={styles.iva}>{Iva}$</Text>
              </View>
              <View style={styles.containerPrice}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>
                  {(Number(totalAmount) + Number(Iva)).toFixed(2)}$
                </Text>
              </View>
                <TouchableOpacity
                  style={styles.buttonCheck}
                  
                  onPress={() => router.push({
                    pathname: "/payment",
                    params: {
                      totalAmount: totalAmount,
                      Iva: Iva,
                      total: (Number(totalAmount) + Number(Iva)).toFixed(2),
                    },
                  }
                    

                  )}
                 
                >
                  <Text style={styles.buttonText}>Proceed to Checkout</Text>
                </TouchableOpacity>
               
            </View>
          </>
        ) : (
          <View style={styles.emptyCartContainer}>
            <Image
              source={require("../../assets/images/emptycart.png")}
              style={styles.emptyCartImage}
            />
            <Text style={styles.emptyCartText}>Your cart is empty.</Text>
          </View>
        )}
      </SafeAreaView>

    </GestureHandlerRootView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f5f5f5" },

 
  containerPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    marginVertical: 5,
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
  productsSection: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flex: 1,
  },
  titleProduct: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLabel: { fontSize: 18, fontWeight: "500", color: "gray" },
  flatListContent: { paddingBottom: 20 },
  totalContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  total: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  iva: {
    fontSize: 18,
    fontWeight: "600",
    color: "#888",
    marginBottom: 20,
  },
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
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
