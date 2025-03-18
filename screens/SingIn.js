import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomTextInput from "../component/CustomTextInput";
import IconButtonGoogle from "../component/IconButtonGoogle";
import IconButtonFacebook from "../component/IconButtonFaceBook";
import { AuthContext } from "../contexts/AuthContext"; // Import AuthContext

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useContext(AuthContext); // Lấy hàm cập nhật trạng thái

  const handleSignIn = () => {
    // Khi đăng nhập thành công, cập nhật trạng thái isLoggedIn
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* Email Input */}
      <CustomTextInput
        label="Email ID"
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <CustomTextInput
        label="Password"
        placeholder="Enter your password here!"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialButtons}>
        <IconButtonGoogle onPress={() => console.log("Google Sign In")} />
        <IconButtonFacebook onPress={() => console.log("Facebook Sign In")} />
      </View>

      {/* Sign Up Link */}
      <Text style={styles.signUpText}>
        Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#FFA500",
    marginBottom: 15,
  },
  signInButton: {
    backgroundColor: "#FFA500",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  signInText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  orText: {
    textAlign: "center",
    marginVertical: 15,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  signUpText: {
    textAlign: "center",
  },
  signUpLink: {
    color: "#FFA500",
    fontWeight: "bold",
  },
});

export default SignInScreen;
