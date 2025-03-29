// CartScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { cartData } from "../data/Products";

const CartScreen = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState(cartData);

  const updateQuantity = (id, type) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: 10, backgroundColor: "#F8F8FB", borderRadius: 10 }}
        >
          <Ionicons name="arrow-back" size={30} color="#D07A50" />
        </TouchableOpacity>
      </View>
      <View style={{ paddingBottom: 40 }}>
        <Text style={styles.title}>Your Cart 👍</Text>
      </View>
      <View>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>
              </View>
              <View style={styles.quantityControls}>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, "decrease")}
                >
                  <Ionicons
                    name="remove-circle-outline"
                    size={24}
                    color="#D07A50"
                  />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, "increase")}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={24}
                    color="#D07A50"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 25,
        }}
      >
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>₹ {totalPrice}</Text>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFFFFF" },
  header: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", marginLeft: 10 },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#F8F8FB",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  image: { width: 60, height: 60, borderRadius: 10 },
  itemDetails: { flex: 1, marginLeft: 15 },
  brand: { fontSize: 12, color: "gray" },
  productName: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 16, color: "#D07A50", fontWeight: "bold" },
  quantityControls: { flexDirection: "row", alignItems: "center" },
  quantity: { fontSize: 16, marginHorizontal: 10 },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: { color: "#D07A50", fontWeight: "900" },
  checkoutButton: {
    backgroundColor: "#D07A50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  checkoutText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default CartScreen;
