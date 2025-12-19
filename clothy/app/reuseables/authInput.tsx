// components/FormInput.tsx
import React from "react";
import { TextInput } from "react-native";
import { AuthInputProps } from "../types/types";

export default function AuthInput({
  value,
  onChangeText,
  placeholder,
  error = false,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  className = "",
}: AuthInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      className={`border-b py-3 mb-6 text-base ${
        error ? "border-red-500" : "border-gray-300"
      } ${className}`}
    />
  );
}
