import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const insights = [
  {
    id: "1",
    title: "Scan new",
    subtitle: "Scanned 483",
    icon: "credit-card-scan-outline",
    color: "#A3A1FB",
  },
  {
    id: "2",
    title: "Counterfeits",
    subtitle: "Counterfeited 32",
    icon: "alert-outline",
    color: "#FBC1A3",
  },
  {
    id: "3",
    title: "Success",
    subtitle: "Checkouts 8",
    icon: "check-circle-outline",
    color: "#A3FBC1",
  },
  {
    id: "4",
    title: "Directory",
    subtitle: "History 26",
    icon: "calendar-month-outline",
    color: "#A3D4FB",
  },
];

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        <View>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Hello 👋</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>Can Anh Quan</Text>
        </View>
        <Image
          source={{ uri: "https://i.imgflip.com/7a894x.png" }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      </View>

      {/* Insights */}
      <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 20 }}>
        Your Insights
      </Text>
      <FlatList
        data={insights}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#F8F8F8",
              borderRadius: 15,
              padding: 20,
              flex: 1,
              margin: 10,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={40}
              color={item.color}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Explore More */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Explore More</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
