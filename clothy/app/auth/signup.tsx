// screens/SignupScreen.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthInput from "../reuseables/authInput";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSignUp = () => {
    const newErrors = {
      name: name.trim().length < 2,
      email: !validateEmail(email),
      password: password.length < 6 || password.length > 20,
      confirmPassword: password !== confirmPassword,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((e) => e)) {
      Alert.alert("Error", "Please fix the highlighted fields.");
      return;
    }

    Alert.alert("Success", "Account created successfully!");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mt-20 px-8">
        <Text className="text-3xl font-semibold text-black">Create</Text>
        <Text className="text-3xl font-semibold text-black mb-8">
          your account
        </Text>
      </View>

      <View className="w-full px-8">
        <AuthInput
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setErrors((prev) => ({ ...prev, name: text.trim().length < 2 }));
          }}
          error={errors.name}
        />

        <AuthInput
          placeholder="Email address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrors((prev) => ({ ...prev, email: !validateEmail(text) }));
          }}
          keyboardType="email-address"
          error={errors.email}
        />

        <AuthInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrors((prev) => ({
              ...prev,
              password: text.length < 6 || text.length > 20,
            }));
          }}
          secureTextEntry
          error={errors.password}
        />

        <AuthInput
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setErrors((prev) => ({
              ...prev,
              confirmPassword: password !== text,
            }));
          }}
          secureTextEntry
          error={errors.confirmPassword}
        />

        <TouchableOpacity
          onPress={handleSignUp}
          activeOpacity={0.8}
          className="bg-[#2E221E] rounded-full py-3 mt-2 items-center"
        >
          <Text className="text-white font-semibold text-base">SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
