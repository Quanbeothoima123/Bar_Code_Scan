import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#25D482" />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 120,
        }}
      >
        <View>
          <Text style={styles.title}>
            Checkout <Ionicons name="card" size={18} />
          </Text>
        </View>
        <View>
          <Text style={styles.amount}>₹ 1,527</Text>
          <Text style={styles.tax}>Including GST (18%)</Text>
        </View>
      </View>

      <View style={styles.paymentOptions}>
        <LinearGradient
          colors={["#25D482", "#25D482"]}
          style={styles.selectedOption}
        >
          <Text style={styles.optionText}>Credit card</Text>
        </LinearGradient>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionTextDark}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Card number</Text>
      <View style={styles.cardInput}>
        <TextInput placeholder="5261 4141 0151 8472" keyboardType="numeric" />
        <Image source={require("../assets/cardmaster.png")}></Image>
        <Image source={require("../assets/qr.png")}></Image>
      </View>

      <Text style={styles.label}>Cardholder name</Text>
      <TextInput style={styles.input} placeholder="Christie Doe" />

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Expiry date</Text>
          <TextInput
            style={styles.inputSmall}
            placeholder="06 / 2024"
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.label}>CVV / CVC</Text>
          <TextInput
            style={styles.inputSmall}
            placeholder="915"
            keyboardType="numeric"
            secureTextEntry
          />
        </View>
      </View>

      <Text style={styles.note}>
        We will send you an order details to your email after the successful
        payment
      </Text>

      {/* Pay Button */}
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate("PaymentSuccess")}
      >
        <Ionicons name="lock-closed" size={20} color="white" />
        <Text style={styles.payText}> Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27A567",
    textAlign: "right",
  },
  tax: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
  },
  paymentOptions: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
  selectedOption: {
    flex: 1,
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  option: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  optionTextDark: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#F8F8FB",
  },
  input: {
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F8F8FB",
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputSmall: {
    width: 150,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F8F9FA",
  },
  note: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
    marginVertical: 10,
  },
  payButton: {
    flexDirection: "row",
    backgroundColor: "#25D482",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  payText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
  },
});

export default PaymentScreen;
