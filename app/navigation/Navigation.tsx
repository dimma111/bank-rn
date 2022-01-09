import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import Auth from "../components/screens/auth/Auth";
import Home from "../components/screens/home/Home";
import More from "../components/screens/more/More";
import Payments from "../components/screens/payments/Payments";
import Profile from "../components/screens/profile/Profile";
import Services from "../components/screens/services/Services";
import Support from "../components/screens/support/Support";
import { useAuth } from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="Payments" component={Payments}></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
            <Stack.Screen name="Support" component={Support}></Stack.Screen>
            <Stack.Screen name="Services" component={Services}></Stack.Screen>
            <Stack.Screen name="More" component={More}></Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
