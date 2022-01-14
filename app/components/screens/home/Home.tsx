import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import Layout from "../../layouts/Layout";
import Header from "./Header";
import Stories from "./stories/Stories";

export default function Home() {
  const { logout, user } = useAuth();

  // logout();
  return (
    <Layout>
      <Header />
      <Stories />
      <Text>HOME SCREEN</Text>
    </Layout>
  );
}
