import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ScannerScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.backButtonBackground} />
        <Ionicons name="arrow-back" size={30} color="#5A6CF3" />
      </TouchableOpacity>

      {/* Scanning Area */}
      <View style={styles.scanArea}>
        {/* Hình ảnh sản phẩm */}
        <Image
          source={{
            uri: "https://clawsprinters.com/wp-content/uploads/2022/08/custom-bottle-labels.png",
          }}
          style={styles.productImage}
        />

        {/* Hiệu ứng quét */}
        <View style={styles.scanOverlay} />

        {/* 4 góc viền quét */}
        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image
          source={{
            uri: "https://clawsprinters.com/wp-content/uploads/2022/08/custom-bottle-labels.png",
          }}
          style={styles.productThumbnail}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14, color: "gray" }}>Lauren’s</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5efe4",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 57,
    left: 25,
    width: 45,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },
  backButtonBackground: {
    position: "absolute",
    width: 45,
    height: 44,
    borderRadius: 9,
    backgroundColor: "#FFFFFFB2",
  },
  scanArea: {
    width: 300,
    height: 450,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  productImage: {
    width: 200,
    height: 400,
    borderRadius: 10,
  },
  scanOverlay: {
    position: "absolute",
    top: 200,
    left: 45 - 45 + 7,
    width: 286,
    height: 259,
    backgroundColor: "#FFFFFF33",
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 36,
  },
  corner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderColor: "white",
    borderWidth: 3,
  },
  topLeft: {
    top: 10,
    left: 10,
    borderTopLeftRadius: 10,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 10,
    right: 10,
    borderTopRightRadius: 10,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 10,
    left: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 10,
    right: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    position: "absolute",
    bottom: 50,
    width: 320,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  productThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  addButton: {
    backgroundColor: "#6b79ff",
    padding: 10,
    borderRadius: 10,
  },
});

export default ScannerScreen;
