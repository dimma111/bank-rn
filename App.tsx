import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./app/providers/AuthProvider";
import Navigation from "./app/navigation/Navigation";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

//Игнор варнингов и ошибок
// LogBox.ignoreAllLogs();
