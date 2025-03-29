import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const PaymentSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#666" />
      </TouchableOpacity>
      <View style={{ paddingTop: 150 }}>
        <Image
          source={require("../assets/pngSucces.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.subtitle}>
        we will send order details and invoice in your contact no. and
        registered email
      </Text>

      <TouchableOpacity>
        <Text style={styles.link}>
          Check Details{" "}
          <Ionicons name="arrow-forward" size={16} color="#5A6CF3" />
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginHorizontal: 20,
  },
  link: {
    fontSize: 16,
    color: "#6b79ff",
    fontWeight: "bold",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#5A6CF3",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PaymentSuccessScreen;
