import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
import Avatar from "../../ui/Avatar";
import Padding from "../../ui/Padding";
import { Entypo } from "@expo/vector-icons";
import { useProfile } from "../../../hooks/useProfile";
import Loader from "../../ui/Loader";

const Header: FC = () => {
  const { isLoading, name } = useProfile();
  const { navigate } = useNavigation();

  return isLoading ? (
    <Loader />
  ) : (
    <Padding style={tw("flex-row items-center")}>
      <Avatar name={name} />
      <TouchableOpacity
        onPress={() => navigate("Profile")}
        style={tw("flex-row items-end")}
      >
        <Text style={tw("text-2xl text-gray-800 font-bold")}>{name}</Text>
        <Entypo
          name={"chevron-small-right"}
          size={28}
          style={tw("text-gray-800")}
        />
      </TouchableOpacity>
    </Padding>
  );
};

export default Header;
