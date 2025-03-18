import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "../contexts/AuthContext"; // SỬA Ở ĐÂY

import SignInScreen from "../screens/SingIn";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Tạo AuthStack (Chứa màn hình đăng nhập)
const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
  <AuthStack.Navigator
    initialRouteName="SignIn"
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
  </AuthStack.Navigator>
);

// Tạo MainTab (Chứa Home và Profile)
const MainTab = createBottomTabNavigator();
const MainTabNavigator = () => (
  <MainTab.Navigator screenOptions={{ headerShown: false }}>
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);

// Tạo MainStack (Chứa MainTab và các màn hình khác)
const MainStack = createStackNavigator();
const MainStackNavigator = () => (
  <MainStack.Navigator
    initialRouteName="MainTab"
    screenOptions={{ headerShown: false }}
  >
    <MainStack.Screen name="MainTab" component={MainTabNavigator} />
  </MainStack.Navigator>
);

// RootRouter để điều hướng giữa AuthStack và MainStack
export default function RootRouter() {
  const { isLoggedIn } = useContext(AuthContext); // SỬA Ở ĐÂY

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
