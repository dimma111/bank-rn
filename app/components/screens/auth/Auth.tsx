import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styleCenter } from "../../layouts/Layout";
import tw from "tailwind-rn";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";

interface IData {
  email: string;
  password: string;
}

export default function Auth() {
  const { isLoading, register, login, user } = useAuth();
  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState(false);

  const authHandler = async () => {
    const { email, password } = data;

    if (isReg) await register(email, password);
    else await login(email, password);

    console.log(user);
    setData({} as IData);
  };

  console.log(user);

  return (
    <View style={styleCenter}>
      <View style={tw("mx-5 justify-center items-center h-full")}>
        <View style={tw("w-9/12")}>
          <Text style={tw("text-center text-gray-800 text-2xl font-bold mb-2")}>
            {isReg ? "Sign Up" : "Sign In"}
          </Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                val={data.email}
                placeholder="Enter email"
                onChange={(val) => setData({ ...data, email: val })}
              />
              <Field
                val={data.password}
                placeholder="Enter password"
                onChange={(val) => setData({ ...data, password: val })}
                isSecure={true}
              />

              <Button onPress={authHandler} title={`Let's go`} />

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={tw("text-gray-800 opacity-30 text-right text-sm")}>
                  {isReg ? "Login" : "Register"}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
}
