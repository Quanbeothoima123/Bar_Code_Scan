import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./layout/HomeScreen";
import ScannerScreen from "./layout/ScannerScreen";

// Khởi tạo Stack và Bottom Tabs
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Placeholder cho các màn hình chưa có
const PlaceholderScreen = () => (
  <View style={{ flex: 1, backgroundColor: "white" }} />
);

// Component Bottom Tabs
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              return <Ionicons name="home" size={size} color={color} />;
            case "Notifications":
              return (
                <Ionicons
                  name="notifications-outline"
                  size={size}
                  color={color}
                />
              );
            case "Scanner":
              return (
                <MaterialCommunityIcons
                  name="credit-card-scan-outline"
                  size={size}
                  color={color}
                />
              );
            case "History":
              return <Ionicons name="time-outline" size={size} color={color} />;
            case "Cart":
              return <Ionicons name="cart-outline" size={size} color={color} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: "#6b79ff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          height: 80,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={PlaceholderScreen} />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen name="History" component={PlaceholderScreen} />
      <Tab.Screen name="Cart" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
};

// Component chính của App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
