import React from "react";
import { Alert } from "react-native";

interface IButtons {
  text: string;
  resolveValue: string;
  textSecond: string;
  resolveValueSecond: string;
}

interface IAsyncAlert {
  title: string;
  msg?: string;
  buttons: IButtons;
}

export const asyncAlert = ({ title, msg, buttons }) =>
  new Promise((resolve) => {
    Alert.alert(title, msg, buttons);
  });
