import React, { FC } from "react";
import { View, Text } from "react-native";
import tw from "tailwind-rn";

const Padding: FC<{ style?: any }> = ({ children, style = {} }) => {
  return <View style={{ ...tw("px-4"), ...style }}>{children}</View>;
};

export default Padding;
