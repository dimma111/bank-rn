import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./app/providers/AuthProvider";
import Navigation from "./app/navigation/Navigation";
import { DataProvider } from "./app/providers/DataProvider";
import StoryContainer from "./app/components/screens/home/stories/StoryContainer";

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <StoryContainer />
        <Navigation />
      </DataProvider>
    </AuthProvider>
  );
}

//Игнор варнингов и ошибок
// LogBox.ignoreAllLogs();
