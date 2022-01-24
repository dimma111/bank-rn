import React, { FC } from "react";
import { View, Text } from "react-native";
import { IAccount } from "../types";

const AccountItem: FC<{ account: IAccount }> = ({ account }) => {
  return (
    <View>
      <Text>{account.balance}</Text>
    </View>
  );
};

export default AccountItem;
