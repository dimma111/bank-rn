import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import tw from "tailwind-rn";

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: FC<IField> = ({ onChange, placeholder, val, isSecure }) => {
  return (
    <TextInput
      // showSoftInputOnFocus={false}
      placeholder={placeholder}
      onChangeText={onChange}
      value={val || ""}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      style={tw("rounded-xl bg-gray-100 mt-3 p-3 w-full")}
    />
  );
};

export default Field;
