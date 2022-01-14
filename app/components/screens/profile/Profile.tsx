import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import { useProfile } from "../../../hooks/useProfile";
import { useUpdateProfile } from "../../../hooks/useUpdateProfile";
import Layout from "../../layouts/Layout";
import Button from "../../ui/Button";
import Field from "../../ui/Field";
import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader";
import Padding from "../../ui/Padding";
import tw from "tailwind-rn";

export default function Profile() {
  const { logout } = useAuth();
  const { isLoading: isProfileLoading, name, setName, profile } = useProfile();

  const { isLoading, isSuccess, updateProfile } = useUpdateProfile(
    name,
    profile.docId
  );

  return (
    <Layout>
      <Heading text="Profile" isCenter={true} />
      <Padding>
        {isSuccess && (
          <View style={tw("bg-green-500 p-3 py-2 rounded-lg")}>
            <Text style={tw("text-white text-center")}>
              Profile updated successfully
            </Text>
          </View>
        )}
        {isProfileLoading || isLoading ? (
          <Loader />
        ) : (
          <>
            <Field onChange={setName} val={name} placeholder="Enter name " />
            <Button onPress={updateProfile} title="Update profile" />
            <Button
              onPress={logout}
              title="Logout"
              colors={["bg-gray-200", "#D6D8DB"]}
            />
          </>
        )}
      </Padding>
    </Layout>
  );
}
