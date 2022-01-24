import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import Layout from "../../layouts/Layout";
import Accounts from "./accounts/Accounts";
import ApplyNewCard from "./apply-new-card/ApplyNewCard";
import Header from "./Header";
import Stories from "./stories/Stories";

export default function Home() {
  const { logout, user } = useAuth();

  // logout();
  return (
    <Layout>
      <Header />
      <Stories />
      <Accounts />
      <ApplyNewCard />
    </Layout>
  );
}
