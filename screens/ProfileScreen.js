import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../contexts/AuthContext"; // Đúng đường dẫn AuthContext

const ProfileScreen = () => {
  const { setIsLoggedIn } = useContext(AuthContext); // Sử dụng AuthContext

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header} />
      <Image
        source={{ uri: "https://example.com/avatar.jpg" }}
        style={styles.avatar}
      />

      {/* User Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.jobTitle}>Mobile Developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development,
          now I am learning React Native.
        </Text>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#1e90ff",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    position: "absolute",
    top: 50,
  },
  infoContainer: {
    marginTop: 60,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 16,
    color: "#1e90ff",
    marginVertical: 5,
  },
  description: {
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  signOutButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  signOutText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
