import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./app/providers/AuthProvider";
import Navigation from "./app/navigation/Navigation";
import { DataProvider } from "./app/providers/DataProvider";

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Navigation />
      </DataProvider>
    </AuthProvider>
  );
}

//Игнор варнингов и ошибок
// LogBox.ignoreAllLogs();
